const express = require('express');
const ApiController = require('../controllers/controller.js');
const router = express.Router();


router.post('/sensores', ApiController.postSensores);
router.get('/sensores', ApiController.getSensores);
router.get('/sensores/:id', ApiController.getSensoresByID);
router.delete('/sensores/:id', ApiController.deleteSensorById);

router.post('/sensor', ApiController.postSensor);
router.get('/sensor', ApiController.getSensor);


router.post('/medidas', ApiController.postMedidas);
router.get('/medidas', ApiController.getMedidas);

module.exports = router;
