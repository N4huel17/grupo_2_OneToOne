const {check} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('colors')
        .notEmpty().withMessage('poné color '),
    check('sizes')
        .isURL().withMessage('Debe ser un talle'),
        check('price')
        .isURL().withMessage('debes poner precio'),
    check('categoryId')
        .notEmpty().withMessage('La categoría es requerida'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({
            min: 2,
            max: 500
        }).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
]