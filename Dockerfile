FROM node:latest as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM nginx:1.19.8-alpine
COPY --from=build /app/dist/temperature-monitor /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf