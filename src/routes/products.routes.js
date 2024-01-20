const express = require('express');
const { detail, add, edit, remove, create } = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const productView = require('../controllers/productsController/productView');




const router = express.Router();

/* /productos  */
router.get('/detalle/:id?',detail );
router.get('/agregar',add );
router.get('/editar/:id?',edit );
router.get('/listado', productView )
router.post('/crear',upload.single('mainImage'),create)
router.delete('/eliminar/:id', remove )

module.exports = router;

