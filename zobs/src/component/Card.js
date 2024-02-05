import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import '../Css/Card.css'; 

const Card = ({ data }) => {
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

    return (
    
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
                </Link>
            </div>
      
    );
}

export default Card;