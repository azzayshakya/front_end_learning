import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home'
import UseState from './Components/UseState';
import UseReducer from './Components/UseReducer';
import UseContext from './Components/UseContext';
import UseRefHookis  from './Components/UseRefHookis';
import UseMemoHook  from './Components/UseMemoHook';
import UseCallback from './Components/UseCallback';


function App() {
  return (
    <div >
  <Router>
    <div>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/useState' element={<UseState/>}/>
      <Route exact path='/UseReducer' element={<UseReducer/>}/>
      <Route exact path='/UseContext' element={<UseContext/>}/>
      <Route exact path='/UseRefHookis' element={<UseRefHookis/>}/>
      <Route exact path='/UseMemoHook' element={<UseMemoHook/>}/>
      <Route exact path='/UseCallback' element={<UseCallback/>}/>


    </Routes>
    </div>
  </Router>
    </div>
  );
}

export default App;
