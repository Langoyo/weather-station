import adafruit_dht
from board import *
import datetime
import serial
from datetime import date
import publisher as pub
import time
import signal
import json
import uuid
import threading
import pynmea2
from time import sleep
import sys
from RPLCD import CharLCD
from RPi import GPIO

GPIO.cleanup()
DHT_PIN = D4
dht11 = adafruit_dht.DHT11(DHT_PIN, use_pulseio=False)
humidity_message = "Humidity: 0%"
temperature_message = "Temperature: 0º"
showHumidity = True

lcd = CharLCD(numbering_mode=GPIO.BCM, cols=16, rows=2, pin_rs=25, pin_e=24, pins_data=[23, 17, 18, 22],
              charmap='A02',
              compat_mode=True)
lcd.clear()
lcd.write_string('Welcome')
BUTTON_GPIO = 21


def signal_handler(sig, frame):
    lcd.close(clear=True)
    GPIO.cleanup()
    sys.exit(0)


def temperatureSensor():
    """
        Measures temperature from the sensor and updates message to be printed and publishes data
    """
    newtemperature = 0
    global temperature_message
    while True:

        today = date.today()
        now = datetime.datetime.today().replace(microsecond=0)
        dht11.measure()
        temperature = dht11.temperature
        if temperature is not None:
            if newtemperature != temperature:
                newtemperature = temperature
                pub.send_temperature(newtemperature, now)
                temperature_message = "Temp={0:0.1f}C".format(newtemperature)
            print(temperature_message)
        else:
            lcd.clear()
            temperature_message = 'TempError'

        # Publishing new temperature every 60 seconds
        time.sleep(60)



def humiditySensor():
    """
        Measures temperature from the sensor and updates message to be printed and publishes data
    """
    newhumidity = 0
    global humidity_message
    while True:

        today = date.today()
        now = datetime.datetime.today().replace(microsecond=0)
        dht11.measure()
        humidity = dht11.humidity
        if humidity is not None:
            if newhumidity != humidity:
                newhumidity = humidity
                pub.send_humidity(newhumidity, now)
                humidity_message = "Humidity={}%".format(newhumidity)
            print("Humidity={}%".format(newhumidity))
        else:
            lcd.clear()
            humidity_message = 'HumError'

            # Publishing new humidity every 60 seconds
        time.sleep(60)


def showDataOnDisplay():
    """
        Displays data on the LCD screen
    """
    global showHumidity
    global humidity_message
    global temperature_message
    while True:
        lcd.clear()
        if showHumidity == True:
            lcd.write_string(humidity_message)
        else:
            lcd.write_string(temperature_message)
        time.sleep(1)


def button_handler(channel):
    global showHumidity
    showHumidity = not showHumidity


def weatherSensor():
    now = datetime.datetime.today().replace(microsecond=0)
    pub.make_connection()
    id = ':'.join(['{:02x}'.format((uuid.getnode() >> ele) & 0xff)
                   for ele in range(0, 8 * 6, 8)][::-1])
    print(id)
    pub.send_id("Device:" + id, now)



def parseGPS(read):
    cadena = str(read)
    if cadena.find('GGA') > 0:
        print(cadena)
        msg = pynmea2.parse(cadena[2:len(cadena)-5])
        print (msg.longitude, msg.latitude)
        location = "lat: "+str(msg.latitude) + "; lon: " + str(msg.longitude)
        return location


def locationSensor():
    """
    Location thread function
    """
    serialPort = serial.Serial("/dev/ttyAMA0", 9600, timeout=0.5)
    location = "Noy located yet"
    while True:
        read = serialPort.readline()
        now = datetime.datetime.today().replace(microsecond=0)
        new_location = parseGPS(read)
        if new_location is not None:
            location = new_location
        print(location)
        pub.send_location(location, now)
        time.sleep(3600)


if __name__ == '__main__':
    weatherSensor()
    GPIO.setup(BUTTON_GPIO, GPIO.IN, pull_up_down=GPIO.PUD_UP)
    GPIO.add_event_detect(BUTTON_GPIO, GPIO.FALLING,
                          callback=button_handler, bouncetime=100)

    location_thread = threading.Thread(target=locationSensor)
    humidity_thread = threading.Thread(target=humiditySensor)
    temperature_thread = threading.Thread(target=temperatureSensor)
    display_thread = threading.Thread(target=showDataOnDisplay)

    location_thread.start()
    temperature_thread.start()
    humidity_thread.start()
    display_thread.start()
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)


