const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000 
const cors = require('cors')
const Router = require('./routes/api')
const Task = require('./models/task')
const User = require('./models/user')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(Router)


mongoose.connect('mongodb://localhost/todoist' , { useNewUrlParser: true } ,function(err){
  if(err)
  {
      console.log(err)
  }
})




try
{
app.listen(PORT)
}catch(err)
{
  console.log(err)
}
console.log(`Server is running on port: ${PORT} ...`)
