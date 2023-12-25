FROM node:18 AS build

WORKDIR /app

COPY package*.json .
RUN npm install
RUN npm install -g @angular/cli

COPY . .
RUN ng build

# ----------------------------
# run with nginx
# ----------------------------
FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build /app/dist/doc-app /usr/share/nginx/html

EXPOSE 80