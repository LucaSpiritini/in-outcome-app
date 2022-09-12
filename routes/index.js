const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');

const guestMiddleware = require('../middlewares/guestMiddleware');

// GET home page
router.get('/', guestMiddleware, indexController.index);

module.exports = router;
