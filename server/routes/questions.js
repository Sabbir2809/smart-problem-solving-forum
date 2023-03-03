import express from 'express';
import { askQuestion, deleteQuestion, getAllQuestions } from '../controllers/questions.js';

const router = express.Router();

router.post('/Ask', askQuestion);

router.get('/get', getAllQuestions);

router.delete('/delete/:id', deleteQuestion);

export default router;
