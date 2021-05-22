FROM httpd:2.4
COPY /app /etc/usr/src/app
WORKDIR /etc/usr/src/app

RUN ls ./web/dist/web/
RUN ls /usr/local/apache2/htdocs/
#COPY /etc/usr/src/app/web/dist/web/ /usr/local/apache2/htdocs/