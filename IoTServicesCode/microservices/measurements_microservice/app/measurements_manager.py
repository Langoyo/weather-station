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

def measurements_query(params):
    """
    Parameterized query based on range of timestamps, device id and type of measurement
    """
    mydb = connect_database()
    r = []
    with mydb.cursor() as mycursor:
        val = (params["device_id"],params["start_date"],params["end_date"])

        # We make a different query depending on the type of measurement
        if params["type"] == "temp":
            sql= "SELECT temperature, device_id, timestamp FROM sensor_data WHERE device_id = %s AND timestamp BETWEEN %s AND %s ORDER BY id DESC;"
            mycursor.execute(sql,val)
            myresult = mycursor.fetchall()
            for temperature, device, timestamp in myresult:
                r.append({'temperature': temperature, 'humidity': '', 'device': device, "timestamp": str(timestamp)})
            r = json.dumps(r)

        elif params["type"] == "hum":
            sql= "SELECT  humidity, device_id, timestamp FROM sensor_data WHERE device_id = %s AND timestamp BETWEEN %s AND %s ORDER BY id DESC;"
            mycursor.execute(sql,val)
            myresult = mycursor.fetchall()
            for  humidity, device, timestamp in myresult:
                r.append({'temperature': '', 'humidity': humidity, 'device': device, "timestamp": str(timestamp)})
            r = json.dumps(r)

        elif params["type"]== "both":
            sql = "SELECT temperature, humidity, device_id, timestamp FROM sensor_data WHERE device_id = %s AND timestamp BETWEEN %s AND %s ORDER BY id DESC;"
            mycursor.execute(sql,val)
            myresult = mycursor.fetchall()
           
           
            for temperature, humidity, device, timestamp in myresult:
                r.append({'temperature': temperature, 'humidity': humidity, 'device': device, "timestamp": str(timestamp)})
            r = json.dumps(r)
        mydb.commit()
            
    return r
