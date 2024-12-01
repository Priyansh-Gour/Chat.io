import express from 'express';
import {isAuthenticated} from '../middlewares/auth.js';
import { getMyChats, getMyGroups, newGroupChat } from '../controllers/chat.js';

const app = express.Router();

app.use(isAuthenticated);

app.post("/new",newGroupChat);

//testing of this two api below is done

app.get("/my",getMyChats);

app.get("/my/groups",getMyGroups);

export default app;