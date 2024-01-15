import React, { useState } from 'react';
import Navbar from '../component/Navbar'
import {} from '../Css/PostJob.css'
const PostJob = () => {
    const [credentials,setcredentials]= useState({companyName:"",jobTitle:"",minPrice:"",maxPrice:"",salaryType:"",jobLocation:"",postingDate:"",experienceLevel:"",employmentType:"",companyLogo:"",description:""})

    const HandleSubmit=async(event)=>{
        event.preventDefault();
        console.log(JSON.stringify(credentials))
        console.log("babes")
        
        const response=await fetch("http://localhost:5000/PostJob",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({companyName:credentials.companyName,jobTitle:credentials.jobTitle,minPrice:credentials.minPrice,maxPrice:credentials.maxPrice,salaryType:credentials.salaryType,jobLocation:credentials.jobLocation,postingDate:credentials.postingDate,experienceLevel:credentials.experienceLevel,employmentType:credentials.employmentType,companyLogo:credentials.companyLogo,description:credentials.description})
            
        })
        const json= await response.json();
        console.log(json)
        if (!json.success) {
            alert("enter valid details")
          }

    }

    const handleNameChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handleRadioChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    };



    return <div>
        <div>
            <Navbar/>
        </div>
        <div className="upperPostJob">
        
        <div className='PostJobMain'>
            <div className="PostRow">
                <div>
                <p>Company Name</p>
                    <input type="text" placeholder='companyName' name='companyName' value={credentials.companyName} onChange={handleNameChange}/>
                </div>
                <div>
                    <p> Job Title</p>
                    <input type="text" placeholder='jobTitle' name='jobTitle' value={credentials.jobTitle} onChange={handleNameChange} />
                </div>
            </div>
            <div className="PostRow">
                <div>
                    <p>Min Price in $</p>                   
                    <input type="number" placeholder='minPrice'name='minPrice' value={credentials.minPrice} onChange={handleNameChange}/>
                </div>
                <div>
                    <p> Max Price in $</p>   
                    <input type="number" placeholder='jobTitle' name='maxPrice' value={credentials.maxPrice} onChange={handleNameChange}/>
                </div>
            </div>
            {/* <input type="text" placeholder='company name' name='salaryType' value={credentials.salaryType} onChange={handleNameChange} /> */}


            <div className="PostRow">
            <div>
    <p>Salary Type</p>
    <input
        type="radio"
        id="html"
        name="salaryType"
        value="HTML"
        checked={credentials.salaryType === "HTML"}
        onChange={handleRadioChange}
    />
    <label htmlFor="html">HTML</label><br />

    <input
        type="radio"
        id="css"
        name="salaryType"
        value="CSS"
        checked={credentials.salaryType === "CSS"}
        onChange={handleRadioChange}
    />
    <label htmlFor="css">CSS</label><br />

    <input
        type="radio"
        id="javascript"
        name="salaryType"
        value="JavaScript"
        checked={credentials.salaryType === "JavaScript"}
        onChange={handleRadioChange}
    />
    <label htmlFor="javascript">JavaScript</label>
</div>
                <div>
                    <p>Job Location</p>   
                    <input type="text" placeholder='jobTitle' name='jobLocation' value={credentials.jobLocation} onChange={handleNameChange}/>
                </div>
            </div>

            <div className="PostRow">
                <div>
                    <p>Posting Date</p>                   
                    <input type="date" placeholder='Posting Date' name='postingDate' value={credentials.postingDate} onChange={handleNameChange}/>
                </div>
                <div>
                    <p>Experience Level</p>   
                    <input
        type="radio"
        id="html"
        name="experienceLevel"
        value="HTML"
        checked={credentials.experienceLevel === "HTML"}
        onChange={handleRadioChange}
    />
    <label htmlFor="html">HTML</label><br />

    <input
        type="radio"
        id="css"
        name="experienceLevel"
        value="CSS"
        checked={credentials.experienceLevel === "CSS"}
        onChange={handleRadioChange}
    />
    <label htmlFor="css">CSS</label><br />

    <input
        type="radio"
        id="javascript"
        name="experienceLevel"
        value="JavaScript"
        checked={credentials.experienceLevel === "JavaScript"}
        onChange={handleRadioChange}
    />
    <label htmlFor="javascript">JavaScript</label>
                </div>
            </div>
            <div className="PostRow">
                <div>
                    <p>EmploymentType</p>   
                                  
                    <input type="text" placeholder='EmploymentType' name='employmentType' value={credentials.employmentType} onChange={handleNameChange} />
                </div>
                <div>
                    <p>Company Logo</p>   
                    <input type='text' placeholder='give us the src of the Company logo' name='companyLogo' value={credentials.companyLogo} onChange={handleNameChange}/> 
                </div>
            </div>

            <div className="descriptionPostJov">
                <p>Description</p>
                <textarea name="Description" id="" cols="70" rows="8" placeholder='description' value={credentials.description} onChange={handleNameChange} ></textarea>
            </div>

            <div className="SubmitButton" onClick={HandleSubmit}>
            <button>Submit</button>
        </div>
            
        </div>

        
        </div>

    </div>;
}



export default PostJob;