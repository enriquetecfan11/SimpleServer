# Usa la imagen oficial de Node.js como base
FROM node:14

# Instala PostgreSQL
RUN apt-get update && apt-get install -y postgresql

# Crea un directorio de trabajo para la aplicación
WORKDIR /app

# Copia los archivos del directorio actual al directorio de trabajo
COPY . .

# Instala las dependencias de la aplicación
RUN npm install

# Expone el puerto en el que la aplicación escucha
EXPOSE 4000

# Define las variables de entorno para la conexión a la base de datos
ENV PGUSER postgres
ENV PGHOST localhost
ENV PGDATABASE myapp
ENV PGPASSWORD mysecretpassword
ENV PGPORT 5432

# Inicia el servidor de Node.js
CMD [ "npm", "start" ]
