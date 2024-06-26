import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import cors from "cors";
import router from './routes/router.js';
import cookieParser from 'cookie-parser';



const app = express();
app.use(cookieParser())
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("Mongoose Connect successfully");

    app.listen(PORT, ()=>{
        console.log(`server listening on port : ${PORT}`);
    })
}).catch(err=> console.log(err));


app.use(express.json())
app.use(router);


