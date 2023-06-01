// Dependencies
import express from 'express';
const router = express.Router();
import { deleteAnswer, postAnswer } from '../controllers/answers.js';

router.patch('/post/:id', postAnswer);
router.patch('/delete/:id', deleteAnswer);

// exports
export default router;
