import adafruit_dht
#from board import *
import datetime
from datetime import date
import publisher as pub
import time
import signal
import json
import uuid
import threading
#DHT_PIN = D4
import random
import sys
#dht11 = adafruit_dht.DHT11(DHT_PIN, use_pulseio=False)
def signal_handler(sig, frame):
    sys.exit(0)

def temperatureSensor():
    newtemperature = 0
    while True:

        
        today = date.today()
        now = datetime.datetime.now().time()
        #dht11.measure()
        #temperature = dht11.temperature
        temperature = random.randint(0,25)
        if temperature is not None:
            if newtemperature != temperature:
                newtemperature = temperature
                pub.send_temperature(newtemperature, now)
            print("Temp={0:0.1f}C".format(newtemperature))
        else:
            print("Sensor failure. Check wiring")
        time.sleep(3)
def humiditySensor():
    newhumidity=0
    while True:

        today = date.today()
        
        now = datetime.datetime.now().time()
        #dht11.measure()
        #humidity = dht11.humidity
        humidity = random.randint(0,25)
        if humidity is not None:
            if newhumidity != humidity:
                newhumidity = humidity
                pub.send_humidity(newhumidity, now)
            print("Humidity={}%".format(newhumidity))
        else:
            print("Sensor failure. Check wiring")
        time.sleep(3)
def weatherSensor():
    pub.make_connection()
    id= ':'.join(['{:02x}'.format((uuid.getnode()>>ele) & 0xff)
                    for ele in range(0,8*6,8)][::-1])
    print(id)
    pub.send_id(id,time.time())



if __name__ == '__main__':

    weatherSensor()
    signal.signal(signal.SIGINT, signal_handler)
    humidity_thread = threading.Thread(target=humiditySensor)
    temperature_thread = threading.Thread(target=temperatureSensor)
    temperature_thread.start()
    humidity_thread.start()