
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import PostJob from './pages/PostJob';
function App() {
  return (
   
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='PostAJob' element={<PostJob/>}/>

        </Routes>
      </Router>
  );
}

export default App;
