import mysql.connector
import json
import os
def connect_database ():

    mydb=mysql.connector.connect(
        host =os.getenv('DBHOST'),
        user=os.getenv('DBUSER'),
        password=os.getenv('DBPASSWORD'),
        database=os.getenv('DBDATABASE'),
    )
    return mydb

def measurments_retriever():
    mydb = connect_database()
    r = []
    with mydb.cursor() as mycursor:
        mycursor.execute("SELECT temperature, humidity, device_id, timestamp FROM sensor_data ORDER BY id DESC;")
        myresult = mycursor.fetchall()
        for temperature, humidity, device, timestamp in myresult:
            r.append({'temperature': temperature, 'humidity': humidity, 'device': device, "timestamp": str(timestamp)})
        r = json.dumps(r)
        mydb.commit()
    return r

def measurements_register(params):
    mydb=connect_database()
    with mydb.cursor() as mycursor:
        sql= "INSERT INTO sensor_data (temperature, humidity, device_id, timestamp) VALUES (%s,%s,%s,%s)"
        val=(params["temperature"],params["humidity"], params["device"],params["timestamp"])
        mycursor.execute(sql,val)
        mydb.commit()
        print(mycursor.rowcount,"record inserted.")