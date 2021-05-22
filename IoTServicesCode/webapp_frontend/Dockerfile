FROM node:12.7-alpine AS build
WORKDIR ./app/web
package.json package-lock.json ./
RUN npm install
RUN ng build --prod



FROM httpd:2.4
RUN rm /usr/local/apache2/htdocs/*
COPY ./app/web/dist/web/* /usr/local/apache2/htdocs/