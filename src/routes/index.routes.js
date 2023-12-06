const express = require('express');
const { index, cart, admin } = require('../controllers/indexController');
const router = express.Router();

/* / */
router.get('/', index );
router.get('/carrito',cart )
router.get('/admin',admin )

module.exports = router;


