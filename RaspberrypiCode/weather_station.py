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
# ser = serial.Serial("/dev/ttyS0")
# gpgga_info = "$GPGGA,"
# GPGGA_buffer = 0
# NMEA_buff = 0
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

        time.sleep(6)
        # Publishing new temperature every 60 seconds


def humiditySensor():
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
        time.sleep(6)


def showDataOnDisplay():
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
        #msg = pynmea2.parse("$GPGGA,184353.07,1929.045,S,02410.506,E,1,04,2.6,100.00,M,-33.9,M,,0000*6D")
        print (msg.longitude, msg.latitude)


def locationSensor():
    serialPort = serial.Serial("/dev/ttyAMA0", 9600, timeout=0.5)
    while True:
        read = serialPort.readline()
        parseGPS(read)
        now = datetime.datetime.today().replace(microsecond=0)
        location = "Should be location"
        pub.send_location(location, now)

        time.sleep(3600)
#     while True:
#         received_data = (str)(ser.readline())  # read NMEA string received
#         GPGGA_data_available = received_data.find(
#             gpgga_info)  # check for NMEA GPGGA string
#         if (GPGGA_data_available > 0):
#             # store data coming after “$GPGGA,” string
#             GPGGA_buffer = received_data.split("$GPGGA,", 1)[1]
#             NMEA_buff = (GPGGA_buffer.split(','))
#             nmea_time = []
#             nmea_latitude = []
#             nmea_longitude = []
#             nmea_time = NMEA_buff[0]  # extract time from GPGGA string
#             nmea_latitude = NMEA_buff[1]  # extract latitude from GPGGA string
#             # extract longitude from GPGGA string
#             nmea_longitude = NMEA_buff[3]
#             print("NMEA Time: ", nmea_time, '\n')
#             lat = (float)(nmea_latitude)
#             lat = convert_to_degrees(lat)
#             longi = (float)(nmea_longitude)
#             longi = convert_to_degrees(longi)
#             now = datetime.datetime.today().replace(microsecond=0)
#             location = "NMEA Latitude:"+ lat+ "NMEA Longitude:"+ longi
#             print(location," at ", now)
#             pub.send_location(location, now)
#             time.sleep(5)


def convert_to_degrees(raw_value):
    decimal_value = raw_value / 100.00
    degrees = int(decimal_value)
    mm_mmmm = (decimal_value - int(decimal_value)) / 0.6
    position = degrees + mm_mmmm
    position = "%.4f" % (position)
    return position


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


