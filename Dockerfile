FROM nginx:latest

COPY ./dist /opt/web/dist
COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY ./config/upstream.conf /etc/nginx/default.d/upstream.conf