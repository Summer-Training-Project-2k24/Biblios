var express = require('express');
require('dotenv').config();
const jwt=require('../jwt');
const router=express.Router();
const Candidate= require(  '../models/candidates');
const User= require(  '../models/user');
const {jwtauthmidleware,generatetoken}=require('../jwt');

const CheckAdminRole=async(userId)=>{
try{
    const user= await User.findById(userId);
    if( user.role === 'admin'){
        return true;
    }
}catch(err){
    console.log("in catch");
    return false;
}
}


router.get('/', async (req, res) => {
    try {
        // Find all candidates and select only the name and party fields, excluding _id
        const candidates = await Candidate.find({}, 'name party -_id');

        // Return the list of candidates
        res.status(200).json(candidates);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.post('/addcandidate', jwtauthmidleware,async(req,res)=>{
try{

    if(!CheckAdminRole(req.userpayload.id)){
       
    return res.status(404).json({message:"user has not admin role"});
    }

const data = req.body;// req.body containes candidate data
    
const newCandidate =  new Candidate(data);


const response=await newCandidate.save();//await the promise

console.log('data saved');
res.status(200).json({"respose":response});

}catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error in candidate sign up'});
}

})




router.put('/update/:candidateId', jwtauthmidleware,async (req,res)=>{
    try{

        if((await !CheckAdminRole(req.userpayload.id)))
        return res.status(404).json({message:"user has not admin role"});
        const candidateId=req.params.candidateId;
        const updatecandidateData=req.body;
        const response= await Candidate.findByIdAndUpdate(candidateId,updatecandidateData,{
           new:true,
           runValidators:true,
        })
   
        if(!response){
           res.status(404).json({error:"candidate not found "}) ;
        }
   console.log("candidate data updated")
        res.status(200).json({response}) ;

    }
      catch(err){
        console.error(err);
        res.status(404).json({error:"there is some error in candidate updation"}) ;
    }

})



router.delete('/delete/:candidateId',jwtauthmidleware, async (req,res)=>{
    try{

        if((await !CheckAdminRole(req.userpayload.id)))
{ console.log("hehh")
        return res.status(403).json({message:"user has not admin role"});}

        const candidateId=req.params.candidateId;
  
        const response= await User.findByIdAndDelete(candidateId);
   
        if(!response){
           res.status(404).json({error:"candidate not found "}) ;
        }
   console.log("candidate data deleted")
        res.status(200).json({response}) ;

    }
      catch(err){
        console.error(err);
        res.status(404).json({error:"there is some error in candidate updation"}) ;
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
//post for voting
router.post('/vote/:candidateId',jwtauthmidleware,async(req,res)=>{
   const candidateID=req.params.candidateId;
   userId = req.userpayload.id;

   try{
    const candidate=await Candidate.findById(candidateID);
    if(!candidate){
        return res.status(404).json({message:"candidate not found"});

    }
    const user = await User.findById(userId);
    if(!user){
        return res.status(404).json({message:"user not found"});
        
    }
    if(user.isVoted){
        res.status(400).json({message:"you have already voted"});

    }
    if(user.role=='admin'){
        res.status(400).json({message:"admin is not allowed to vote"});
    }


    candidate.votes.push({user:userId});
    candidate.voteCount++;
    await candidate.save();
    user.isVoted=true;
    await user.save();

    res.status(200).json({message:"vote recorded successfully"});
   }catch(err){
    console.log(err);

     res.status(404).json({message:"error in voting route"});
}

})


router.get('/vote/count',async(req,res)=>{
    try{
        const candidate=await Candidate.find().sort({voteCount:'desc'});
        //map the candidate to only return their name and voteCount
        const voteRecord=candidate.map((data)=>{
            return{
                part:data.party,
                count:data.voteCount
            }
        });
        return res.status(200).json(voteRecord);


    }catch(err){
 console.log(err);
    
     res.status(404).json({message:"error in getting vote count route"});
    }
})
module.exports=router;
