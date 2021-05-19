import mysql.connector
import json
import os
def connect_database ():
    
    DBHOST = os.getenv('DBHOST')
    DBUSER = os.getenv('DBUSER')
    DBPASSWORD = os.getenv('DBPASSWORD')
    DBDATABASE = os.getenv('DBDATABASE')
    mydb=mysql.connector.connect(
        host =DBHOST,
        user=DBUSER,
        password=DBPASSWORD,
        database=DBDATABASE,
    )
    return mydb

def devices_retriever():
    mydb = connect_database()
    r = []
    with mydb.cursor() as mycursor:
        mycursor.execute("SELECT device_id FROM devices ORDER BY id DESC")
        myresult = mycursor.fetchall()
        for device_id in myresult:
            r.append({"device_id": device_id})
        mydb.commit()
        r = json.dumps(r)
    return r

def devices_register(params):
    mydb=connect_database()
    with mydb.cursor() as mycursor:
        sql= "INSERT INTO devices (device_id) VALUES (%s)"
        val=(params["device"])
        device_id=(val,)
        try:
            mycursor.execute(sql,device_id)
            mydb.commit()
            print(mycursor.rowcount,"record inserted.")
        except:
            print("Error registering the device")