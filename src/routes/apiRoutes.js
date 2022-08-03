const express = require('express');
const ApiController = require('../controllers/apicontroller');
const router = express.Router();

router.get('/', ApiController.apiWorks);
router.post('/sensores', ApiController.postSensores);
router.post('/sensor', ApiController.postSensor);
router.get('/sensores', ApiController.getSensores);
router.get('/sensores/:id', ApiController.getSensoresByID);
router.delete('/sensores/:id', ApiController.deleteSensorById);

module.exports = router;