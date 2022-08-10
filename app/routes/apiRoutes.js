const express = require('express');
const ApiController = require('../controllers/apicontroller');
const router = express.Router();

router.post('/sensores', ApiController.postSensores);
router.post('/sensor', ApiController.postSensor);
router.get('/sensores', ApiController.getSensores);
router.get('/sensores/:id', ApiController.getSensoresByID);
router.delete('/sensores/:id', ApiController.deleteSensorById);

router.post('/medidas', ApiController.postMedidas);
router.get('/medidas', ApiController.getMedidas);

module.exports = router;