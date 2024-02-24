const { leerJSON } = require("../data")
const db = require('../database/models')
const products = require("../database/models/products")

module.exports ={
    index: (req,res)=> {
        
        db.products.findAll()
        .then(products => {
            return res.render('index', {
                products
            })
        })
        .catch(error => console.log(error))
    },
    cart: (req,res)=> {
        db.products.findAll()
        .then(products => {
            return res.render('productCart', {
                products
            })
        })
        .catch(error => console.log(error))
        
    },
    admin: (req,res)=> {
        db.products.findAll()
        .then(products => {
            return res.render('dashboard',{
                products
            } )
        })
        .catch(error => console.log(error))
        

       
    },
    
    
}