FROM nginx:1.19

WORKDIR /etc/nginx/conf.d/

COPY ["default.conf", "/etc/nginx/conf.d/"]
COPY ["mime.types", "/etc/nginx/mime.types"]

CMD [ "nginx", "-g", "daemon off;" ]