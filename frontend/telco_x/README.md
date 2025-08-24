# Xtrim Challenge

## Requisitos

- Docker
- Docker Compose

## Ejecución del proyecto

1. **Clona el repositorio:**
   ```sh
   git clone <URL-del-repositorio>
   cd xtrim_challenge

2. Configura los archivos de entorno:

- Verifica que el archivo backend/.env.development exista y tenga las variables necesarias.

3. Construye y levanta los servicios:
docker compose up -d --build

4. Aplica migraciones y carga datos en la base de datos:
docker exec -it django-backend python manage.py migrate
docker exec -it django-backend python manage.py load_clients
docker exec -it django-backend python manage.py load_consumptions
# Agrega aquí otros comandos personalizados que tengas

5. Accede a la aplicación:

Frontend Angular: http://localhost:4200
Backend Django: http://localhost:8000
phpMyAdmin (opcional): http://localhost:8080

6. Detener los servicios:

Servicios incluidos
angular-frontend: Sirve la app Angular con Nginx.
django-backend: API y lógica de negocio con Django.
mysql-db: Base de datos MySQL.
phpmyadmin: Interfaz web para administrar MySQL.