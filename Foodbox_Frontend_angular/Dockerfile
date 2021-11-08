#First Stage
FROM node:17.0.1-alpine as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ..
RUN npm run build

#Second Stage
FROM nginx:1.21.3-alpine as prod-stage
COPY --from=build-step /app/dist/Kitchen-story /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]