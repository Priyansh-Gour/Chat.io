import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "chatio" })
    .then((data) => {
      console.log(`Connected to MongoDB database: ${data.connection.host}`);
    })
    .catch((err) => {
      throw err;
    });
};

const cookieOption={
  maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
  sameSite: "none",
  httpOnly: true,
  secure: true
}
const sendToken = (res, user, code, message) => {

  const token = jwt.sign({_id: user._id }, process.env.JWT_SECRET);

  return res.status(code).cookie("token",token, cookieOption).json({ 
    success: true,  
    message 
  });

};

const emitEvent = (req,event,user,data)=>{
    console.log("Emitting",event);
}

export { connectDB, sendToken, cookieOption, emitEvent };
