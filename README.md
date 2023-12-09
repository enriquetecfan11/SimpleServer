<h1  align="center">Simple IOT Server</h1>
<p  align="center">
A simple server made with NodeJS and Express for test IOT Devices easy

The difference between Simple Sever V2 and this one is that V2 can be used with PostgreSQL databases.

## 🚀 Technologies

Node JS, Express JS

If you want a  databse you will use PostgreSQL Database

## 📝 Contributing

This is and open source project if you want to collaborate look at issues and choose you want to collaborate

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

## 📦 Use Docker Container

Create Docker Image:

```console
$ docker build -t simple-server .
```

Run Docker Container:

```console
$ docker run -d -p 4000:4000 simple-server
```
The flag -d is for run the container in background
The flag -p is for map the port 4000 of the container to the port 4000 of the host

Made with ❤️ by Enrique Rodriguez Vela
