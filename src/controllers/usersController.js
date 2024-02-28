const { validationResult } = require("express-validator")
const User = require("../data/user");
const {hashSync} = require('bcryptjs')
const db= require('../database/models')
module.exports={
    
    register: (req,res)=> {
        return res.render('users/register')
    },
    processRegister: (req,res)=>{
     const errors =  validationResult(req)
     const {name, surname,email,password,roleId}=req.body
     
     
     
     if(errors.isEmpty()){
        db.users.create({
            name,
            surname,
            email,
            password:hashSync(password.trim(),5),
            roleId:2,

        })
        .then(user => {
            console.log(user);
            return res.redirect('ingreso')
        })
        .catch(error => console.log(error))

    }else{
        return res.render('users/register',{
            old : req.body,
            errors: errors.mapped()
        })
     }},

    login: (req,res)=> {
        return res.render('users/login')
    },
    processLogin : (req, res) => {
        const errors = validationResult(req);
        const { email, remember, } = req.body;
    
        if (errors.isEmpty()) {
            db.users.findOne({
                where: { email }
            })
                .then(({ id, name, roleId }) => {
                    req.session.userLogin = {
                        id,
                        name,
                        role : +roleId
                    };
                    remember && res.cookie('kitchening4EV3R_user', req.session.userLogin, {
                        maxAge: 1000 * 60 * 2
                    });
            
                    return roleId == 1 ? res.redirect('/admin') : res.redirect('/');
                })
                .catch(error => {
                    console.error(error);
                    res.render('users/login', {
                        errors: { database: 'Error accessing database' }
                    });
                });
        } else {
            res.render('users/login', {
                errors: errors.mapped()
            });
        }
    },

    logout : (req,res)=>{
        req.session.destroy();
        return res.redirect('/usuarios/ingreso');
    },
    perfil: (req,res)=>{
        return res.render('users/perfil')
    }
}