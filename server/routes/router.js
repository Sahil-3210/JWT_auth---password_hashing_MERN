import express from "express"

const router = new express.Router();


router.post("/register", async(req, res)=>{
    console.log(req.body);
})
export default router;