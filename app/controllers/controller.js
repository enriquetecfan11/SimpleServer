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

  var data = JSON.stringify(req.body);

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

  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
  console.log("Received time: " + date.toLocaleTimeString() + "\n");
  console.log("Device: " + device + "\n");
  console.log("Device send time -> " + hora + "\n");
  console.log("Temperature: " + temp + "\n");
  console.log("Humidity: " + humidity + "\n");
  console.log("Rain: " + rain + "\n");
  console.log("Windspeed: " + windspeed + "\n");
  console.log("Winddirection: " + winddirection + "\n");
  console.log("Real Win Direction: " + discretizeWind(winddirection) + "\n");
  console.log("Luxes: " + luxes + "\n");
  console.log("Wifi RSSI: " + wifirrsi + "\n");
  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-" + "\n");


  res.status(200).json(req.body); // Only for local debug
}



module.exports = {
  postMedidas
}
