import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import './App.css';

function App() {
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
