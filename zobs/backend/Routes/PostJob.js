const express = require('express');
const router = express.Router();
const allJobs =require("../model/PostJob")

router.post('/PostJob', async (req, res) => {
  try {
    const {
      companyName,
      jobTitle,
      minPrice,
      maxPrice,
      salaryType,
      jobLocation,
      postingDate,
      experienceLevel,
      employmentType,
      companyLogo,
      description,
    } = req.body;

    
    await allJobs.create({
      companyName,
      jobTitle,
      minPrice,
      maxPrice,
      salaryType,
      jobLocation,
      postingDate,
      experienceLevel,
      employmentType,
      companyLogo,
      description,
    });

    
    res.status(200).json({ success: true, message: 'Job posted successfully'});
  } catch (error) {
    console.error(error);
   
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;