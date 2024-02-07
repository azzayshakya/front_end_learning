import React from "react";
import { Link} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import {setProduct} from "../redux/action/actions"

const SingleCreatedJob = ({ job }) => {
  const dispatch=useDispatch();
  const handleDispatchJob = () => {
    dispatch(setProduct(job));
  };
  
  
  
  return (
    <div style={{ border:"2px red solid"}}  >
      <h2 >Job Details</h2>

      <ul>
        <li>User Id: {job._id}</li>
        <li>User Email: {job.email}</li>
        <li>Company Name: {job.companyName}</li>
        <li>Job Title: {job.jobTitle}</li>
        <li>Job Location: {job.jobLocation}</li>
        <li>Posting Date: {job.postingDate}</li>
        <li>Experience Level: {job.experienceLevel}</li>
        <li>Employment Type: {job.employmentType}</li>
        <li>Salary Type: {job.salaryType}</li>
        <li>Min Price: {job.minPrice}</li>
        <li>Max Price: {job.maxPrice}</li>
        <li>Company Logo: {job.companyLogo}</li>
        <li>Description: {job.description}</li>
      </ul>

    <div className="button">

    <Link to="/ajay">
    <button onClick={handleDispatchJob}> Update</button>
    </Link>

    </div>

    </div>
  );
};

export default SingleCreatedJob;