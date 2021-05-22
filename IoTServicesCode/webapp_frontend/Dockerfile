FROM httpd:2.4
WORKDIR ./app/web/
RUN rm /usr/local/apache2/htdocs/*
RUN ls
RUN mv ./app/web/dist/web/ /usr/local/apache2/htdocs/