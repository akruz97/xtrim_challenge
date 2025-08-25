# Prueba Técnica
# Xtrim Challenge

Módulo de visualización de consumo de datos, saldos y minutos de clientes de empresa de telecomunicaciones.

## Requisitos

- Docker
- Docker Compose

## Ejecución del proyecto

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/akruz97/xtrim_challenge
   cd xtrim_challenge

2. **Configura los archivos de entorno:**

- Verifica que el archivo backend/.env exista y tenga las variables necesarias.
    ```sh
    DEBUG=True
    DJANGO_SETTINGS_MODULE=config.settings
    SECRET_KEY=9kspldiZ1R92YFPmKXRDdY1ef2afYUjQ2HYOdS8rBsBDyrsX/67YS2mNasE6owh0
    ALLOWED_HOSTS=*
    MYSQL_DB=telco_db
    MYSQL_USER=telco
    MYSQL_PASSWORD=12345
    MYSQL_HOST=172.0.0.1
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

6. **Usuarios de prueba:**

- Usuario1 / Codigo de cliente: 12345678
- Usuario2 / Código de cliente: 87654321

7. **Endpoints**
- GET - Obtener el consumo de un cliente: http:localhost:8000/consumption/<int:user_id>
- GET - Obtener los datos de un usuario: http:localhost:8000/user/<int:user_id>
- GET - Obtener el detalle del plan de un usuario: http:localhost:8000/user/plan/<int:user_id>
- POST - Verificar la existencia de un usuario por codigo de cliente http:localhost:8000/user/check
- GET - Obtener el detalle de factura de un usuario http:localhost:8000/user/invoice/<int:user_id>

7. **Servicios incluidos:**

- angular-frontend: Sirve la app Angular con Nginx.
- django-backend: API y lógica de negocio con Django.
- mysql-db: Base de datos MySQL.
- phpmyadmin: Interfaz web para administrar MySQL.