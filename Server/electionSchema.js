const mongoose=require('mongoose')
const electionSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
const Candidate=mongoose.model('USER',electionSchema)
module.exports=Candidate