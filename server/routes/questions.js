import express from 'express';
import { askQuestion, getAllQuestions } from '../controllers/questions.js';

const router = express.Router();

router.post('/Ask', askQuestion);

router.get('/get', getAllQuestions);

export default router;
