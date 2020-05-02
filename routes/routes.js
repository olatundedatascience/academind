const express = require("express")
const app = express();
const LoginController = require("../controllers/LoginController")
const router = express.Router();
const CheckUser = require("../middleware/CheckUserLogin")
const isAdmin = require("../middleware/isAdmin");



router.get("/", (req, res, next)=>{
    res.render("home")
})

router.get('/product-list', CheckUser, (req, rex, next)=>{
    let products =["one", "two"];
    rex.render("product", {product:products});
})

//router.get("/")

router.get('/product',[CheckUser,isAdmin({firstTimeCheck:true})], (req, rex, next)=>{
    let products =["one", "two"];
    //console.log(req.CurrentUser.id)
    console.log(req.cookies)
    rex.render("products", {product:products});
})


router.get((req, res, next)=>{
    res.render("NotFound")
    
})

router.post("/loginform", LoginController.LoginUser);


router.get("/login", LoginController.Login);

module.exports = router;

