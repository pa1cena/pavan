const express=require('express')
const router=express.Router()
const User=require('./userSchema')
router.post('/register',async (req,res)=>{
    const {firstname,lastname,mobile,email,password}=req.body
try{
    if(!firstname || !lastname || !mobile || !email || !password){
        console.log(`enter the complete data`)
        return res.status(422).json({message:'fill the details completely'})
    }
    const userExist=await User.findOne({email:email})
    if(userExist){
        console.log('Already exists')
        return res.status(422).json({message:'user already exists'})
    }
    const user=new User({firstname,lastname,mobile,email,password})
    await user.save()
    return res.status(201).json({'message':'user registered successfully'})
}
catch(error){
    console.log(error.response)
}

})
module.exports=router