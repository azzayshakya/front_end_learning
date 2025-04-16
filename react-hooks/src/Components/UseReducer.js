import React,{useReducer} from 'react';

const initialState=0;
const reducer= (state,action)=>{
    switch(action){
        case "add":
            return state=state+1;
        case "substract":
             return state=state-1;
        case "reset":
            return 0;
        default:
            throw new Error("unexpected Error");
    }

}

const UseReducer = () => {
    const [count , dispatch]=useReducer(reducer,initialState)

    return <div>


        <h2>UseEffect</h2>

        <h2>Count Is Here - {count}</h2>
        <button style={{backgroundColor:"red",color:"white" ,padding:"10px",border:"none", borderRadius:"10px",margin:"0px 10px"}} 
        onClick={()=>dispatch("add")}>Add</button>

        <button style={{backgroundColor:"red",color:"white" ,padding:"10px",border:"none", borderRadius:"10px",margin:"0px 10px"}} onClick={()=>dispatch("substract")}>substract</button>
        <button style={{backgroundColor:"red",color:"white" ,padding:"10px",border:"none", borderRadius:"10px" , margin:"0px 10px"}} onClick={()=>dispatch("reset")}>reset</button>
        


    </div>;
}


export default UseReducer;