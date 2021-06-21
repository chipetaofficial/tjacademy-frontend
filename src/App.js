import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>      
      <Home/>

      </Router>
      
     
    </div>
  );
}

export default App;
