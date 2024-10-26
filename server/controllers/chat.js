import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";
import { Chat } from '../models/chat.js';
import { emitEvent } from "../utils/features.js";

const newGroupChat = TryCatch(async(req,res,next)=>{
    
    const { name, members } = req.body;

    if(members.length<2) return next(new ErrorHandler("Group chat must have at least 2 members",400));

    const allMembers = [...members,req.user];

    await Chat.create({
        name,
        groupChat:true,
        creator:req.user,
        members:allMembers
    });

    emitEvent(req,)

})

export {newGroupChat}