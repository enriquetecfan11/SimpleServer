const db = require('../models')
const Sensores = db.sensores;
const Medidas = db.medidas;
const Pruebas = db.pruebas;


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



module.exports = {
  postMedidas
}
