import express from 'express';
import { greetUser } from '../controllers/message.controller.js';
const router = express.Router();

router.get('/greet' , greetUser);
export default router;