from flask import Flask, request
from flask_cors import CORS
import requests
import os

app=Flask(__name__)
CORS(app)

MEASUREMENTS_MICROSERVICE_ADDRESS =  os.getenv('MEASUREMENTS_MICROSERVICE_ADDRESS')
MEASUREMENTS_MICROSERVICE_PORT =  os.getenv('MEASUREMENTS_MICROSERVICE_PORT')
DEVICES_MICROSERVICE_ADDRESS = os.getenv('DEVICES_MICROSERVICE_ADDRESS')
DEVICES_MICROSERVICE_PORT = os.getenv('DEVICES_MICROSERVICE_PORT')
HOST = os.getenv('HOST')
PORT = os.getenv('PORT')
@app.route('/dso/measurements/')
def get_sensor_data():
    response=requests.get('http://'+MEASUREMENTS_MICROSERVICE_ADDRESS+':'+MEASUREMENTS_MICROSERVICE_PORT+'/measurements/retrieve/')
    return response.content

@app.route('/dso/devices/')
def get_device_list():
    response = requests.get('http://' + DEVICES_MICROSERVICE_ADDRESS + ':' + DEVICES_MICROSERVICE_PORT + '/devices/retrieve/')
    return response.content

@app.route('/dso/devices/query')
def get_device_query():
    data = request.get_json(force=True,silent=False, cache=True)
    response = requests.get('http://' + MEASUREMENTS_MICROSERVICE_ADDRESS + ':' + MEASUREMENTS_MICROSERVICE_PORT + '/measurements/query/',json=data)
    return response.content

app.run(host=HOST,port=PORT)