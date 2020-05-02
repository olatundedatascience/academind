const mg = require("mongodb")
const mongoClient = mg.MongoClient


var result = mongoClient.connect("mongodb://localhost:27017/pins", {
    useUnifiedTopology:true
}).then(er=>{
    //er.db("pins").
    const db = er.db()

    const pins = db.collection("pin").insertOne()
    console.log("connected")
})
.catch(error=>console.log("error connecting "))

