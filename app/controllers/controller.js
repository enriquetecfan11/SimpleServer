const db = require('../models')
const Sensores = db.sensores;
const Medidas = db.medidas;
const Pruebas = db.pruebas;


const postSensores = (req, res) => {
    var date = new Date();
    var timeString = date.toLocaleTimeString();
    var dispositivo = req.body.device;
    var wifiRssi = req.body.wifiRssi;
    var data = req.body.data;
    var rssi = req.body.rssi;
    var snr = req.body.snr;
    var packetSize = req.body.packetSize;
    var temperatura = data.replace(/{/g, "").replace(/}/g, "").replace(/:/g, ",").split(",")[1];
    var humedad = data.replace(/{/g, "").replace(/}/g, "").replace(/:/g, ",").split(",")[3];
    var windSpeed = data.replace(/{/g, "").replace(/}/g, "").replace(/:/g, ",").split(",")[5];

    const medidas_prueba = {
        dispositivo: dispositivo,
        wifiRssi: wifiRssi,
        data: data,
        temperatura: temperatura,
        humedad: humedad,
        windspeed: windSpeed,
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

const getSensor = (req, res) => {
    Sensores.findAll().then(sensores => {
        res.status(200).json(sensores);
    }).catch(err => {
        res.sendStatus(500);
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

    // Pass req.body to JSON
    var data = JSON.stringify(req.body);

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
        res.sendStatus(500).json(err);
    });


    console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
     console.log("Received time: " + date.toLocaleTimeString() + "\n")
    console.log("Raw Request ->  ", data + "\n");
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
    postSensores,
    postSensor,
    getSensores,
    getSensoresByID,
    deleteSensorById,
    postMedidas,
    getMedidas,
    getSensor
}
