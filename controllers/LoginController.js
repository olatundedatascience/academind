var crypt = require("crypto")
class LoginController {

    static Login(req, res, next) {
       // console.log(req.CurrentUser)
      // var sessionToken = req
      // console.log(sessionToken)
    //  console.log(req.query)
        let ct = Object.keys(req.query);

       
            res.render("logins", {url:req.query._next})
        
    
        next()
    }

    static LoginUser(req, res, next) {
        const username = req.body.username
        const password = req.body.username

        //console.log(req.body.togo)
        let dir = ""+req.body.togo

        
        const userDetails =  {
            id:username,
            pwd:password
        }

        if(username == "olatunde") {
            userDetails["isAdmin"] = true
        }

       // var result = crypt.createHash("sha256").update(JSON.stringify(userDetails)).digest("base64");
        
        //console.log(result)
        res.cookie("user", JSON.stringify(userDetails), {
            maxAge:86400,
            httpOnly:true,
            expires:new Date().setDate(10)
        });

        res.CurrentUser = userDetails;
        //var cookie = 

        var params = !dir ? dir : "/login";

        //if(!req.query)

    //console.log(params)
//        console.log(req)
      //  console.log(req.CurrentUser)
       // res.redirect(params)

       if(dir != null || dir != "" || dir.length > 1 ) {
           res.redirect(dir)
       }
       else {
           res.redirect("logins")
       }
    }
}

module.exports = LoginController