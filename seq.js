var seq = require("sequelize")
var url = require("url")
const op = seq.Op

var connection = new seq("world", "root", "root@2020_olatunde",{
    host:"localhost",
    dialect:"mysql"
})

const Model = connection.Model

//url.parse()
connection.authenticate()
.then(v=>console.log("connected"))
.catch(v=>console.log("failed to connect"))

//class withdraw extends Model{}

const withdraw= connection.define('withdraw', {
    id:{
        type:seq.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    amount :{
        type:seq.DOUBLE,
        validate :{
            min:1.0
        }
    }
   
})


class history extends seq.Model{}

history.init({
    id:{
        type:seq.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userid:{
        type:seq.BIGINT,
        allowNull:false
    }

},{
    timestamps:false,
    tableName:"histories_table",
    sequelize:connection
})

class withHistory extends seq.Model{}

withHistory.init({
    id:{
        type:seq.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    withid:{
        type:seq.INTEGER,
        references:{
            key:"id",
            model:withdraw,
            deferrable:seq.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    datePosted:{
        type:seq.DATE
    }
},{
    tableName:"WithdrawHistory",
    sequelize:connection
})

class owner extends seq.Model{}
class projects extends seq.Model{}

owner.init({
    id:{
        type:seq.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:seq.STRING(50)
    }
},{
    sequelize:connection
})

projects.init({
    id:{
        type:seq.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    projectName:{
        type:seq.STRING(120)
    }
},{
    sequelize:connection
})

owner.belongsTo(projects)
projects.hasOne(owner, {
    foreignKey:"project_owner_id"
})
// lets do raw query on sequelize

//seq.QueryInterface.
connection.query("select * from country where Code=:code",{
    replacements:{code:"NGA"}, types:seq.QueryTypes.SELECT
})
.then(pr =>console.log(pr)).catch(er=>console.log(er))
connection.sync()

//seq.BelongsToMany()