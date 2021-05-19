import paho.mqtt.client as mqtt
import time
import json
import datetime

f = open('preferences.json', )
preferences = json.load(f)


def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected successfully")
    else:
        print("Connected with fail code", (rc))

client = mqtt.Client()

def make_connection():
    last_will = "{\"status\":\"Inactive\" , \"timestamp\":" +str(datetime.datetime.now().time())+"}"

    client.will_set(preferences['topic_1'], last_will)
    client.will_set(preferences['topic_2'], last_will)
    client.will_set(preferences['topic_3'], last_will)
    client.will_set(preferences['topic_4'], last_will)
    client.username_pw_set(username=preferences['name'], password=preferences['password'])

    client.on_connect = on_connect
    client.connect(preferences['ip'], int(preferences['port']), int(preferences['keep_alive']))

def send_temperature(temperature,time_stamp):
    temperature_payload = '{"value":"'+str(temperature)+'", "timestamp":"' + str(time_stamp) + '"}'
    client.publish(preferences['topic_1'], payload=temperature_payload, qos=int(preferences["qos"]), retain=False)
    time.sleep(1)

def send_humidity(humidity,time_stamp):
    humidity_payload = '{"value":"' + str(humidity) + '", "timestamp":"' + str(time_stamp) + '"}'
    client.publish(preferences['topic_2'], payload=humidity_payload, qos=int(preferences["qos"]), retain=False)
    time.sleep(1)

def send_id(id,time_stamp):
    device_payload = '{"value":"' + str(id) + '", "timestamp":"' + str(time_stamp) + '"}'
    client.publish(preferences['topic_3'], payload=device_payload, qos=int(preferences["qos"]), retain=False)
    time.sleep(1)

def send_location(location,time_stamp):
    device_payload = '{"value":"' + str(location) + '", "timestamp":"' + str(time_stamp) + '"}'
    client.publish(preferences['topic_4'], payload=device_payload, qos=int(preferences["qos"]), retain=False)
    time.sleep(1)