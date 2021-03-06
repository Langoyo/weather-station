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
        mycursor.execute("SELECT device_id,status,location,timestamp FROM devices ORDER BY id DESC")
        myresult = mycursor.fetchall()
        for (device_id,status,location,timestamp) in myresult:
            r.append({"device_id": device_id , "status" : status , "location" : str(location) , "timestamp" : str(timestamp) })
        mydb.commit()
        r = json.dumps(r)
    return r
    
def devices_deactivator(params):
    """
    Updates a device as inactive
    """
    mydb=connect_database()
    with mydb.cursor() as mycursor:
        sql= "UPDATE devices SET status=%s, timestamp=%s WHERE device_id=%s"
        val=(params["status"], params["timestamp"], params["device"])
        try:
            mycursor.execute(sql,val)
            mydb.commit()
            print(mycursor.rowcount,"record modified with status.")
        except:
            print("Error deactivating device")

def devices_locator(params):
    """
    Updates the location of a device
    """
    mydb=connect_database()
    with mydb.cursor() as mycursor:
        sql= "UPDATE devices SET location=%s ,timestamp=%s WHERE device_id=%s"
        val=(params["location"], params["timestamp"], params["device"])
        device_id=(val,)
        try:
            mycursor.execute(sql,val)
            mydb.commit()
            print(mycursor.rowcount,"record updated with location.")
        except:
            print("Error updating location")


def devices_register(params):
    """
    Register a device if new or activates it if it already exists
    """
    mydb=connect_database()
    with mydb.cursor() as mycursor:

        if check_existing_device(params["device"]):
            sql= "UPDATE devices SET status=%s, timestamp=%s WHERE device_id = %s"
            val=('Active',params["timestamp"] ,params["device"])
            try:
                mycursor.execute(sql,val)
                mydb.commit()
                print(mycursor.rowcount,"record updated.")
            except:
                print("Error registering the device")
        else:    
            sql= "INSERT INTO devices (device_id,status) VALUES (%s,%s)"
            val=(params["device"],'Active')
            device_id=(val,)
            try:
                mycursor.execute(sql,val)
                mydb.commit()
                print(mycursor.rowcount,"record inserted.")
            except:
                print("Error registering the device")

def check_existing_device(id):
    """
    Checks if a device exists in the database
    """
    mydb=connect_database()
    print(id)
    with mydb.cursor() as mycursor:
        sql= "SELECT device_id FROM devices WHERE device_id = %s"
        val = (id,)
        mycursor.execute(sql,val)
        myresult = mycursor.fetchall()
        if len(myresult) > 0:
            return True
        else:
            return False
        