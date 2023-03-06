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

const logger = log4js.getLogger();
const appDirectory = process.cwd();

// Express Options
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'))

// System Information Level
const getIP = () => {
  const networkInterfaces = os.networkInterfaces();
  const addresses = [];
  for (const k in networkInterfaces) {
    for (const k2 in networkInterfaces[k]) {
      const address = networkInterfaces[k][k2];
      if (address.family === 'IPv4' && !address.internal) {
        addresses.push(address.address);
      }
    }
  }
  return addresses;
}


const getCPU = () => {
  return new Promise((resolve, reject) => {
    si.cpu((data) => {
      resolve(data);
    })
  })
}

const getDisk = () => {
  return new Promise((resolve, reject) => {
    si.fsSize((data) => {
      resolve(data);
    })
  })
}

const getRAM = () => {
  return new Promise((resolve, reject) => {
    si.mem((data) => {
      resolve(data);
    })
  })
}

const getServerStatus = async () => {
  const cpu = await getCPU();
  const disk = await getDisk();
  const ram = await getRAM();
  const ip = getIP();
  const status = {
    cpu,
    disk,
    ram,
    ip
  }
  return status;
}

// Express Routes
const ApiRoutes = require('./app/routes/routes.js');
app.use('/api', ApiRoutes);

// sendFile will go here
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/status', async (req, res) => {
  const status = await getServerStatus();
  res.json(status);
})

// Server LOGS config
log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'file', filename: 'application.log' }
  },
  categories: {
    default: { appenders: ['out', 'app'], level: 'debug' }
  }
});

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(appDirectory, 'access.log'), { flags: 'a' })
// setup the logger with chalk
app.use(morgan('combined', {
  stream: {
    write: str => {
      logger.info(
        console.log(
          str
        )
      )
    }
  }
}))



// Start server
var port = process.env.PORT || 4000;

app.listen(port, async () => {
  const status = await getServerStatus();
  console.log(`🚀 Server started on port ${port}`);
  console.log(`🖥️  CPU: Model -> ${status.cpu.manufacturer} ${status.cpu.brand} , Cores -> ${status.cpu.cores} , Speed -> ${status.cpu.speed} GHz`);
  console.log(`RAM: ${status.ram.total} GB`);
  console.log(`📀  Disk: Total -> ${status.disk[0].size} GB , Used -> ${status.disk[0].used} GB`);
  console.log(`🌐  IP: ${status.ip}`);
}).on('error', err => {
  console.log(err);
});
