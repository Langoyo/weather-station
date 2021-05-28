
FROM node:latest as node
COPY /app /etc/usr/src/app
WORKDIR /etc/usr/src/app/web
RUN npm install
RUN npm run build --prod

FROM httpd:2.4
COPY --from=node /etc/usr/src/app /etc/usr/src/app
WORKDIR /etc/usr/src/app/web
RUN rm /usr/local/apache2/htdocs/* -r
RUN cp ./dist/web/* /usr/local/apache2/htdocs/ -r

