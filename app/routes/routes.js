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

// Estacion "Temperatura 2" -> Temperatura, Altura, Presion y Luxes
router.post('/miniestaacion', ApiController.postestacionTemperturaDos);

// GET Status ok
router.get('/status', (req, res) => {
  res.status(200).send('OK');
});

module.exports = router;
