import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import '../Css/Card.css'; 

const Card = ({ data }) => {
    

    const [popup , setPopup]=useState(false);
    const togglePopup = () => {
        setPopup(!popup);
    }

    const [credentials,setcredentials]=useState({name:"",email:""});


    
    const handleFormSubmit=async(req,res)=>{
    console.log(credentials)


        try{
            const apply=("http://localhost:5000/applyforjob",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(credentials)
            
        })
        
        const response = apply.json();
        console.log("applied data  ",apply)
        }

        catch(error){
            console.log("card.js page error  " ,  error)
        }
    }
    const handleInputChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }


    const {
        companyName,
        jobTitle,
        companyLogo,
        minPrice,
        maxPrice,
        salaryType,
        jobLocation,
        postingDate,
        experienceLevel,
        employmentType,
        description
    } = data;

    return (<>
    
            <div className="card">
                <Link className='ppp' to={"/"}>
                    <div className="CardImg">
                        <img src={companyLogo} alt="" />
                    </div>

                    <div className="rightPartOfCard">
                        <div className='CardTitleAndName'>
                            <h4 className='companuName'>{companyName}</h4>
                            <h3>{jobTitle}</h3>
                        </div>

                        <div className='MidRowOfTheCard'>
                            <span className="spanofcard"><FiMapPin />{jobLocation}</span>
                            <span className="spanofcard"><FiClock />{employmentType}</span>
                            <span className="spanofcard"><FiDollarSign />{minPrice}-{maxPrice}</span>
                            <span className="spanofcard"><FiCalendar />{postingDate}</span>
                        </div>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className="applybutton">
                        <Link to={"/"}>
                        <button onClick={togglePopup}>Apply</button>
                        </Link>
                       
                    </div>

                    
                </Link>
                
            </div>
            {/* {popup ? <h1>Show Popup Content</h1> : <h1>Other Content</h1>} */}

            <div>
                {
                    popup ? 
                    (
                        <div>
                            <div className='applyForm'>

                                <div className="row">
                                    <div className='leftelementincardform'>
                                        <label></label>
                                        <input type="text" name="name" placeholder="Full Name" value={credentials.name} onChange={handleInputChange} />

                                    </div>
                                    <div className="rightelementincardform">
                                        <label></label>
                                        <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleInputChange} />

                                    </div>
                                </div><div className="row">
                                    <div className='leftelementincardform'>
                                        <label></label>
                                        <input type="number" name="number" placeholder="number" value={credentials.number} onChange={handleInputChange} />

                                    </div>
                                    <div className="rightelementincardform">
                                        <label></label>
                                        <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleInputChange} />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className='leftelementincardform'>
                                        <label></label>
                                        <input type="text" name="name" placeholder="Full Name" value={credentials.name} onChange={handleInputChange} />

                                    </div>
                                    <div className="rightelementincardform">
                                        <label></label>
                                        <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleInputChange} />

                                    </div>
                                </div>
                            
                            <div>

                            </div>
                            <button type="submit" onClick={handleFormSubmit}>Submit</button>
                            </div>


                        </div>

                    ):(
                        <h1></h1>
                    )
                }
            </div>
      
            </>);
}

export default Card;