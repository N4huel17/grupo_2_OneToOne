const express = require('express');
const { login, register, processLogin, processRegister } = require('../controllers/usersController');
const userRegisterValidator = require('../../validations/user-register-validator');
const router = express.Router();

/* /usuarios */
router.get('/ingreso',login );
router.get('/registro',register );
router.post('/ingreso', processLogin);
router.post('/registro',userRegisterValidator, processRegister);

module.exports = router;



