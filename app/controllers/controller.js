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
  var timeString = date.toLocaleTimeString();

  var device = req.body.dispositivo;
  var hora = req.body.hora;
  var temp = req.body.temperatura;
  var humidity = req.body.humedadAire;
  var rain = req.body.rain;
  var windspeed = req.body.wind;
  var winddirection = req.body.dirWind;
  var luxes = req.body.luxes;
  var wifirrsi = req.body.wifirrsi;

  // Pass req.body to JSON
  var data = JSON.stringify(req.body);

  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
  console.log("Received time: " + date.toLocaleTimeString() + "\n")
  console.log("Raw Request ->  ", data + "\n");
  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-" + "\n");


  res.status(200).json(req.body); // Only for local debug


  const discretizeWind = winddirection => {
    if (winddirection >= 337.5 && winddirection < 22.5) return "N"
    if (winddirection >= 22.5 && winddirection < 67.5) return "NE"
    if (winddirection >= 67.5 && winddirection < 112.5) return "E"
    if (winddirection >= 112.5 && winddirection < 157.5) return "SE"
    if (winddirection >= 157.5 && winddirection < 202.5) return "S"
    if (winddirection >= 202.5 && winddirection < 247.5) return "SW"
    if (winddirection >= 247.5 && winddirection < 292.5) return "W"
    if (winddirection >= 292.5 && winddirection < 337.5) return "NW"
  }

  // console.log("Device: " + device + "\n");
  // console.log("Device send time -> " + hora + "\n");
  // console.log("Temperature: " + temp + "\n");
  // console.log("Humidity: " + humidity + "\n");
  // console.log("Rain: " + rain + "\n");
  // console.log("Windspeed: " + windspeed + "\n");
  // console.log("Winddirection: " + winddirection + "\n");
  //console.log("Real Win Direction: " + discretizeWind(winddirection) + "\n");
  // console.log("Luxes: " + luxes + "\n");
  // console.log("Wifi RSSI: " + wifirrsi + "\n");
  // console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-" + "\n");



  // Data to be saved in the database

  // const medidas_prueba = {
  //     dispositivo: device,
  //     hora: timeString,
  //     temperatura: temp,
  //     humedadAire: humidity,
  //     rain: rain,
  //     wind: windspeed,
  //     dirWind: winddirection,
  //     luxes: luxes,
  //     wifiRssi: wifirrsi,
  //     }

  // Save Medidas in the database
  // Medidas.create(medidas_prueba)
  //     .then(data => {
  //         res.status(200).json(data);
  //     }
  //     ).catch(err => {
  //         res.status(500).send({
  //             message: err.message || "Some error occurred while creating the Medidas."
  //         });
  //     });
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
