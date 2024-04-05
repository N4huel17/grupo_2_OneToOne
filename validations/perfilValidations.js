const { check} = require("express-validator");

module.exports = [
    check("nombre")
        .notEmpty().withMessage('No dejar campos vacios vacios'),
    check("apellido")
        .notEmpty().withMessage("No dejar campos vacios").bail(),
        check("email")
        .notEmpty().withMessage("No dejar campos vacios").bail(),
    
];