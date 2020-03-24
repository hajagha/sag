const mongoos = require('mongoose')
const uuid = require('uuid')
const userSchema = new mongoos.Schema({
    name : {
        type : String,
        required : true
    },
    user : {
        type : String,
        required : true
    },
    pass : {
        type : String,
        required : true
    },
    email : 
    {
        type : String,
        required : true
    },
    phone_number:
    {
        type : String,
        required : true
    },
    create_date:
    {
        type : Date,
        default : Date.now
    }

})


const User = module.exports =mongoos.model('user' ,userSchema)