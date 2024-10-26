import express from "express"      
import { connectDB } from "./utils/features.js";
import dotenv from 'dotenv'
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";

import userRoute from './routes/user.routes.js';
import chatRoute from './routes/chat.routes.js';

dotenv.config({
    path:"./.env"
});

const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

connectDB(mongoURI);

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.use('/user',userRoute);

app.use('/chat',chatRoute);


app.use(errorMiddleware);

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})