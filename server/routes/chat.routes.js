import express from 'express';
import {isAuthenticated} from '../middlewares/auth.js';
import { getMyChats, getMyGroups, newGroupChat } from '../controllers/chat.js';

const app = express.Router();

app.use(isAuthenticated);

app.post("/new",newGroupChat);

app.get("/my",getMyChats);

//need to check this api
app.get("/my/groups",getMyGroups);

export default app;