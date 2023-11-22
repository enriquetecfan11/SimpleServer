const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const os = require('os');
const si = require('systeminformation');
const fs = require('fs');
const log4js = require('log4js');
const bodyParser = require('body-parser');

require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'))
app.use(cors());

// System Information Level
const getIP = () => Object.values(os.networkInterfaces())
  .flatMap(iface => iface.filter(address => !address.internal && address.family === 'IPv4'))
  .map(address => address.address);
const getCPU = () => si.cpu();
const getDisk = () => si.fsSize();
const getRAM = () => si.mem();
const getServerStatus = async () => {
  const [cpu, disk, ram, ip] = await Promise.all([getCPU(), getDisk(), getRAM(), getIP()]);
  return { cpu, disk, ram, ip };
};

// Express Routes
app.use('/api', require('./app/routes/routes.js'));

// Hello from the api
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Api status
app.get('/status', async (req, res) => {
  const status = await getServerStatus();
  res.json(status);
});


// setup the logger with chalk
// app.use(morgan('combined', {
//   stream: {
//     write: str => {
//       console.log(logger.info(str));
//     }
//   }
// }));

// Start server
const port = process.env.PORT || 8000;

app.listen(port, async () => {
  const status = await getServerStatus();
  const date = new Date();
  const hour = new Intl.DateTimeFormat('es', { hour: 'numeric', hour12: false }).format(date);
  const minute = new Intl.DateTimeFormat('es', { minute: 'numeric' }).format(date);
  const second = new Intl.DateTimeFormat('es', { second: 'numeric' }).format(date);

  console.log(`🚀 Server started on port ${port}`);
  console.log(`🖥️  CPU: Model -> ${status.cpu.manufacturer} ${status.cpu.brand} , Cores -> ${status.cpu.cores} , Speed -> ${status.cpu.speed} GHz`);
  console.log(`💻  RAM: ${status.ram.total} GB`);
  console.log(`📀  Disk: Total -> ${status.disk[0].size} GB , Used -> ${status.disk[0].used} GB`);
  console.log(`🌐  IP: ${status.ip}`);
  console.log(`🕒  Time: ${hour}:${minute}:${second}`);
}).on('error', console.error);
