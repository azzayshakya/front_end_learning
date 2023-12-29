
import './App.css';
import User from './User'
import Home from './containers/HomeContainer'

function App() {
  return (
    <div className="App">
      {/* <h1>app componenet</h1> */}
      <User data={{name:"azzay  Shakya",height:"00"}}/>
      <Home/>
      
    </div>
  );
}

export default App;
