const express = require('express');
const ApiController = require('../controllers/controller.js');
const router = express.Router();

// New POST MEDIDAS
router.post('/medidas', ApiController.postMedidas);

// New POST RAW BODY
router.post('/raw', ApiController.postRawBody);

// New POST DOS MEDIDAS
router.post('/dosmedidas', ApiController.postdosmedidas);

// New POST DOS MEDIDAS SUELO
router.post('/dosmedidassuelo', ApiController.postdosmedidasSuelo);


// GET Status ok
router.get('/status', (req, res) => {
  res.status(200).send('OK');
});

module.exports = router;
