# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos de construcción de React a la carpeta donde Nginx los sirva
COPY dist/ /usr/share/nginx/html

# Expone el puerto 80 para poder acceder a la aplicación en Docker
EXPOSE 80

# Comando para iniciar Nginx (esto ya está predeterminado en la imagen de Nginx)
CMD ["nginx", "-g", "daemon off;"]
