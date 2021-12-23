FROM nginx:1.21-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./devops-test.task.conf /etc/nginx/conf.d/
COPY ./nginx.conf ./proxy.conf /etc/nginx/
COPY ./html ./html
