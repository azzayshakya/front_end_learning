import React,{useState,useRef} from 'react';

const UseRefHookis = () => {
    const refelemnt=useRef("")
    const [name,setname]=useState("");
    console.log(name)
    const reset =()=>{
        setname("")
        refelemnt.current.focus()
    }
    return <div>
        <h2>useRefHook</h2>
        <p>enter info</p>
        <input ref={refelemnt} type="text" value={name} onChange={(e)=>setname(e.target.value)} />
        <button onClick={reset}>Reset</button>
    </div>;
}



export default UseRefHookis;