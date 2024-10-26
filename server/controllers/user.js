import { User } from "../models/user.js";
import { cookieOption, sendToken } from "../utils/features.js";
import { compare } from "bcrypt";
import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";

//create a new user and save it to database and save token in cookies
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;
  // console.log(req.body)

  const avatar = {
    public_id: "chamanid",
    url: "chamanurl",
  };

  const user = await User.create({
    name,
    username,
    password,
    avatar,
    bio,
  });

  sendToken(res, user, 201, "User created successfully");
  // res.status(201).json({message: "User created successfully"});
};

//login user and save token in cookies
const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");

  if (!user) return next(new ErrorHandler("User not found", 404));

  const isMatch = await compare(password, user.password);

  if (!isMatch) return next(new ErrorHandler("Wrong password", 400));

  sendToken(res, user, 200, `Logged in successfully as ${user.name}`);
});

const getMyProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user);
  res.status(200).json({
    success: true,
    user,
  });
});

const logout = TryCatch(async (req, res) => {
  return res.status(200).cookie("token","",{...cookieOption,maxAge:0}).json({
    success: true,
    message:"Logged out successfully",
  });
});

const searchUser = TryCatch(async (req, res) => {
    const {name} = req.query;
    const users = await User.find({name: {$regex: name, $options: 'i'}});
  return res
  .status(200)
  .json({
    success: true,
    message:"Logged out successfully",
  });
});

export { login, newUser, getMyProfile, logout, searchUser };
