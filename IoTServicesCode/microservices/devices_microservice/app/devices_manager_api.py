from flask import Flask, request
from flask_cors import CORS
from devices_manager import *
import os
app = Flask(__name__)
CORS(app)

@app.route('/devices/register/', methods = ['POST'])
def save_deviceinfo():
    params = request.get_json()
    devices_register(params)
    return {'result': 'record inserted'}, 201

@app.route('/devices/retrieve/')
def retrieve_devices():
    return devices_retriever()

# New method to deactivate a device
@app.route('/devices/error/', methods = ['POST'])
def remove_device():
    params = request.get_json()
    devices_deactivator(params)
    return {'result': 'record removed'}, 201

# new method to save location of a device
@app.route('/devices/location/', methods = ['POST'])
def locate_device():
    params = request.get_json()
    devices_locator(params)
    return {'result': 'record updated'}, 201


HOST = os.getenv('HOST')
PORT = os.getenv('PORT')
app.run(host = HOST, port = PORT)
