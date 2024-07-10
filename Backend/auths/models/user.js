const mongoose= require('mongoose');
const bcrypt=require('bcrypt');
const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true

},
age:{
    type:Number,
    required:true
},
proffession:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true

},
mobile:{
    type:String,
    required:true

},
password:{
    type:String,
    required:true

},role:{
    type:String,
    enum:['customer','admin'],
    default:'customer'
}
});



userSchema.pre('save',async function(next){

    console.log("hii im inpre");
   
    if(!this.isModified('password')){
        console.log("hii");
        return next();}
    try{
        const salt= await bcrypt.genSalt(10);
        const hashpwd= await bcrypt.hash(this.password,salt);
        this.password=hashpwd;
        next();
    }catch(err){

        next(err);
    }

})


userSchema.methods.comparePassword=async function(pwd){
    try{
        const ismatch= bcrypt.compare(pwd,this.password);

        return ismatch;
    }catch(err){

        throw(err);
    }
}

const user=mongoose.model('user',userSchema);
module.exports=user;

