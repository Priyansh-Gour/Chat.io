import {User} from '../models/user.js'

//create a new user and save it to database with cookies
const newUser = async (req, res) => {

    const avatar = {
        public_id: "chamanid",
        url: "chamanurl"
    }
    await User.create({
        name: "chaman",
        username: "chaman",
        password: "chaman",
        avatar
    });

    res.status(201).json({message: "User created successfully"});
}


const login = (req, res) => {
    res.send("Hello world");
}

export {login,newUser};
