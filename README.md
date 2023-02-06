<h1  align="center">Simple IOT Server</h1>
<p  align="center">
A simple server made with NodeJS, Express and PostgreSQL Datab for test IOT Devices easy

The server have two branches the main is for live development with database settings for connect to PostgreSQL Database

Now for local testing we are not usign the database

## 🚀 Technologies

Node JS, Express JS

If you want a  databse you will use PostgreSQL Database

## 📝 Contributing

This is and open source project if you want to collaborate look at issues and choose you want to collaborate

## Routes

#### Hello World API

```http
  GET /
```

This endpoint return and html page for test the API

#### Post to medidas

```http
  POST /api/medidas
```



If you want to test the medidas endpoint you have to send this data:

```json
{
  "dispositivo" : "",
  "hora" : "",
  "wind" : "",
  "dirWind" : "",
  "luxes" : "",
  "wifirrsi" : "",
  "rain" : "",
  "temperatura" : "",
  "humedadAire" : "",
  "temp1" : "",
  "hum1" : ""
}
```

This endpoint post data to the api

#### Post to /estacion

```http
  POST /api/estacion
```


If you want to test the estacion endpoint you have to send this data:

```json
{
  "date": "",
  "device": "",
  "hora": "",
  "wind": "",
  "dirWind": "",
  "luxes": "",
  "wifirrsi": "",
  "rain": "",
  "temperatura": "",
  "humedadAire": ""
}
```

This endpoint is for only post weather station things

#### Post to /api/temperaturaSuelo

```http
  POST /api/temperaturaSuelo
```



If you want to test the estacion endpoint you have to send this data:

```json
{
  "date": "",
  "device": "",
  "hora": "",
  "temperatura": "",
  "humedad": "",
  "Tempground": "",
  "Tempburied": ""
}
```


This endpoint post data only to temperatura suelo (Only two soil probes and one ambient temperature and humidity.)

#### Post to /temperaturaDos

```
POST /api/temperaturaDos
```



If you want to test the temperaturadDos endpoint you have to send this data:

```json

{
  "date": "",
  "device": "",
  "hora": "",
  "temperatura": "",
  "humedadAire": "",
  "temp1": "",
  "hum1": "",
  "temp2": "",
  "hum2": ""
}
```

This endpoint post data only temperaturaDos (Only two ambient temperature and humidity probes)

## 🏁 Starting

### Quick Start

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

Made with ❤️ by Enrique Rodriguez Vela
