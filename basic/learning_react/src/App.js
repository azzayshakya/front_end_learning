
import './App.css';
import Navbar from './components/Navbar';
import Form from './component2/form';
import About from './components/about';


function App() {
  return (
    <div>

    <Navbar title="ajay" about="about me"/>

    {/* <div className="container my-3">
    <Form heading="enter the text you want to analyze"/>

    </div> */}
     <About/>
    

    </div>
  );
}

export default App;
