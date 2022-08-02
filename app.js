var morgan = require('morgan');
var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
}
);

app.get('/', function (req, res) {
    res.send('API Works');
});


app.post('/sensores', function (req, res) {
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
});


app.post('/sensor', function (req, res) {
    console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
    console.log("Recieved a post request");
    console.log("Raw Request ->  ", req.body);        // your JSON
    console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-" + "\n");
});


app.listen(port, () => {
    console.log('🚀 Server is running on port: ' + port);
});
