const { check } = require('express-validator');

module.exports = [
    check('name')
        .optional()
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('colors')
        .optional()
        .notEmpty().withMessage('Selecciona al menos un color'),
    check('sizes')
        .optional()
        .notEmpty().withMessage('Selecciona al menos un tamaño'),
    check('price')
        .optional()
        .isNumeric().withMessage('El precio debe ser un número válido'),
    check('categoryId')
        .optional()
        .notEmpty().withMessage('La categoría es requerida'),
        body('image')
        .custom((value, {req}) => {
            if(!req.files.image){
                return false
            }
            return true
        }).withMessage('Se require una imagen'),
    check('description')
        .optional()
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({
            min: 2,
            max: 500
        }).withMessage('La descripción debe tener entre 2 y 500 caracteres')
];
