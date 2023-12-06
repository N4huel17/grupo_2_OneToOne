const express = require('express');
const { detail } = require('../controllers/productsController');
const router = express.Router();

/* /productos  */
router.get('/detalle',detail );

module.exports = router;

