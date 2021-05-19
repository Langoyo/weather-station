import requests
import os


def submit_data_to_store(data):
    ADDRESS = os.getenv('MEASUREMENTS_IP')
    PORT = os.getenv('MEASUREMENTS_PORT')
    r = requests.post(url='http://' +  ADDRESS + ':' + str(PORT) + '/measurements/register', json=data)
