import express from 'express';
import { login, signup } from '../controllers/auth.js';

const router = express.Router();

// signup API
router.post('/signup', signup);

// login API
router.post('/login', login);

export default router;
