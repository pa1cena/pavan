const mongoose=require('mongoose')
const express=require('express')
const dotenv=require('dotenv')
const app=express()
const auth=require('./auth')
dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE
const PORT=process.env.PORT
app.use(express.json())
app.use(require('./auth'))
mongoose.connect(DB).then(()=>{
    console.log(`connection is successful`)
}).catch((err)=>
{
    console.log(`no connection`)
})
app.get('/',(req,res)=>
{
    res.send(`this is home`)
    console.log(`home`)
})
app.get('/login',(req,res)=>
{
    res.send(`this is about`)
    console.log(`about`)
})
app.listen(PORT,()=>{
    console.log(`server is listening on port number ${PORT}`)
})
