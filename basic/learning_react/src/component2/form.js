import React,{ useState } from 'react';




const Form = (props) => {
   
    

   

    const handleUpClick =()=>{
        console.log("you are clicking");
        setText("you have clicked on handle up text")
            }
            

            const hanleOnChange =(event)=>{
                console.log('on change')
                setText(event.target.value)
                    }


    const [text, setText] = useState('enter text here2');
   
    return <div>


<h1>{props.heading} </h1>
<div className="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" value={text} onChange={hanleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
<button className="btn btn-primary" onClick={handleUpClick}>convert to upercase</button> 


</div>;
}



export default Form;