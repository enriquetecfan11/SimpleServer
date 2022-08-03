const Sensores = require("../models/SensorModel")

const apiWorks = (req, res) => {
    res.status(200).json({
        message: 'Api Works'
    });
}

const postSensores = (req, res) => {
    var date = new Date();
    var timeString = date.toLocaleTimeString();
    const deviceTimestampConverted = new Date(req.body.time);
    const deviceTimestampString = deviceTimestampConverted.toLocaleTimeString();

    console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");

    console.log("Received time: " + timeString + "\n");

    console.log("Device: " + req.body.device + "\n");
    console.log("Device Timestamp: " + deviceTimestampString + "\n");
    console.log("Device Timestamp Converted: " + deviceTimestampConverted + "\n");
    console.log("Data: " + req.body.data + "\n");

    console.log("LoRa Packet RSSI: ", req.body.LoRa + "\n");
    console.log("LoRa Packet SNR: ", req.body.LoRaSNR + "\n");
    console.log("Tamaño del paquete Recibido: ", req.body.packetSize + "\n");

    console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");

    res.sendStatus(201);
}

const postSensor = (req, res) => {

    var date = new Date();
    var timeString = date.toLocaleTimeString();

    // var id = req.body.id;
    var dispositivo = req.body.dispositivo;

    // Insert id and dispositivo into the database
    Sensores.create({
        dispositivo: dispositivo
    }).then(() => {
        res.sendStatus(201);
    }
    ).catch(err => {
        res.sendStatus(500);
    });

    console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
    console.log("Received time: " + timeString + "\n")
    console.log("Recieved a post request" + "\n");
    console.log("Raw Request ->  ", req.body + "\n");
    console.log("Dispositivo: " + dispositivo + "\n");
    console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
}

const getSensores = (req, res) => {
    Sensores.findAll().then(sensores => {
        res.status(200).json(sensores);
    }
    ).catch(err => {
        res.sendStatus(500);
    });
}


module.exports = {
    apiWorks,
    postSensores,
    postSensor,
    getSensores,
}
