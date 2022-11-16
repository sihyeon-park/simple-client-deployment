FROM nginx:alpine

RUN cd /client && yarn build

COPY /client/dist /usr/share/nginx/html
