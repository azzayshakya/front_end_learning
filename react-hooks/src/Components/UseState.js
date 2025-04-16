import {React,useState} from 'react';
const UseState = () => {
    const [click, setClick] = useState(0);


    return (
        <div>
            <p>You've clicked {click} times!</p>
            <p>The number of times you have clicked
            </p>  
            <button style={{backgroundColor:"red",color:"white" ,padding:"10px",border:"none", borderRadius:"10px"}} onClick={() => setClick(click => click + 1)}>
                Click me
            </button>
        </div>
    );

    
}

export default UseState;