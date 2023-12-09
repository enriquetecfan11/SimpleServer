const express = require('express');
const ApiController = require('../controllers/controller.js');
const router = express.Router();
const fs = require('fs').promises;


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

router.get('/medidas', (req, res) => {
  // Check if data.json exists and is ready to read
  fs.access('data.json', fs.F_OK)
    .then(() => {
      // If it exists, read it
      fs.readFile('data.json')
        .then((data) => {
          // Parse the data to JSON
          const dataJson = JSON.parse(data);
          // Send the data as response
          res.status(200).json(dataJson);
        })
        .catch((err) => {
          // If there was an error reading the file, send the error as response
          res.status(500).json(err);
        });
    })
    .catch(() => {
      // If it doesn't exist, send a 404 error
      res.status(404).json({
        status: 404,
        message: 'data.json not found',
      });
    });
});

module.exports = router;
