const {check, body }=require("express-validator");
const { leerJSON } = require("../src/data");

module.exports =[
    check("name")
         .notEmpty().withMessage('Campo Obligatorio').bail()
         .isLength({
            min: 2
         }).withMessage('Minimo dos caracteres ').bail()
         .isAlpha('es-ES', {ignore: ' ' }).withMessage('Solo caracteres Alfabeticos'),
        //------------------------------------------------------------------------------------//
         check("surname")
         .notEmpty().withMessage('Campo Obligatorio').bail()
         .isLength({
            min: 2
         }).withMessage('Minimo dos caracteres en este campo').bail()
         .isAlpha('es-ES', {ignore: ' ' }).withMessage('Solo caracteres Alfabeticos'),
         //-------------------------------------------------------------------------------------//
         check('email')
         .notEmpty().withMessage('Campo Obligatorio').bail()
         .isEmail().withMessage('El email tiene un formato invalido').bail()
         .custom((value, {req})=>{
      const users= leerJSON('users');
      const user= users.find(user => user.email===value.trim())
      if(user){
        return false
      }
      return true
         } ).withMessage('El email ya se encuentra registrado'),
         //--------------------------------------------------------------------------------------//
         check("password")
         .notEmpty().withMessage('Campo Obligatorio')
         .isLength({
            min: 6
         }).withMessage('Minimo 6 y 10 caracteres'),
         body("password2")
         .notEmpty().withMessage("verifica la contraseña")
         .custom((value, {req}) => {
            if(value != req.body.password){
                return false
            }
            return true
         }).withMessage('Las contraseñas no coinciden'),
         //---------------------------------------------------------//
         check("remember")
            .notEmpty().withMessage('Debes aceptar terminos y condiciones')
] 

