import express from "express"
import mern from "../models/userSchema.js"
import bcrypt from "bcryptjs"

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
            //console.log(storeData);
            res.status(201).json({status:201,storeData}) //?
        }
    }catch(err){
        res.status(500).json({error:"server error"})
    }
})



router.post("/login", async(req,res)=>{
    //console.log(req.body);

    const {email,password} = req.body;

    if(!email|| !password){
        res.status(422).json({error:"please fill all the fields"})
    }
    try{
        const userValid = await mern.findOne({email:email})
        if(userValid){
            const isMatch = await bcrypt.compare(password,userValid.password)
            if(!isMatch){
                res.status(422).json({error:"invalid detail"})
            }
            else{
                const token = await userValid.generateAuthtoken();
                

                //cookie
                res.cookie("usercookie", token,{
                    expires: new Date(Date.now()+9000000),
                    httpOnly:true
                })

                const result = {userValid,token}
                res.status(201).json({status:201,result}) //?
            }
        }
    }catch(err){
        
    }
})


export default router;