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
    }).then(sensor => {
        res.status(201).json(sensor);
    }).catch(err => {
        res.sendStatus(500);
    });

    // If dispositivo is equal to other dispositivo, return 409
    Sensores.findOne({
        where: {
            dispositivo: dispositivo
        }
    }).then(sensor => {
        if (sensor) {
            res.sendStatus(409);
        }
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


module.exports = {
    apiWorks,
    postSensores,
    postSensor,
    getSensores,
    getSensoresByID,
    deleteSensorById
}
