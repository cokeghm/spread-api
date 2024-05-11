# Instrucciones de inicio del proyecto
Proyecto que permite consultar via RESTAPI los spread de mercados y generar y consultar alertas de spread vs spread de mercado de buda.com

# Requisitos previos
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

Docker
Node.js (si no se usa Docker)

# Instrucciones de instalación
Clona este repositorio en tu máquina local:

git clone <URL_del_repositorio>
Navega hasta el directorio del proyecto:
bash
Copy code
cd <nombre_del_directorio>
Utilizando Docker
Si prefieres utilizar Docker para ejecutar el proyecto:

Construye la imagen Docker:
bash
Copy code
docker build -t nombre_imagen .
Ejecuta el contenedor:
bash
Copy code
docker run -p 3000:3000 nombre_imagen
El servidor debería estar disponible en http://localhost:3000.

Sin Docker
Si prefieres ejecutar el proyecto sin Docker:

Instala las dependencias del proyecto:
bash
Copy code
npm install
Inicia el servidor:
bash
Copy code
npm start
El servidor debería estar disponible en http://localhost:3000.

Detener el servidor
Para detener el servidor en Docker, ejecuta el siguiente comando en otra terminal:

bash
Copy code
docker stop <ID_o_nombre_del_contenedor>
Para detener el servidor sin Docker, puedes presionar Ctrl + C en la terminal donde se está ejecutando el servidor.

¡Eso es todo! Ahora deberías tener el proyecto en funcionamiento en tu entorno local. Si tienes alguna pregunta o problema, no dudes en contactarnos.
