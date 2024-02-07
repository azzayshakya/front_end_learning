    import React,{useEffect, useState} from "react";
    import {} from "../Css/ajay.css"
    import { Link } from "react-router-dom";
    import { UseSelector, useSelector } from "react-redux";
    const Ajay = () => {
        const Products = useSelector(state => state.allProducts.products);
    
        const [updatedJob, setUpdatedJob] = useState({
            companyName: "",
            jobTitle: "",
            minPrice: "",
            maxPrice: "",
            salaryType: "",
            jobLocation: "",
            postingDate: "",
            experienceLevel: "",
            employmentType: "",
            companyLogo: "",
            description: ""
        });
    
        // Handle form input changes
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setUpdatedJob(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

        const handleRadioChange = (event) => {
            setUpdatedJob({ ...updatedJob, [event.target.name]: event.target.value });
        };
    
        // Handle form submission
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                // Make a POST request to update job information
                const response = await fetch("http://localhost:5000/updateJob", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedJob)
                });
                const data = await response.json();
                console.log(data); // Log response from backend
                // Optionally, you can handle success or error messages from the backend
            } catch (error) {
                console.error(error);
            }
        };
    
        return (
            // <input type="text" name="companyName" value={updatedJob.companyName} onChange={handleInputChange} />

            
                <div className="upperPostJob">
        <div className='PostJobMain'>
            <div className="PostRow">
                <div>
                <p>Company Name</p>
                    <input type="text" placeholder='companyName' name='companyName' value={updatedJob.companyName} onChange={handleInputChange}/>
                </div>
                <div>
                    <p> Job Title</p>
                    <input type="text" placeholder='jobTitle' name='jobTitle' value={updatedJob.jobTitle} onChange={handleInputChange} />
                </div>
            </div>
            <div className="PostRow">
                <div>
                    <p>Min Price in $</p>                   
                    <input type="number" placeholder='minPrice'name='minPrice' value={updatedJob.minPrice} onChange={handleInputChange}/>
                </div>
                <div>
                    <p> Max Price in $</p>   
                    <input type="number" placeholder='jobTitle' name='maxPrice' value={updatedJob.maxPrice} onChange={handleInputChange}/>
                </div>
            </div>
            {/* <input type="text" placeholder='company name' name='salaryType' value={credentials.salaryType} onChange={handleNameChange} /> */}


            <div className="PostRowRadioUpper">
            <div>
                <p>Salary Type</p>
                <div className="PostRowRadio">

                <input
                    type="radio"
                    id="Yearly"
                    name="salaryType"
                    value="Yearly"
                    checked={updatedJob.salaryType === "Yearly"}
                    onChange={handleRadioChange}
                />
                <label htmlFor="html">Yearly</label><br />
            
                <input
                    type="radio"
                    id="Monthly"
                    name="salaryType"
                    value="Monthly"
                    checked={updatedJob.salaryType === "Monthly"}
                    onChange={handleRadioChange}
                />
                <label htmlFor="css">Monthly</label>

                </div>

            </div>

                <div className='jobLocationRow'>
                    <p>Job Location</p>   
                    <input type="text" placeholder='jobTitle' name='jobLocation' value={updatedJob.jobLocation} onChange={handleInputChange}/>
                </div>
            </div>

            <div className="PostRowRadioUpper">
                <div className='jobLocationRow'>
                    <p>Posting Date</p>                  
                    <input type="date" placeholder='Posting Date' name='postingDate' value={updatedJob.postingDate} onChange={handleInputChange}/>
                </div>
                <div>
                    <p>Experience Level</p>

                    <div className='PostRowRadio'> 
                        <input
                            type="radio"
                            id="Fresher"
                            name="experienceLevel"
                            value="Fresher"
                            checked={updatedJob.experienceLevel === "Fresher"}
                            onChange={handleRadioChange}
                            />
                            <label htmlFor="html">Fresher</label><br />

                            <input
                            type="radio"
                            id="Internship"
                            name="experienceLevel"
                            value="Internship"
                            checked={updatedJob.experienceLevel === "Internship"}
                            onChange={handleRadioChange}
                            />
                            <label htmlFor="css">Internship</label><br />

                            <input
                            type="radio"
                            id="WorkedForaCompany"
                            name="experienceLevel"
                            value="WorkedForaCompany"
                            checked={updatedJob.experienceLevel === "Worked For a Company"}
                            onChange={handleRadioChange}
                            />
                            <label htmlFor="javascript">Worked For A Company</label>
                    </div>
                    
                </div>
            </div>
            <div className="PostRow">
                <div>
                    <p>EmploymentType</p>   
                                  
                    <input type="text" placeholder='EmploymentType' name='employmentType' value={updatedJob.employmentType} onChange={handleInputChange} />
                </div>
                <div>
                    <p>Company Logo</p>   
                    <input type='text' placeholder='give us the src of the Company logo' name='companyLogo' value={updatedJob.companyLogo} onChange={handleInputChange}/> 
                </div>
            </div>

            <div className="descriptionPostJov">
                <p>Description (Max-20 Words)</p>
                <textarea name="description" id="" cols="70" rows="8" placeholder='Description' value={updatedJob.description} onChange={handleInputChange} ></textarea>
            </div>

            <div className="SubmitButton" onClick={handleSubmit}>
            <button>Submit</button>
        </div>
            
        </div>

        
        </div>

                
        );
    }
    
    export default Ajay;