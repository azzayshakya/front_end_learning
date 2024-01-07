
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
// import UseEffect from './component/UseEffect';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Header from './component/Header';
import ProductListing from './component/ProductListing';

function App() {
  const dispatch=useDispatch()
  const products=useSelector(state=>state)
  console.log(products)

  return (
    <div className="App">
    <Header/>
      <Router>
        <Routes>
        <Route exact path ="/" element={<ProductListing/>}/>
        
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
