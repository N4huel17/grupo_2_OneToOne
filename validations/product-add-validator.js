const {check,body} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('address')
        .notEmpty().withMessage('La dirección es requerida'),
    check('url_map')
        .isURL().withMessage('Debe ser un URL válida'),
    check('category')
        .notEmpty().withMessage('La categoría es requerida'),
    body('image')
        .custom((value, {req}) => {
            if(!req.files.image){
                return false
            }
            return true
        }).withMessage('Se require una imagen'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({
            min: 20,
            max: 500
        }).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
]