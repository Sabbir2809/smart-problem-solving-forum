import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import './App.css';
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <AllRoutes></AllRoutes>
      </Router>
    </div>
  );
}

export default App;
