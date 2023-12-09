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
  fs.access('data.json', fs.F_OK)
    .then(() => {
      fs.readFile('data.json')
        .then((data) => {
          const dataJson = JSON.parse(data);
          res.status(200).json(dataJson);
          console.log("data.json found");
          console.log(dataJson);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    })
    .catch(() => {
      res.status(404).json({
        status: 404,
        message: 'data.json not found',
      });
      console.log('data.json not found');
    });
});

module.exports = router;
