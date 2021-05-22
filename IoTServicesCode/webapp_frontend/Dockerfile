FROM node:latest
WORKDIR ./app/web
RUN npm install -g npm@7.14.0
COPY . .
WORKDIR ./app/web
RUN node_modules/bin/ng build --prod


FROM httpd:2.4
RUN rm /usr/local/apache2/htdocs/*
COPY --from=build ./app/web/dist/web/* /usr/local/apache2/htdocs/