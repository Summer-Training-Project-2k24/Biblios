var express = require('express');
require('dotenv').config();
const jwt=require('../jwt');
const router=express.Router();
const User= require(  '../models/user');
const {jwtauthmidleware,generatetoken}=require('./../jwt');

router.post('/signup', async(req,res)=>{
try{
const data = req.body;// req.body containes person data
const newPerson =  new User(data);


const response=await newPerson.save();//await the promise
const payload={
    id:response.id,
   
}
const token=generatetoken(payload);
console.log('data saved');
res.status(200).json({token});
}catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error in sign up'});
}

})

router.get('/profile', jwtauthmidleware, async (req, res) => {
    try{
        const userData = req.userpayload;
        const userId = userData.id;
        const user = await User.findById(userId);
        res.status(200).json({user});
        console.log(user);
        console.log("hi im in profie");
    }catch(err){
        console.error(err);

        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.put('/profile/password',jwtauthmidleware, async (req,res)=>{
    try{
        const userData = req.userpayload;
        const userId = userData.id;
        
     const {oldPassword,newPassword}=req.body;
     //find the user by user id
     const user=await User.findById(userId);
    
     //if password doest not match,return error
     if(!(await user.comparePassword(oldPassword))){
        
        return res.status(401).json({error:"current password"});

     }
     user.password=newPassword;
     await user.save();
     console.log("password updated");
     return res.status(200).json({message:" password updated"});

    }
      catch(err){
        console.error(err);
        res.status(404).json({error:"there is some error in password updation"}) ;
    }

})

router.post('/login',async (req,res)=>{
    try{

    
    const {email,password}=req.body;

    const user=await User.findOne({email:email});

    if(!user || !(user.comparePassword(password))){
        res.status(404).json({error:"wrong email or password"});
    }
  
    const payload={
        id:user.id
    }
  
    const token=generatetoken(payload);
    res.status(200).json({token});
    }catch(err){
        console.log(err);
        res.status(405).json({error:"error in login person"});
    }

})

router.get('/profile',jwtauthmidleware,async (req,res)=>{
    try{

        

        const payload= req.userpayload;
        const userid=payload.id;
        const user = await User.findById(userid);
        res.status(200).json(user);

        
    }catch(err){
        console.log(err);
        res.status(506).json({error:"error in getting profile of user"});
    }


    

})


module.exports=router;
