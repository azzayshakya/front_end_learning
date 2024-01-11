import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import {} from '../Css/Banner.css' 
const Banner = () => {
    return <div>
       <div className="banner">
        <div className="BannerAbout">            
            <div className='Find-your-job'>Find Your New <span className='active'>Job</span>Today</div><br />
            <div className='Banner-Tag-line'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi nobis quibusdam. Placeat hic voluptate repellendus nisi delectus natus asperiores.</div>
        </div>
        <div className="inputFeild">
            <div className="firstInputField">

            <div className='icons'>
                < CiLocationOn/>
            </div>
               
            <input type="text" placeholder='Search Type Of Job' />

            </div>
            <div className="SecoundInputField">
            <div className='icons'>
                <CiSearch/>
            </div>
            <input type="text" placeholder='Location' />
            </div>
            <div className="searchInBanner">
                <button>Search</button>
            </div>
        </div>
       </div>
    </div>;
}

export default Banner;