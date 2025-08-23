# Usa Python 3.11 slim (basado en Linux)
FROM python:3.11-slim

# Actualiza e instala dependencias del sistema
RUN apt-get update && apt-get install -y \
    build-essential \
    g++ \
    libpq-dev \
    libssl-dev \
    libffi-dev \
    libxml2-dev \
    libxslt1-dev \
    zlib1g-dev \
    libjpeg-dev \
    meson \
    ninja-build \
    libboost-dev \
    libboost-system-dev \
    libboost-filesystem-dev \
    libboost-thread-dev \
    libboost-program-options-dev \
    libboost-iostreams-dev \
    libboost-python-dev \
    && rm -rf /var/lib/apt/lists/*

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de requisitos
COPY requirements /app/requirements

# Actualiza pip e instala las dependencias de Python
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements/dev.txt

# Verifica que g++ esté instalado
RUN g++ --version || echo "g++ no está instalado"

# Copia el resto del código de la aplicación
COPY . /app

# Usar Gunicorn como entrypoint (para producción)
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "config.wsgi:application"]
