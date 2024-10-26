import express from "express"
import userRoute from './routes/user.routes.js';      

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.use('/user',userRoute);

app.listen(3000,()=>{
    console.log("Server is running at port 3000");
})