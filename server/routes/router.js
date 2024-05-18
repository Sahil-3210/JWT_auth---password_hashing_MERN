import express from "express"
import mern from "../models/userSchema.js"

const router = new express.Router();


router.post("/register", async(req, res)=>{
    const {fname,email,password,cpassword} = req.body;

    if(!fname|| !email|| !password|| !cpassword){
        res.status(422).json({error:"please fill all the fields"})
    }

    try{
        const preuser = await mern.findOne({email:email})
        if(preuser){
            res.status(422).json({error:"user already exist"})
        }
        else if(password !== cpassword){
            res.status(422).json({error:"password and confirm password is not matching."})
        }
        else{
            const finalUser = new mern({fname,email,password,cpassword})


            // aftter password hashing in userSchema
            const storeData = await finalUser.save();
            console.log(storeData);
        }
    }catch(err){
        res.status(500).json({error:"server error"})
    }
})
export default router;