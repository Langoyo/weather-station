
FROM node:latest as node
COPY /app /etc/usr/src/app
WORKDIR /etc/usr/src/app/web
RUN npm install \
    && npm run build --prod

FROM httpd:2.4
RUN rm /usr/local/apache2/htdocs/* -r
COPY --from=node /etc/usr/src/app/web/dist/web/* /usr/local/apache2/htdocs/
#WORKDIR /etc/usr/src/app/web

#RUN cp ./dist/web/* /usr/local/apache2/htdocs/ -r

