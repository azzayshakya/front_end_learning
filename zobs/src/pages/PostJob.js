import React from 'react';
import Navbar from '../component/Navbar'
import {} from '../Css/PostJob.css'
const PostJob = () => {

    return <div>
        <div>
            <Navbar/>
        </div>
        <div className="upperPostJob">
        
        <div className='PostJobMain'>
            <div className="PostRow">
                <div>
                <p>Company Name</p>
                    <input type="text" placeholder='companyName' />
                </div>
                <div>
                    <p> Job Title</p>
                    <input type="text" placeholder='jobTitle' />
                </div>
            </div>
            <div className="PostRow">
                <div>
                    <p>Min Price in $</p>                   
                    <input type="text" placeholder='minPrice' />
                </div>
                <div>
                    <p> Max Price in $</p>   
                    <input type="text" placeholder='jobTitle' />
                </div>
            </div>

            <div className="PostRow">
                <div>
                    <p>Salary Type</p>                   
                    <input type="text" placeholder='company name' />
                </div>
                <div>
                    <p>Job Location</p>   
                    <input type="text" placeholder='jobTitle' />
                </div>
            </div>

            <div className="PostRow">
                <div>
                    <p>Posting Date</p>                   
                    <input type="text" placeholder='company name' />
                </div>
                <div>
                    <p>Experience Level</p>   
                    <input type="text" placeholder='jobTitle' />
                </div>
            </div>
            <div className="PostRow">
                <div>
                    <p>EmploymentType</p>                   
                    <input type="text" placeholder='company name' />
                </div>
                <div>
                    <p>Company Logo</p>   
                    <input type="file" />
                </div>
            </div>

            <div className="descriptionPostJov">
                <p>Description</p>
                <textarea name="" id="" cols="70" rows="8" placeholder='Description'></textarea>
            </div>
            
        </div>
        </div>

    </div>;
}



export default PostJob;