import { useSelector } from 'react-redux';
import './App.css';



function App() {

  const product = useSelector(state=>state)
console.log(product)
  return (
    <div >

      azzay is here
      
     
    </div>
  );
}

export default App;
