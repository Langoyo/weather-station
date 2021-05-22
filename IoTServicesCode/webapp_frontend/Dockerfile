FROM node:latest
WORKDIR ./app/web
RUN npm install
RUN npm run build --prod


FROM httpd:2.4
RUN rm /usr/local/apache2/htdocs/*
COPY --from=build ./app/web/dist/web/* /usr/local/apache2/htdocs/