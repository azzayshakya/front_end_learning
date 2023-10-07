import React,{ useState } from 'react';




const Form = (props) => {
  const handledownClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  const cleartext=()=>{
    let newtext = ''
    setText(newtext);
  }

  const handleUpClick =()=>{

        console.log("you are clicking");
        let newText= text.toUpperCase();
        setText(newText)
        }
        
        const hanleOnChange =(event)=>{
            
        console.log('on change')
        setText(event.target.value)
        }


    const [text, setText] = useState('');
   
    return <>
    <div className='container'>


<h1>{props.heading} </h1>
<div className="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" value={text} onChange={hanleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder='enter your text here'></textarea>
  </div>
<button className="btn btn-primarygi mx-4 my-1" onClick={handleUpClick}>convert to upercase</button> 
<button className="btn btn-primarygi mx-4 my-1" onClick={handledownClick}>convert to lowercase</button> 
<button className="btn btn-primarygi mx-4 my-1" onClick={cleartext}>clear text</button> 


  </div>

  <div className="container">
    <h1>your text summary</h1>
    <p>{text.trim(" ").length} words , {text.length} character</p>
  </div>
  
  </>;
}



export default Form;