FROM node:12.7-alpine AS build
WORKDIR ./app/web
RUN npm install
FROM nginx:1.17.1-alpine
RUN npm run build --prod


FROM httpd:2.4
RUN rm /usr/local/apache2/htdocs/*
COPY --from=build ./app/web/dist/web/* /usr/local/apache2/htdocs/