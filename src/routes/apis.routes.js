const express = require('express');
const { getAllPorducts, getOneProducts } = require('../controllers/productsController/apis/productsApiController');
const { getAllUsers, getOneUsers } = require('../controllers/productsController/apis/usersApi');
const router = express.Router();

/* /apis */
router.get('/products', getAllPorducts);
router.get('/products/:id', getOneProducts);
router.get('/users',getAllUsers );
router.get('/users/:id',getOneUsers );



module.exports = router;


