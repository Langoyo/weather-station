import adafruit_dht
from board import *
import datetime
from datetime import date
import publisher as pub
import time
import signal
import json
import uuid
import threading
DHT_PIN = D4
dht11 = adafruit_dht.DHT11(DHT_PIN, use_pulseio=False)
def signal_handler(sig, frame):
    sys.exit(0)

def temperatureSensor():
    newtemperature = 0
    while True:

        today = date.today()
        now = datetime.datetime.today().replace(microsecond=0)
        dht11.measure()
        temperature = dht11.temperature
        if temperature is not None:
            if newtemperature != temperature:
                newtemperature = temperature
                pub.send_temperature(newtemperature, now)
            print("Temp={0:0.1f}C".format(newtemperature))
        else:
            print("Sensor failure. Check wiring")
        # Publishing new temperature every 60 seconds
        time.sleep(60)
def humiditySensor():
    newhumidity=0
    while True:

        today = date.today()
        now = datetime.datetime.today().replace(microsecond=0)
        dht11.measure()
        humidity = dht11.humidity
        if humidity is not None:
            if newhumidity != humidity:
                newhumidity = humidity
                pub.send_humidity(newhumidity, now)
            print("Humidity={}%".format(newhumidity))
        else:
            print("Sensor failure. Check wiring")
            # Publishing new humidity every 60 seconds
        time.sleep(60)
def weatherSensor():
    now = datetime.datetime.today().replace(microsecond=0)
    pub.make_connection()
    id= ':'.join(['{:02x}'.format((uuid.getnode()>>ele) & 0xff)
                    for ele in range(0,8*6,8)][::-1])
    print(id)
    pub.send_id("Device:" + id,now)

def locationSensor():
    while True:
        now = datetime.datetime.now().time()
        location = "Change for data in GPS weather_station"
        pub.send_location(location,now)
        time.sleep (3600)


if __name__ == '__main__':

    weatherSensor()
    signal.signal(signal.SIGINT, signal_handler)
    location_thread=threading.Thread(tardget=locationSensor)
    humidity_thread = threading.Thread(target=humiditySensor)
    temperature_thread = threading.Thread(target=temperatureSensor)
    location_thread.start()
    temperature_thread.start()
    humidity_thread.start()