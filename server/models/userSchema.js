import mongoose from "mongoose";
import validator from "validator";

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
export default mongoose.model('mern',userSchema);