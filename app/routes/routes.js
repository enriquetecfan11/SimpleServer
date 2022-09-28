const express = require('express');
const ApiController = require('../controllers/controller.js');
const router = express.Router();

router.post('/medidas', ApiController.postMedidas);

module.exports = router;
