import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
