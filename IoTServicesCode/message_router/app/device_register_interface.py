import requests
import os
def submit_device_info_to_store(data):
    ADDRESS = os.getenv('DEVICES_IP')
    PORT = os.getenv('DEVICES_PORT')
    r = requests.post(url='http://' +  ADDRESS + ':' + PORT + '/devices/register', json=data)