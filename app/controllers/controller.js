// Todas las medidas
const postMedidas = (req, res) => {
  var date = new Date();
  var timeString = date.toLocaleTimeString();

  var device = req.body.dispositivo;
  var hora = req.body.hora;
  var windspeed = req.body.wind;
  var winddirection = req.body.dirWind;
  var luxes = req.body.luxes;
  var wifirrsi = req.body.wifirrsi;
  var rain = req.body.rain;

  var temperatura = req.body.temperatura; // para la temp 1
  var humedad = req.body.humedadAire;

  var temperatura1 = req.body.temp1 // para la temp 2
  var humedad1 = req.body.hum1 // para la humedad 2

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

  res.status(201).json(
    {
      "status": "OK",
      "data": req.body
    }
  ); // Only for local debug
}

// Solo la estacion de temperatura
const postEstacion = (req, res) => {
  var date = new Date();
  var timeString = date.toLocaleTimeString();
  var device = req.body.dispositivo;
  var hora = req.body.hora;
  var windspeed = req.body.wind;
  var winddirection = req.body.dirWind;
  var luxes = req.body.luxes;
  var wifirrsi = req.body.wifirrsi;
  var rain = req.body.rain;
  var temperatura = req.body.temperatura; // para la temp 1
  var humedad = req.body.humedadAire;

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

  res.status(201).json(
    {
      "status": "OK",
      "data": req.body
    }
  ); // Only for local debug
}


// Dos sondas de suelo + temperatura y humedad ambiente
const postTemperaturaSuelo = (req, res) => {
  var date = new Date();
  var timeString = date.toLocaleTimeString();
  var device = req.body.dispositivo;
  var hora = req.body.hora;
  var temperatura = req.body.temperatura;
  var humedad = req.body.humedad;
  var temperaturaSuelo = req.body.Tempground;
  var temperaturaSubsuelo = req.body.Tempburied;

  var data = JSON.stringify(req.body);

  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
  console.log("Received time: " + date.toLocaleTimeString() + "\n");
  console.log("Device: " + device + "\n");
  console.log("Device send time -> " + hora + "\n");
  console.log("Temperatura: " + temperatura + "\n");
  console.log("Humedad: " + humedad + "\n");
  console.log("Temperatura Suelo: " + temperaturaSuelo + "\n");
  console.log("Temperatura Subsuelo: " + temperaturaSubsuelo + "\n");
  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-" + "\n");

  res.status(201).json(
    {
      "status": "OK",
      "data": req.body
    }
  ); // Only for local debug
}

// Dos sondas de temperatura y humedad ambiente
const postTemperaturaDos = (req, res) => {
  var date = new Date();
  var timeString = date.toLocaleTimeString();
  var device = req.body.dispositivo;
  var hora = req.body.hora;
  var temperatura = req.body.temperatura;
  var humedad = req.body.humedadAire;
  var temperatura1 = req.body.temp1;
  var humedad1 = req.body.hum1;
  var temperatura2 = req.body.temp2;
  var humedad3 = req.body.hum2;
  var data = JSON.stringify(req.body);

  // {"dispositivo":"ESP32-1","hora":"2020-05-05T18:00:00","temperatura":25.5,"humedadAire":50.5,"temp1":30.1,"hum1":60}
  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-");
  console.log("Received time: " + date.toLocaleTimeString());
  console.log("Device: " + device);
  console.log("Device send time -> " + hora);
  console.log("Temperatura: " + temperatura);
  console.log("Humedad: " + humedad);
  console.log("Temperatura 1: " + temperatura1);
  console.log("Humedad 1: " + humedad1);
  console.log("Temperatura 2: " + temperatura2);
  console.log("Humedad 2: " + humedad3);
  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-");

  res.status(201).json(
    {
      "status": "OK",
      "data": req.body
    }
  ); // Only for local debug
}

module.exports = {
  postMedidas,
  postEstacion,
  postTemperaturaSuelo,
  postTemperaturaDos
}
