<h1> Simple Server || IOT Server </h1>

A simple server made with nodejs and express for test IOT Devices easy

The server have this routes:

/ - GET  -> To check if the server works

/ - POST -> To check if POST works

Testing Routes:

In the main folder there are a file called "client.http", in visual studio code you have to download REST Client for test [https://marketplace.visualstudio.com/items?itemName=humao.rest-client]


/sensores - POST -> To connect and esp32 and show the data in console

If you want to run for test your devices, use docker for simple usage,
following this steps:

1 - First you need to create your own image with this:
    "docker build --tag simple-server . "

2 - Then you need to run this command for start the container:
    "sudo docker run -d -p 3000:3000 --name simple-server simple-server"

3 - If you want to view the console.log of the container use this:
    "sudo docker logs -f <Nombre del contenedor>"
 
 
Docker command to use postgres -> docker run --name postgres -e POSTGRES_PASSWORD=yourpassword   -p 5432:5432 -d postgres
NOTE: Defautl DB is postgres
