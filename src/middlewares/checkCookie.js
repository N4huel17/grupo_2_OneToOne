module.exports = (req,res,next) => {
    if(req.cookies.On3ToOn301_user){
        req.session.userLogin = req.cookies.On3ToOn301_user
    }

    next()
}