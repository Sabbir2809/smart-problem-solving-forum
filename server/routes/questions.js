import express from 'express';
import { askQuestion, deleteQuestion, getAllQuestions, voteQuestion } from '../controllers/questions.js';

const router = express.Router();

router.post('/Ask', askQuestion);
router.get('/get', getAllQuestions);
router.delete('/delete/:id', deleteQuestion);
router.patch('/vote/:id', voteQuestion);

export default router;
