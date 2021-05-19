FROM python:3.7.3

COPY /app /etc/usr/src/app

WORKDIR /etc/usr/src/app

RUN pip install Flask Flask-Cors requests PyYAML

ENTRYPOINT ["python"]
CMD ["web_api_rest.py"]