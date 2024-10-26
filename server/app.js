import express from "express"
import userRoute from './routes/user.routes.js';      
import { connectDB } from "./utils/features.js";
import dotenv from 'dotenv'

dotenv.config({
    path:"./.env"
});

const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

connectDB(mongoURI);

const app = express();


app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.use('/user',userRoute);

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})