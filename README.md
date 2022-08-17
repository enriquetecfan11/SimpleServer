
# Simple IOT Server

A simple server made with NodeJS, Express and PostgreSQL Datab for test IOT Devices easy
This is and open source project if you want to collaborate look at issues and choose you want to collaborate 

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]+

##  Quick Start

In order to start testing the server, you must follow these steps:

```console
$ git clone https://github.com/enriquetecfan11/SimpleServer.git
```
Install dependencies:

```console
$ npm install
```

  Start the server normal mode:

```console
$ npm start
```

Start Server Developer Mode:
```console
$ npm run dev
```
## Quick With Docker
This server is ready for use with docker, but you use 2 docker container one the server and another for the PostgreSQL Database:

First create the docker simple-server:
 
1 - First you need to create your own image with this:
```console
docker build --tag simple-server . 
```
  

2 - Then you need to run this command for start the container:
```
sudo docker run -d -p 3000:3000 --name simple-server simple-server
```

3 - If you want to view the console.log of the container use this:

```
sudo docker logs -f <ContainerName>
```
Second create docker PostgreSQL Database:

docker run --name postgres -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres

> Default DB is postgres


## Server Routes 
-   Post Sensor -> This route creates a sensor in the database
-   Post Sensores ->  This route post the data of the sensor into the database 
-   Get Sensors -> This route shows all the data of post sensores
-   Get Sensors by ID -> This route show only the data for the id are you enter in the url
-   Delete Sensors by ID -> This route deletes a sensor

Example Url: `http://localhost:4000/api/sensores`

## Author

[![twitter/enriquetecfan](http://1.gravatar.com/avatar/d31ede569956380200b718ffe7ae90cf<)](http://twitter.com/enriquetecfan "Follow @enriquetecfan on Twitter") 

