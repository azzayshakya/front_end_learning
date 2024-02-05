
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import PostJob from './pages/PostJob';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyCreatedJobs from './pages/MyCreatedJobs';
import UpdatePage from './component/UpdatePage';
import Ajay from './pages/ajay';

function App() {
  return (
   
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='PostAJob' element={<PostJob/>}/>
          <Route exact path='LogIn' element={<Login/>}/>
          <Route exact path='SignUp' element={<SignUp/>}/>
          <Route exact path='MyCreatedJobs' element={<MyCreatedJobs/>}/>
          <Route exact path='/UpdatePage' element={<UpdatePage/>}/>
          <Route exact path='/ajay' element={<Ajay/>}/>


        </Routes>
      </Router>
  );
}

export default App;
