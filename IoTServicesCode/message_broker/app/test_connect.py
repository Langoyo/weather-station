import paho.mqtt.client as mqtt
import os

def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected success")
    else:
        print("Connected fail with code",{rc})

client = mqtt.Client()
client.username_pw_set(username="perri",password="sabor4")
client.on_connect = on_connect
port = str(os.getenv('PORT'))
keepalive = str(os.getenv('KEEPALIVE'))
client.connect(os.getenv('IP'),int(port), int(keepalive))
client.loop_forever()