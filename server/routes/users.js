import express from 'express';
import { login, signup } from '../controllers/auth.js';

const router = express.Router();

// signup api
router.post('/signup', signup);

// login api
router.post('/login', login);

export default router;
