const express = require('express');
const { detail, add, edit, remove, create, update, camisas, abrigos, pantalones, accesorios, remeras, } = require('../controllers/productsController');
const upload = require('../middlewares/upload');





const router = express.Router();

/* /productos  */
router.get('/detalle/:id?',detail );
router.get('/agregar',add );
router.get('/editar/:id',edit );
router.post('/crear',upload.fields([{name: "image",},{name: "images",},]),create);
router.delete('/eliminar/:id', remove );
router.put('/actualizar/:id',upload.fields([{name: "image",},{name: "images",},]), update)
router.get('/camisas',camisas);
router.get('/abrigos',abrigos);
router.get('/pantalones',pantalones);
router.get('/accesorios',accesorios);
router.get('/remeras',remeras);








module.exports = router;

