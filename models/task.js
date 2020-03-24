const mongoos = require('mongoose')
const uuid = require('uuid')
const taskSchema = new mongoos.Schema({
    title : {
        type : String,
        required : true
    },
    
    set_time :
    {
        type : String
        
    },
    set_date :
    {
        type : String
    },
    frequency : 
    {
        type : String 
    },
    when_to_remind_date : {
        type : String 
    },
    when_to_remind_time : {
        type : String 
    },
    create_date:
    {
        type : String,
        default : Date.now
    }

})

const Task = module.exports =mongoos.model('task' ,taskSchema)