import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const keysecret = "sahilrandivesahilrandivesahilrandive"

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type: String,
        required:true,
        minlength: 6
    },
    cpassword:{
        type: String,
        required:true,
        minlength: 6
    },
    tokens:[
        {
            token:{
                type: String,
                required:true
            }
        }
    ]
})


// hasing password
// using mongocb pre method to hash the password before saving it in database.
userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password,12);
    this.cpassword = await bcrypt.hash(this.cpassword,12);
    next();
})


userSchema.methods.generateAuthToken = async function(){
    try{
        let token23  = jwt.sign({_id:this._id},keysecret,{
            expiresIn:"1d"
        })

        this.tokens = this.tokens.concat({token:token23})
        await this.save();
        return token23
    }
    catch(e){
        res.status(422).json(e)
    }
}


export default mongoose.model('mern',userSchema);