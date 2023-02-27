import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import users from './../models/auth.js';

// signup function
export const signup = async (req, res) => {
  // signup input field value
  const { name, email, password } = req.body;

  try {
    // existing user
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.status(404).json({ message: 'User Already Exist. ✅' });
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    // new user create
    const newUser = await users.create({ name, email, password: hashedPassword });
    // json web token
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.DB_USER, {
      expiresIn: '1h',
    });
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json('Something went Wrong! ❌');
  }
};

// login function
export const login = async (req, res) => {
  // login input field value
  const { email, password } = req.body;

  try {
    // existing user
    const existingUser = await users.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: `User Don't Exist! ❌` });
    }
    // compare existing encrypt password & input password
    const isPasswordBcrypt = await bcrypt.compare(password, existingUser.password);

    // authentication
    if (!isPasswordBcrypt) {
      return res.status(400).json({ message: 'Invalid Credentials! ❌' });
    }
    // json web token
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.DB_USER, {
      expiresIn: '1h',
    });

    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json('Something went Wrong...');
  }
};
