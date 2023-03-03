import express from 'express';
import { deleteAnswer, postAnswer } from '../controllers/answers.js';

const router = express.Router();

// answer
router.patch('/post/:id', postAnswer);

// delete answer
router.patch('/delete/:id', deleteAnswer);

export default router;
