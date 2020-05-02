const path = require("path");
const express = require("express")
const app = express();
const cookie = require("cookie-parser")
const body = require("body-parser")

const public_dir = path.join(__dirname, "public");
const views_dir = path.join(__dirname, "views");
const router = require("./routes/routes");
const hbs = require("express-handlebars")
const csrf = require("csurf")
const session = require("express-session")
app.set(express.static(public_dir))

/*
app.engine("hbs", hbs({
    extname:"hbs"
}));
*/

app.use(body());
app.use(cookie())
app.use(router);




app.set('view engine', 'ejs');
app.set('views', views_dir);



/*
app.use(session({
    resave:false, name:"node_js_app_session",
    saveUninitialized:false,
    secret:"olatunde"
}))
*/
//app.use(csrf)




//app.get("", )




app.listen(3400, ()=>console.log("listening on 3400"))