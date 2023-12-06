const express = require('express');
const { index, cart } = require('../controllers/indexController');
const router = express.Router();

/* / */
router.get('/', index );
router.get('/carrito',cart )

module.exports = router;


