const express = require('express')
const router = express.Router()

const bodyparser = require('body-parser')

user = require('../models/user')
task = require('../models/task')

//redirect
router.get('/' , function(req , res)
{
    res.send('<h1>Fuck Off</h1>')
})


//get users all* 
router.get('/api/users' , function(req , res){
    user.find().exec().then((ress) => {
        res.status(200)
        res.send(ress)
    })   
})



//get tasks all*
router.get('/api/tasks' , function(req , res){
    
    task.find().exec().then((ress) => {
            res.status(200)
            res.send(ress)
        })   
})

//post new user
router.post('/api/user' , function(req , res){
    const a = req.body
    var b =  new user({
        name: a.name,
        user: a.user,
        pass: a.pass,
        email: a.email,
        phone_number:a.phone_number
        

     })
     b.save()

     res.status(200)
     res.send('Added to users ...')
})

//post new task 
router.post('/api/task' , function(req , res){
    const a = req.body
    var b =  new task({
        title: a.title,
        set_time: a.set_time,
        set_date: a.set_date,
        frequency : a.frequency,
        when_to_remind_date : a.when_to_remind_date,
        when_to_remind_time: a.when_to_remind_time
     })
     b.save()

     res.status(200)
     res.send('Added to tasks...')
})


//delete task using title
router.delete('/api/task/:title' , async function(req , res){
try {
const d = await task.remove({title : req.params.title})
res.json(d)
}catch(err)
{
    console.log(err)
}
})


    
    






module.exports = router



