
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Header from './component/Header';
import ProductListing from './component/ProductListing';
import ProductDetail from './component/ProductDetail';
// import ProductComponent from './component/ProductComponent';

function App() {


  return (
    <div className="" style={{marginLeft:"50px"}}>

    <Header/>

      <Router>
        <Routes>
        <Route exact path ="/" element={<ProductListing/>}/>
        <Route exact path='/product/:productId' element={<ProductDetail/>}/>
        <Route>404 Not Found!</Route><Route />
        
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
