// Dependencies
import express from 'express';
const router = express.Router();
import { login, signup } from '../controllers/auth.js';
import { getAllUsers, updateProfile } from '../controllers/users.js';

router.post('/signup', signup);
router.post('/login', login);
router.get('/getAllUsers', getAllUsers);
router.patch('/update/:id', updateProfile);

// exports
export default router;
