# Instrucciones de inicio del proyecto
Proyecto que permite , via restAPI, consultar los spread de mercados de buda.com, y generar y consultar alertas de spread vs spread de mercado.

# Requisitos previos
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

1. Docker
2. Node.js (si no se usa Docker)

# Instrucciones de instalación
Clona este repositorio en tu máquina local:

`git clone https://github.com/cokeghm/spread-api.git`

# Navega hasta el directorio del proyecto:

`cd dir/spread-api`

  # Utilizando Docker
  Si prefieres utilizar Docker para ejecutar el proyecto:
  
  Construye la imagen Docker:
  
  `docker build -t spread-api .`
  
  Ejecuta el contenedor:
  
  `docker run -p 3000:3000 spread-api`
  
  El servidor debería estar disponible en `http://localhost:3000`.

  # Sin Docker
  Si prefieres ejecutar el proyecto sin Docker:
  
  Instala las dependencias del proyecto:
  `npm install`
  
  Inicia el servidor:
  `npm start`
  
 ### El servidor debería estar disponible en http://localhost:3000 y puedes hacer tus consultas segun documentación en swagger: http://localhost:3000/api-docs 

# Detener el servidor
Para detener el servidor en Docker, ejecuta el siguiente comando en otra terminal:

`docker stop spread-api`

Para detener el servidor sin Docker, puedes presionar `Ctrl + C` en la terminal donde se está ejecutando el servidor.

¡Eso es todo! Ahora deberías tener el proyecto en funcionamiento en tu entorno local. Si tienes alguna pregunta o problema, no dudes en contactarme al correo cokeghm@gmail.com (Jorge Gonzalez).
