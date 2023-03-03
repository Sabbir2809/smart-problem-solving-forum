import mongoose from 'mongoose';
import Questions from './../models/questions.js';

export const askQuestion = async (req, res) => {
  const postQuestionData = req.body;
  const postQuestion = new Questions(postQuestionData);

  try {
    await postQuestion.save();
    res.status(200).json('Posted a Question Successfully');
  } catch (error) {
    console.error(error);
    res.status(209).json('Could not post a new Question');
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const questionList = await Questions.find();
    res.status(200).json(questionList);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.error(error);
  }
};

export const deleteQuestion = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('Question unavailable...');
  }

  try {
    await Questions.findByIdAndDelete(_id);
    res.status(200).json({ message: 'Successfully Deleted' });
  } catch (error) {
    res.send(404).json({ message: error.message });
  }
};