const express = require('express');
const { login, register, processLogin, processRegister, logout } = require('../controllers/usersController');
const userRegisterValidator = require('../../validations/user-register-validator');
const userLoginValidator = require('../../validations/user-login-validator');

const checkUserLogin = require('../middlewares/checkUserLogin');
const checkAuthUser = require('../middlewares/checkAuthUser');

const router = express.Router();




/* /usuarios */
/*router.get('/ingreso',checkAuthUser,login );
router.get('/registro',checkAuthUser,register );¨*/


router.post('/ingreso', userLoginValidator, processLogin);
router.post('/registro',userRegisterValidator, processRegister);
router.get('/salir',logout)
.get('/perfil',checkUserLogin, profile)

module.exports = router;



