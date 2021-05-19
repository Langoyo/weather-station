import requests
import os
def submit_device_info_to_store(data):
    ADDRESS = os.getenv('DEVICES_IP')
    PORT = os.getenv('DEVICES_PORT')
    r = requests.post(url='http://' +  ADDRESS + ':' + PORT + '/devices/register', json=data)

def submit_error_info(data):
    ADDRESS = os.getenv('DEVICES_IP')
    PORT = os.getenv('DEVICES_PORT')
    r = requests.post(url='http://' +  ADDRESS + ':' + PORT + '/devices/error', json=data)

def submit_location(data):
    ADDRESS = os.getenv('DEVICES_IP')
    PORT = os.getenv('DEVICES_PORT')
    r = requests.post(url='http://' +  ADDRESS + ':' + PORT + '/devices/location', json=data)    