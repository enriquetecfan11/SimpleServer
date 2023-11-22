const fs = require('fs');

const handleCommonData = (req, res) => {
  const date = new Date();
  const timeString = date.toLocaleTimeString();
  const {
    dispositivo,
    horaDispositivo: hora,
    wind: windspeed,
    dirWind: winddirection,
    luxes,
    wifirrsi,
    rain,
    temperatura,
    humedadAire: humedad,
    temp1: temperatura1,
    hum1: humedad1,
    altura,
    presion,
  } = req.body;

  const discretizeWind = (direction) => {
    const directions = {
      0: "N",
      1: "NE",
      2: "E",
      3: "SE",
      4: "S",
      5: "SW",
      6: "W",
      7: "NW",
    };
    const sector = Math.floor(((direction % 360) / 45));
    return directions[sector];
  };

  // console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
  // console.log("Received time: " + timeString + "\n");
  // console.log("Device: " + dispositivo + "\n");
  // console.log("Temperature: " + temperatura + "\n");
  // console.log("Device send time -> " + hora + "\n");
  // console.log("Humidity: " + humedad + "\n");
  // console.log("Rain: " + rain + "\n");¨
  // console.log("Windspeed: " + windspeed + "\n");
  // console.log("Winddirection: " + winddirection + "\n");
  // console.log("Real Win Direction: " + discretizeWind(winddirection) + "\n");

  res.status(201).json({
    status: "OK",
    data: req.body,
  });
};

const postMedidas = (req, res) => {
  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
  console.log(`Received time: ${new Date().toLocaleTimeString()}`);
  handleCommonData(req, res);

  // Get data from handelCommonData and save it to a file called data.json
  const date = new Date();
  const timeString = date.toLocaleTimeString();
  const {
    dispositivo,
    temperatura,
    humedad,
  } = req.body;

  let data = {
    dispositivo,
    temperatura,
    humedad,
    timeString,
  };

  console.log(data)

  console.log("Device: " + data.dispositivo + "\n");
  console.log("Temperature: " + data.temperatura + "\n");
  console.log("Humidity: " + data.humedad + "\n");
  console.log("Time: " + data.timeString + "\n");
  fs.readFile('data.json', 'utf8', (err, fileData) => {
    if (err) throw err;
  
    let dataArray;
    if (fileData) {
      dataArray = JSON.parse(fileData); // convert file data to JSON array
    } else {
      dataArray = []; // initialize as empty array if file is empty
    }
  
    let lastId = dataArray.length > 0 ? dataArray[dataArray.length - 1].id : 0; // get last ID or 0 if array is empty
    data.id = lastId + 1; // increment ID
  
    dataArray.push(data); // add new data to array
  
    fs.writeFile('data.json', JSON.stringify(dataArray), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  });

  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
};

const postRawBody = (req, res) => {

  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
  console.log("Raw data: " + "\n");
  console.log(req.body);
  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");


  res.status(201).json({
    status: "OK",
    data: req.body,
  });

};

// Only temperatura, humedad, temperatura1, humedad1
const postdosmedidas = (req, res) => {
  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
  console.log(`Received time: ${new Date().toLocaleTimeString()}`);
  Object.entries(req.body).forEach(([key, value]) => {
    // Si solo tiene datos de temperatura, humedad, temperatura1, humedad1 se muestra
    if (key == "temperatura" || key == "humedad" || key == "temperatura1" || key == "humedad1") {
      console.log(key + " -> " + value);
    }
  });
  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");

  res.status(201).json({
    status: "OK",
    data: req.body,
  });
}

// Only temperatura, humedad, temperaturaSuelo, temperaturaSubsuelo
const postdosmedidasSuelo = (req, res) => {
  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
  console.log(`Received time: ${new Date().toLocaleTimeString()}`);
  Object.entries(req.body).forEach(([key, value]) => {
    // Si solo tiene datos de temperatura, humedad, temperaturaSuelo, temperaturaSubsuelo se muestra
    if (key == "temperatura" || key == "humedad" || key == "temperaturaSuelo" || key == "temperaturaSubsuelo") {
      console.log(key + " -> " + value);
    }
  });
  console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");

  res.status(201).json({
    status: "OK",
    data: req.body,
  });
}




module.exports = {
  postMedidas,
  postdosmedidas,
  postRawBody,
  postdosmedidasSuelo
};
