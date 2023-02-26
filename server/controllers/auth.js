import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import users from './../models/auth.js';

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ message: 'User Already Exist' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.create({ name, email, password: hashedPassword });
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.DB_USER, {
      expiresIn: '1h',
    });
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json('Something went Wrong...');
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await users.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: `User Don't Exist` });
    }
    const isPasswordBcrypt = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordBcrypt) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.DB_USER, {
      expiresIn: '1h',
    });
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json('Something went Wrong...');
  }
};
