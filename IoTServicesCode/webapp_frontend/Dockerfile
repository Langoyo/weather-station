FROM node:latest as node
RUN npm install


FROM httpd:2.4
COPY /app /etc/usr/src/app
WORKDIR /etc/usr/src/app
RUN rm /usr/local/apache2/htdocs/*
#RUN cp ./* /usr/local/apache2/htdocs/ -r
WORKDIR /etc/usr/src/app/web

RUN npm run build --prod
RUN cp ./dist/web/* /usr/local/apache2/htdocs/ -r
#RUN cp ./* /usr/local/apache2/htdocs/ -r


#COPY /app /etc/usr/src/app
#WORKDIR /etc/usr/src/app/web

#FROM nginx:alpine
#COPY --from=node /etc/usr/src/app/web/dist/web /usr/share/nginx/html