import React, { useState, useCallback } from 'react'; 
import Home from './Home';
import UCdata from './UCdata';

const UseCallbackComponent = () => {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);


    const learning = useCallback(() => {
        console.log(`Learning: add = ${add}, count = ${count}`);
    }, [add, count]); 

    return (
        <div>
            <Home />
            <h1>useCallback</h1> 
            <span>Value: </span>{add}
            <br />
            <button onClick={() => setAdd(add + 1)}>Add</button>
            <br />
            <span>Count: </span>{count}
            <br />
            <button onClick={() => setCount(count + 2)}>Count</button>
            <UCdata learning={learning} />  
        </div>
    );
}

export default UseCallbackComponent;
