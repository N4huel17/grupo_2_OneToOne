const express = require('express');
const { login, register, processLogin, processRegister, logout } = require('../controllers/usersController');
const userRegisterValidator = require('../../validations/user-register-validator');
const userLoginValidator = require('../../validations/user-login-validator');
const router = express.Router();

/* /usuarios */
router.get('/ingreso',login );
router.get('/registro',register );
router.post('/ingreso', userLoginValidator, processLogin);
router.post('/registro',userRegisterValidator, processRegister);
router.get('/salir',logout)
module.exports = router;



