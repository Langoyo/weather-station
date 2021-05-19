import adafruit_dht
#from board import *
import datetime
from datetime import date
import publisher as pub
import time
import json
import random
def weatherSensor():
    #DHT_PIN = D4
    #dht11 = adafruit_dht.DHT11(DHT_PIN,use_pulseio=False)


    pub.make_connection()
    newtemperature = 0
    newhumidity = 0

    while True:
        today = date.today()
        now = datetime.datetime.now().time()
        #dht11.measure()
        humidity=random.randint(0,15)
        temperature = random.randint(0,15)
        pub.send_id('sensor_01',now)
        if humidity is not None and temperature is not None:
            if newtemperature != temperature:
                newtemperature = temperature
                pub.send_temperature(newtemperature,now)
            if newhumidity != humidity:
                newhumidity = humidity
                pub.send_humidity(newhumidity,now)
                print("Temp={0:0.1f}C Humidity={1:0.1f}%".format(newtemperature, newhumidity))
        else:
            print("Sensor failure. Check wiring")
        time.sleep(3)

if __name__ == '__main__':
    weatherSensor()