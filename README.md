# Xtrim Challenge

## Requisitos

- Docker
- Docker Compose

## Ejecución del proyecto

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/akruz97/xtrim_challenge
   cd xtrim_challenge

2. **Configura los archivos de entorno:**

- Verifica que el archivo backend/.env.development exista y tenga las variables necesarias.
    ```sh
    DEBUG=True
    DJANGO_SETTINGS_MODULE=config.settings
    SECRET_KEY=9kspldiZ1R92YFPmKXRDdY1ef2afYUjQ2HYOdS8rBsBDyrsX/67YS2mNasE6owh0
    ALLOWED_HOSTS=*
    MYSQL_DB=telco_db
    MYSQL_USER=telco
    MYSQL_PASSWORD=12345
    MYSQL_HOST=mysql-db
    MYSQL_PORT=3306
    MYSQL_ROOT_PASSWORD=telco


3. **Construye y levanta los servicios:**
    ```sh
    docker compose up -d --build

4. **Aplica migraciones y carga datos en la base de datos:**
    ```sh
    docker exec -it django-backend python manage.py migrate
    docker exec -it django-backend python manage.py load_plans
    docker exec -it django-backend python manage.py load_clients
    docker exec -it django-backend python manage.py load_plan_clients
    docker exec -it django-backend python manage.py load_consumptions
# Agrega aquí otros comandos personalizados que tengas

5. **Accede a la aplicación:**

- Frontend Angular: http://localhost:4200
- Backend Django: http://localhost:8000
- phpMyAdmin (opcional): http://localhost:8082

6. **Detener los servicios:**

Servicios incluidos
angular-frontend: Sirve la app Angular con Nginx.
django-backend: API y lógica de negocio con Django.
mysql-db: Base de datos MySQL.
phpmyadmin: Interfaz web para administrar MySQL.