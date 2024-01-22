const express = require('express');
const { detail, add, edit, remove, create, update, view } = require('../controllers/productsController');
const upload = require('../middlewares/upload');





const router = express.Router();

/* /productos  */
router.get('/detalle/:id?',detail );
router.get('/agregar',add );
router.get('/editar/:id',edit );
router.post('/crear',upload.fields([{name: "mainImage",},{name: "images",},]),create);
router.delete('/eliminar/:id', remove );
router.put('/actualizar/:id',upload.fields([{name: "mainImage",},{name: "images",},]), update)
router.get('/listado',view);








module.exports = router;

