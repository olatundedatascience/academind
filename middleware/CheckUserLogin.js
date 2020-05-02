module.exports = function(req, res, next) {
    //console.log("Checking user authentication.....")
   // console.log(req.cookies.user)
    if(!req.cookies.user) {
        var path = req.path
        //console.log(path)
        const togo = `/login?_next=${path}`
        res.redirect(togo)
    }
   // console.log(req.cookies)
    next()
}