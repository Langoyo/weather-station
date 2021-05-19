FROM python:3.7.3

COPY /app /etc/usr/app

WORKDIR /etc/usr/app

RUN pip install requests paho-mqtt


ENTRYPOINT ["python"] 
CMD ["message_router.py"]
