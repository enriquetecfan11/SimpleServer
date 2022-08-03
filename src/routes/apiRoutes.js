const express = require('express');
const ApiController = require('../controllers/apicontroller');
const router = express.Router();

router.get('/', ApiController.apiWorks);
router.post('/sensores', ApiController.postSensores);
router.post('/sensor', ApiController.postSensor);
router.get('/sensores', ApiController.getSensores);

module.exports = router;