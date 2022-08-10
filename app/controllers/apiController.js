const db = require('../models')
const Sensores = db.sensores;
const Medidas = db.medidas;
const Pruebas = db.pruebas;

const apiWorks = (req, res) => {
    res.status(200).json({
        message: 'Api Works'
    });
}

const postSensores = (req, res) => {
    var date = new Date();
    var timeString = date.toLocaleTimeString();
    var dispositivo = req.body.device;
    var wifiRssi = req.body.wifiRssi;
    var data = req.body.data;
    var rssi = req.body.rssi;
    var snr = req.body.snr;
    var packetSize = req.body.packetSize;

    const medidas_prueba = {
        dispositivo: dispositivo,
        wifiRssi: wifiRssi,
        data: data,
        rssi: rssi,
        snr: snr,
        packetSize: packetSize
    }

    Pruebas.create(medidas_prueba)
        .then(data => {
            res.status(201).json(data);
        }
        ).catch(err => {
            res.sendStatus(500);
            console.log(err);
        });

    // console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
    // console.log("Received time: " + timeString + "\n")
    // console.log("Recieved a post request" + "\n");
    // // console.log("Raw Request ->  ", req.body + "\n");
    // console.log("Dispositivo: " + dispositivo + "\n");
    // console.log("WifiRSSI: " + wifiRssi + "\n");
    // console.log("Data: " + data + "\n");
    // console.log("LoRaRSSI: " + rssi + "\n");
    // console.log("LoRaSNR: " + snr + "\n");
    // console.log("PacketSize: " + packetSize + "\n");
    // console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
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
    Pruebas.findAll().then(sensores => {
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
