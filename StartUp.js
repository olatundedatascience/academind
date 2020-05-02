const mysql = require("mysql2")

const connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root@2020_olatunde",
    database:"world"
})

//console.log(connection.connect(()=>console.log("er")))

var cd =mysql.connect({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root@2020_olatunde",
    database:"world"
})


const pool = mysql.createPool({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root@2020_olatunde",
    database:"world"
})

const promisify = pool.promise();

var results = promisify.query(`insert into user values(?,?,?,?,?)`, ['0', "23.03", "22.09", "yes", new Date()]);

//promisify.execute("select * from country limit 2").then(er=>console.log(er)).catch(fr=>console.log(fr))
results.then(r =>{
    console.log(r[0])
}).catch(er => console.log(er))

//document.getElementById("id").onchange