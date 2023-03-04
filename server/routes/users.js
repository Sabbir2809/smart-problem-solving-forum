import express from 'express';
import { login, signup } from '../controllers/auth.js';
import { getAllUsers } from '../controllers/users.js';

const router = express.Router();

// signup and login router API
router.post('/signup', signup);
router.post('/login', login);
router.get('/getAllUsers', getAllUsers);

export default router;
