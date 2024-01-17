//este es para ver si el usuario esta registrado de forma local
module.exports =(req,res,next) => {
if (req.session.userLogin) {
    res.locals.userLogin = req.session.userLogin
}
next()
}