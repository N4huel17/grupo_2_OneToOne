const {check, body }=require("express-validator");
const {compareSync} = require('bcryptjs')

const db= require('../src/database/models')
module.exports = [
   check("email")
       .notEmpty().withMessage('El email es obligatorio'),
   body("password")
       .notEmpty().withMessage("La contraseña es obligatoria").bail()
       .custom((value, {req}) => {
           return db.users.findOne({
               where : {
                   email : req.body.email
               }
           }).then(users => {
               if(!users || !compareSync(value, users.password)) {
                   return Promise.reject()
               }
           }).catch(error => {
               console.log(error)
               return Promise.reject('Credenciales inválidas')
           })          
          
       })

]
