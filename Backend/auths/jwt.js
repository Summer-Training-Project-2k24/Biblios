const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtauthmidleware=(req,res,next)=>{
    const auth=req.headers.authorization;
if(!auth){
    return res.status(408).json({error:"unauthorized"});
}
try{

    const token=req.headers.authorization.split(' ')[1];

const userpayload1=jwt.verify(token,process.env.JWT_SECRET);
req.userpayload=userpayload1;

next();


}catch(err){
    console.log(err);
    res.status(404).json({error:"error found in jwt authentication"});
}

}

const generatetoken=(payload)=>{
   


    return jwt.sign(payload,process.env.JWT_SECRET);

}
module.exports={jwtauthmidleware,generatetoken};