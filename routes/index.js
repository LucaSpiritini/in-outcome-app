const express = require('express');
const router = express.Router();
const mainController = require('../controller/indexController');

const guestMiddleware = require('../middlewares/guestMiddleware');

// GET home page
router.get('/', guestMiddleware, mainController.home);

module.exports = router;
