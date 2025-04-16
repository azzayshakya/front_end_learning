import React, { useMemo, useState } from 'react';

const UseMemoHook = () => {
    const [add, setAdd] = useState(0);
    const [subtract, setSubtract] = useState(100);
    
    const multi = useMemo(() => {
        console.log("ajay is here");
        return add * 10;
    }, [add]);

    return (
        <div>
            <h1>UseMemoHook</h1>
            <p>Multiplied Value: {multi}</p>
            <br />
            <button onClick={() => setAdd(add + 1)}>Add</button>
            <span> {add}</span>
            <br />
            <button onClick={() => setSubtract(subtract - 1)}>Subtract</button>
            <span>{subtract}</span>
        </div>
    );
}

export default UseMemoHook;
