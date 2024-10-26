import {User} from '../models/user.js'
import { sendToken } from '../utils/features.js';
import { compare } from "bcrypt";


//create a new user and save it to database and save token in cookies
const newUser = async (req, res) => {

    const { name, username, password, bio } = req.body;
    // console.log(req.body)

    const avatar = {
        public_id: "chamanid",
        url: "chamanurl"
    }

    const user = await User.create({
        name,
        username,
        password,
        avatar,
        bio
    });

    sendToken(res,user,201,"User created successfully");
    // res.status(201).json({message: "User created successfully"});
}

const login = async(req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).select("+password");

    if(!user){
        return res.status(401).json({message: "User not found"});
    }

    const isMatch = await compare(password, user.password);

    if(!isMatch){
        return res.status(401).json({message: "Invalid password"});
    }

    sendToken(res,user,200,`Logged in successfully as ${user.name}`);
}

const getMyProfile = async(req, res) => {
    // return await User.findById(req.user._id);
}

export {login,newUser,getMyProfile};
