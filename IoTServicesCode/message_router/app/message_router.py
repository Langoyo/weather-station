import paho.mqtt.client as mqtt
import json
from measurement_register_interface import *
from device_register_interface import *
import os

my_json=[]
current_temperature= "0"
current_humidity= "0"
new_temperature = "0"
new_humidity = "0"
new_id = "0"
current_id = "01"
current_location="Default"
TOPIC_1 = os.getenv('TOPIC_1')
TOPIC_2 = os.getenv('TOPIC_2')
TOPIC_3 = os.getenv('TOPIC_3')
TOPIC_4 = os.getenv('TOPIC_4')



def on_connect(client, userdata, flags, rc):
    if rc==0:
        print('Connected success')
        print(TOPIC_1,TOPIC_2,TOPIC_3,TOPIC_4)
        client.subscribe(TOPIC_1)
        client.subscribe(TOPIC_2)
        client.subscribe(TOPIC_3)
        client.subscribe(TOPIC_4)
    else:
        print('Connection failed with code',{rc})

def on_message(client, userdata, msg):

    print(msg)
    global current_temperature, current_humidity, my_json, new_temperature, new_humidity, current_id, new_id, new_location, current_location
    print(msg.payload.decode('utf-8', 'ignore'))
    if msg.topic==TOPIC_1 :
        new_temperature=str(msg.payload.decode('utf-8', 'ignore'))
        new_temperature = json.loads(new_temperature)
        if 'status' not in new_temperature:
            current_temperature = new_temperature['value']
            print(msg.topic," is ",current_temperature)
            data = {'temperature': current_temperature, 'humidity': current_humidity,'device':current_id, 'timestamp': new_temperature['timestamp']}
            submit_data_to_store(data)
        else:
            off_data={"status":new_temperature['status'],"device":current_id,'timestamp': new_temperature['timestamp']}
            submit_error_info(off_data)

    if msg.topic==TOPIC_2:
        new_humidity = str(msg.payload.decode('utf-8', 'ignore'))
        new_humidity = json.loads(new_humidity)
        if 'status' not in new_humidity:
            current_humidity = new_humidity['value']
            print(msg.topic," is ",current_humidity)
            data = {'temperature': current_temperature, 'humidity': current_humidity, 'device':current_id, 'timestamp': new_humidity['timestamp']}
            submit_data_to_store(data)
        else:
            off_data={"status":new_humidity['status'],"device":current_id,"timestamp":new_humidity['timestamp']}
            submit_error_info(off_data)

    if msg.topic==TOPIC_3:
        new_id = str(msg.payload.decode('utf-8', 'ignore'))
        new_id = json.loads(new_id)
        if 'status' not in new_id:

            current_id = new_id['value']
            print(msg.topic, " is ", current_id)
            data = {"device":current_id,"status":"Active","timestamp":new_id['timestamp']}
            submit_device_info_to_store(data)
        else:
            new_status=new_id['status']
            data={"status":new_status,"device":current_id,"timestamp":new_id['timestamp']}
            submit_error_info(data)


    if msg.topic==TOPIC_4:
        new_location = str(msg.payload.decode('utf-8', 'ignore'))
        new_location = json.loads(new_location)
        if 'status' not in new_location:
            
           current_location = new_location['value']
           print(msg.topic, " is ",current_location)
           data = {"device":current_id,"location":current_location,"timestamp":new_location['timestamp']}
           submit_location(data)
        else:
            new_status=new_id['status']
            data={"status":new_status,"device":current_id,"timestamp":new_location['timestamp']}
            submit_error_info(data)
            


BROKER_USER = os.getenv('BROKER_USER')
BROKER_PORT = os.getenv('BROKER_PORT')
BROKER_ADDRESS = os.getenv('BROKER_ADDRESS')
BROKER_KEEP_ALIVE = os.getenv('BROKER_KEEP_ALIVE')
PASSWORD = os.getenv('PASSWORD')
client = mqtt.Client()
print(BROKER_USER,PASSWORD)
client.username_pw_set(username=BROKER_USER, password=PASSWORD)
client.on_connect = on_connect
client.on_message = on_message
print("connecting to broker ", BROKER_ADDRESS)
client.connect(BROKER_ADDRESS, int(BROKER_PORT), int(BROKER_KEEP_ALIVE))
client.loop_forever()
