const express = require('express');
const ApiController = require('../controllers/controller.js');
const router = express.Router();

// Todas las medidas
router.post('/medidas', ApiController.postMedidas);

// Estación de temperatura - Todo Endpoint
router.get('/temperatura', ApiController.estacion);

// Temperatura suelo a 2 niveles - Todo Endpoint
router.get('/temperatura1', ApiController.temperaturaSuelo);

// Temperatura y humedad 2 niveles -  Todo Endpoint
router.get('/temperatura2', ApiController.temperaturaHumedad);



// Create this endpoint get /hello
router.get('/hello', (req, res) => {
  res.status(200).json(
    {
      "message": "Hello World"
    }
  )
});


module.exports = router;
