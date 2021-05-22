#FROM httpd:2.4
#COPY /app /etc/usr/src/app
#WORKDIR /etc/usr/src/app
#RUN cp ./web/dist/web/* /usr/local/apache2/htdocs/ -r
#RUN cp ./* /usr/local/apache2/htdocs/ -r

FROM node:latest as node
COPY /app /etc/usr/src/app
WORKDIR /etc/usr/src/app/web
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/web/dist/web /usr/share/nginx/html