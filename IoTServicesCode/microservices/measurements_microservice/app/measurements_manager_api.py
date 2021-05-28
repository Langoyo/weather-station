from flask import Flask, request
from flask_cors import CORS
import os
from measurements_manager import *
app = Flask(__name__)
CORS(app)
"""
@app.route('/save_measures', method = ['POST'])
def save_measures():
    measurements_register()
"""
"""
@app.route('/submit_device_info_to_Store', method=['POST'])
def save_deviceinfo():
    devices_register()
"""

@app.route('/measurements/register/', methods = ['POST'])
def set_measurement():
    params = request.get_json()
    measurements_register(params)
    return {"result":"record inserted"}, 201


@app.route('/measurements/retrieve/')
def get_measurements():
    return measurments_retriever()

@app.route('/measurements/query/')
def get_measurements():
    params = request.get_json()
    return measurements_query(params)

HOST = os.getenv('HOST')
PORT = os.getenv('PORT')
app.run(host = HOST, port = PORT)