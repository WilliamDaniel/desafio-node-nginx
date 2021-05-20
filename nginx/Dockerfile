FROM nginx:1.19

WORKDIR /etc/nginx/conf.d/

COPY ["default.conf", "/etc/nginx/conf.d/"]

CMD [ "nginx", "-g", "daemon off;" ]