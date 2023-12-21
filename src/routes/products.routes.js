const express = require('express');
const { detail, add, edit, remove } = require('../controllers/productsController');

const router = express.Router();

/* /productos  */
router.get('/detalle/:id?',detail );
router.get('/agregar',add );
router.get('/editar/',edit );
router.delete('/eliminar/:id', remove )

module.exports = router;

