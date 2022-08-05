// const Medidas = require("../models/MedidasModel");
// const Sensores = require("../models/SensorModel")

const db = require('../models')
const Sensores = db.sensores;
const Medidas = db.medidas;

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
    var dispositivo = req.body.dispositivo;

    // Validate request
    if (!dispositivo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // // Create a Sensor object
    const sensor = {
        dispositivo: dispositivo,
    }

    // Save Sensor in the database
    Sensores.create(sensor)
        .then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Sensor."
            });
        });

}

const getSensores = (req, res) => {
    Sensores.findAll().then(sensores => {
        res.status(200).json(sensores);
    }
    ).catch(err => {
        res.sendStatus(500);
    });
}

const getSensoresByID = (req, res) => {
    Sensores.findOne({
        where: {
            id: req.params.id
        }

        // If id doesn't exist, return 404
    }).then(sensor => {
        if (!sensor) {
            res.sendStatus(404);
        } else {
            res.status(200).json(sensor);
        }
    }
    ).catch(err => {
        res.sendStatus(500);
    }
    );
}

const deleteSensorById = (req, res) => {
    Sensores.destroy({
        where: {
            id: req.params.id
        }
    }).then(sensor => {
        if (!sensor) {
            res.sendStatus(404);
        } else {
            res.sendStatus(204);
        }
    }
    ).catch(err => {
        res.sendStatus(500);
    });
}

const postMedidas = (req, res) => {
    var date = new Date();

    var dispositivo = req.body.dispositivo;
    var timestamp = req.body.timestamp;
    var temperatura = req.body.temperatura;
    var humedad = req.body.humedad;

    // Insert into database
    Medidas.create({
        dispositivo: dispositivo,
        timestamp: timestamp,
        temperatura: temperatura,
        humedad: humedad
    }).then(medida => {
        res.status(201).json(medida);
    }
    ).catch(err => {
        res.sendStatus(500);
    });


    console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
    console.log("Received time: " + date.toLocaleTimeString() + "\n")
    console.log("Recieved a post request" + "\n");
    // console.log("Raw Request ->  ", req.body + "\n");
    console.log("Dispositivo: " + dispositivo + "\n");
    console.log("Timestamp: " + timestamp + "\n");
    // Timestamp to local time
    var fechasensor = new Date(timestamp);
    console.log("Timestamp Converted: " + fechasensor.toLocaleTimeString() + "\n");
    console.log("Temperatura: " + temperatura + "\n");
    console.log("Humedad: " + humedad + "\n");
    console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
}

const getMedidas = (req, res) => {
    Medidas.findAll().then(medidas => {
        res.status(200).json(medidas);
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
    getSensoresByID,
    deleteSensorById,
    postMedidas,
    getMedidas
}
