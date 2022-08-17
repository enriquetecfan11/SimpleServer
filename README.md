

# Simple IOT Server

A simple server made with NodeJS, Express and PostgreSQL Datab for test IOT Devices easy
This is and open source project if you want to collaborate look at issues and choose you want to collaborate 

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![GitHub stars](https://img.shields.io/github/stars/enriquetecfan11/SimpleServer)](https://github.com/enriquetecfan11/SimpleServer/stargazers)

![GitHub repo file count](https://img.shields.io/github/directory-file-count/enriquetecfan11/SimpleServer)

## Tech Stack

Node, Express and PostgreSQL Database

## Contributing

This is and open source project if you want to collaborate look at issues and choose you want to collaborate 
[![GitHub issues](https://img.shields.io/github/issues/enriquetecfan11/SimpleServer)](https://github.com/enriquetecfan11/SimpleServer/issues)

## Routes

#### Create and IOT Sensor

```http
  POST /api/sensor
```
This endpoint create a new sensor

#### Post data form IOT Sensor

```http
  POST /api/sensores
```
This endpoint post the data of the sensor into the database

#### Get all the data from IOT Sensor

```http
  GET /api/sensores
```
This endpoint shows all the data of post sensores

#### Get data from sensor by ID

```http
  GET /api/sensores/:id
```
This endpoint show only the data for the id are you enter in the url

#### Delete a sensor by ID

```http
  DELETE /api/sensores/:id
```
This endpoint route deletes a sensor there are in the database

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
## Author

- Enrique Rodriguez Vela 
[![twitter/enriquetecfan](http://1.gravatar.com/avatar/d31ede569956380200b718ffe7ae90cf<)](http://twitter.com/enriquetecfan "Follow @enriquetecfan on Twitter") 
