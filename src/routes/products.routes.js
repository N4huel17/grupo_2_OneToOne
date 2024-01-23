const express = require('express');
const { detail, add, edit, remove, create, update, camisas, abrigos, pantalones, accesorios, remeras, } = require('../controllers/productsController');
const upload = require('../middlewares/upload');


const router = express.Router();

/* /productos  */
router.get('/detalle/:id?',detail );
router.get('/agregar',add );
router.get('/editar/:id?',edit );
router.post('/crear',upload.single('mainImage'),create)
router.delete('/eliminar/:id', remove )

module.exports = router;

