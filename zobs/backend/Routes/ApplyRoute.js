const express = require('express');
const router = express.Router();
const applicant = require("../model/ApplyModel");

router.post("/applyforjob", async (req, res) => {


    try {
        const { jobid, jobtitle, formData } = req.body;
        const { name, email, number, file, skills, experienceLevel, experienceinyears } = formData;

        let jobdata = await applicant.findOne({ jobid });

        if (!jobdata) {
            await applicant.create({
                jobid,
                jobtitle,
                applicant: [{
                    name,
                    email,
                    number,
                    skills,
                    file,
                    experienceLevel,
                    experienceinyears,
                }],
            });
        } else {
            await applicant.findOneAndUpdate(
                { jobid, jobtitle },
                {
                    $push: {
                        applicant: {
                            name,
                            email,
                            number,
                            skills,
                            file,
                            experienceLevel,
                            experienceinyears,
                        },
                    },
                }
            );
        }

        res.status(200).json({ success: true, message: 'you have applied successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;
