const express = require('express');
const ApiController = require('../controllers/controller.js');
const router = express.Router();

// Todas las medidas
router.post('/medidas', ApiController.postMedidas);

// Solo la estacion de temperatura
router.post('/estacion', ApiController.postEstacion);

// Dos sondas de suelo + temperatura y humedad ambiente
router.post('/temperaturaSuelo', ApiController.postTemperaturaSuelo);

// Dos sondas de temperatura y humedad ambiente
router.post('/temperaturaDos', ApiController.postTemperaturaDos);



module.exports = router;
