<h1  align="center">Simple IOT Server</h1>
<p  align="center">
A simple server made with NodeJS, Express and PostgreSQL Datab for test IOT Devices easy
<p>


<p>
<div  align="center">
🚧 SimpleIOTServer is Under construction... 🚧
</div>
<br />
<p align="center">
<img  alt="Github top language"  src="https://img.shields.io/github/languages/top/enriquetecfan11/SimpleServer?color=56BEB8">
<img  alt="Github language count"  src="https://img.shields.io/github/languages/count/enriquetecfan11/SimpleServer?color=56BEB8">
<img  alt="Repository size"  src="https://img.shields.io/github/repo-size/enriquetecfan11/SimpleServer?color=56BEB8">
<img alt="Github issues" src="https://img.shields.io/github/issues/enriquetecfan11/SimpleServer?color=56BEB8" />
</p>


## :rocket: Technologies ##

Node, Express and PostgreSQL Database

## :memo: Contributing ##

This is and open source project if you want to collaborate look at issues and choose you want to collaborate 

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

## :checkered_flag: Starting ##

###  Quick Start

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
### 🐳 Quick Start Docker

If you want use this with docker:

First create image:

```console
$ docker build -t simple-server .
```

Second run image:

```console
$ docker run -dp 4000:4000 getting-started.
```



Made with :heart: by <a href="https://github.com/enriquetecfan11" target="_blank">Enrique Rodriguez</a>
