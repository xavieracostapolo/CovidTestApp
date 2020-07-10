FROM node:12.18.2 AS compile-image

WORKDIR /app

COPY . ./

RUN npm cache clean --force
RUN npm install
RUN npm run build-prod



FROM nginx:1.13.9-alpine

COPY --from=compile-image /app/dist/frontend-covidtest-app/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]