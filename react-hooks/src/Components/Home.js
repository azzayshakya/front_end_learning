import React from "react";
import "../Components/Home.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
    <div className="navbar">
      <ol>
        <li><Link to="/UseState">UseState</Link></li>
        <li><Link to="/UseReducer">UseReducer</Link></li>
        <li><Link to="/UseContext">UseContext</Link></li>
        <li><Link to="/UseRefHookis">useRef</Link></li>
        <li><Link to="/UseMemoHook">useMemo</Link></li>
        <li><Link to="/UseCallback">useCallback</Link></li>
      </ol>
    </div>
  </div> 
  );
};

export default Home;
