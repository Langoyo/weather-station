copy instance

# COMMON VARIABLES



NOMBRE_INSTANCIA=instance-microservices-students

PROYECTO_IMAGEN_GOLD=uc3m-inf-2021-13889-teachers

NOMBRE_IMAGEN_GOLD=image-microservices-students

--GOOGLE_CLOUD_PROJECT=uc3m-inf-2021-13889-g00



--# FROM ADMINISTRATOR CONSOLE



--GROUP_DESTINY='group:uc3m-inf-2021-13889@org.uc3m.es'

--gcloud beta compute machine-images add-iam-policy-binding $NOMBRE_IMAGEN_GOLD --project=$PROYECTO_IMAGEN_GOLD --member=$GROUP_DESTINY --role=roles/compute.admin



--EXAMPLE_STUDENT='user:<email address>'

--gcloud beta compute machine-images add-iam-policy-binding $NOMBRE_IMAGEN_GOLD --project=$PROYECTO_IMAGEN_GOLD --member=$EXAMPLE_STUDENT --role=roles/compute.admin



--# FROM STUDENTS CONSOLE



--gcloud beta compute instances create $NOMBRE_INSTANCIA --zone europe-west1-b --source-machine-image projects/$PROYECTO_IMAGEN_GOLD/global/machineImages/$NOMBRE_IMAGEN_GOLD --service-account $(gcloud projects describe $GOOGLE_CLOUD_PROJECT | grep projectNumber |cut -d"'" -f2)-compute@developer.gserviceaccount.com
docker exec-it mariaDB mysql

GRANT ALL ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'dso_password' WITH GRANT OPTION;



create database iot_data;

--11:15
FLUSH PRIVILEGES;

--11:17


--11:18
grant all privileges on iot_data.* TO 'iot_user'@'%' identified by '9R[-RP#64nY7*E*H';

flush privileges;

use iot_data;
CREATE TABLE sensor_data (

   id MEDIUMINT NOT NULL AUTO_INCREMENT,

   humidity float NOT NULL,

   temperature float NOT NULL,

   device_id varchar(50),
   
   timestamp TIMESTAMP,

   PRIMARY KEY (id)

 );

 select temperature, humidity, device_id FROM sensor_data ORDER BY id DESC LIMIT 1;

 CREATE TABLE devices (

   id MEDIUMINT NOT NULL AUTO_INCREMENT,

   device_id varchar(50) NOT NULL,

   UNIQUE (device_id),
   
   status varchar(10),

   location varchar(100),

   timestamp TIMESTAMP,

   PRIMARY KEY (id)

 );

select device_id FROM devices ORDER BY id DESC LIMIT 1;

--sudo mysql

--use iot_data;

--show * from sensor_data;
--show * from devices;


--move web files

--in folder with the files
-->> sudo cp *.* /var/www/html

--running apache to launch website

--sudo systemct1 status apache2

--export PYTHONPATH=~/sesion10-11/sesion10/