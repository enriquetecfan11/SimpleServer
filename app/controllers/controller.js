const fs = require('fs').promises;

async function saveMeasurement(data) {
  try {
    let fileData = await fs.readFile('data.json', 'utf8');
    let dataArray = fileData ? JSON.parse(fileData) : [];
    let lastId = dataArray.length > 0 ? dataArray[dataArray.length - 1].id : 0;
    data.id = lastId + 1;
    dataArray.push(data);
    await fs.writeFile('data.json', JSON.stringify(dataArray));
    return data;
  } catch (err) {
    throw new Error('Error processing file: ' + err.message);
  }
}


const postMedidas = async (req, res) => {
  try {
    const receivedTime = new Date().toLocaleTimeString();
    const { dispositivo, temperatura, altura, presion, luxes, wifiRsii, hora } = req.body;
    const deviceTime = new Date(hora * 1000);
    const data = { dispositivo, temperatura, altura, presion, luxes, wifiRsii, receivedTime, deviceTime };

    console.table({
      "Received Time": receivedTime,
      "Device Time": data.deviceTime,
      "Device": dispositivo,
      "Temperature": temperatura,
      "Height": altura,
      "Pressure": presion,
      "Light": luxes,
      "Wifi": wifiRsii
    });

    const savedData = await saveMeasurement(data);
    res.status(201).json({ status: "OK", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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
  postRawBody,
  postdosmedidas,
  postdosmedidasSuelo
};
