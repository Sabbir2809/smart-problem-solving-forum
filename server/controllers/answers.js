import mongoose from 'mongoose';
import Questions from '../models/questions.js';

export const postAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { noOfAnswers, answerBody, userAnswered } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('Question unavailable...');
  }
  updateNoOfQuestion(_id, noOfAnswers);
  try {
    const updatedQuestion = await Questions.findByIdAndUpdate(_id, {
      $addToSet: { answer: [{ answerBody, userAnswered, userId: req.userId }] },
    });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json(error);
    console.error(error);
  }
};

const updateNoOfQuestion = async (_id, noOfAnswers) => {
  try {
    await Questions.findByIdAndUpdate(_id, { $set: { noOfAnswers: noOfAnswers } });
  } catch (error) {
    console.error(error);
  }
};
