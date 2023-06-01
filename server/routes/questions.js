// Dependencies
import express from 'express';
const router = express.Router();
import { askQuestion, deleteQuestion, getAllQuestions, voteQuestion } from '../controllers/questions.js';

router.post('/Ask', askQuestion);
router.get('/get', getAllQuestions);
router.delete('/delete/:id', deleteQuestion);
router.patch('/vote/:id', voteQuestion);

// exports
export default router;
