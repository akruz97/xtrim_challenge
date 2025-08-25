# Usar imagen oficial de Node para construir la app
FROM node:20 AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Usar Nginx para servir la app
FROM nginx:alpine
COPY --from=build /app/dist/telco_x/browser /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]