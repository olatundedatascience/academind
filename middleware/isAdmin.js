module.exports = function(opts) {
   // console.log(opts)

    let firstTime = opts.firstTimeCheck

    return function(req, res, next) {
        console.log(firstTime)
        console.log(req.cookies)
        next()
    }

   
    
}