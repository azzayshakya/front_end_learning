const express = require('express');
const router = express.Router();
const applicant = require("../model/ApplyModel");
const multer=require('multer')
const upload=multer({dest:'uploads/'});
const cloudinary = require("../middleware/cloudnary");

router.post("/applyforjob",upload.single("myfile"),async (req, res) => {


    try {
        const result=await cloudinary.uploader.upload(req.file.path)
        console.log(result)
        //result.secure_url
        const { jobid, jobtitle,jobemail, formData } = req.body;
        const { name, email, number, file, skills, experienceLevel, experienceinyears } = formData;


        let jobdata = await applicant.findOne({ jobid });

        if (!jobdata) {
            await applicant.create({
                jobid,
                jobtitle,
                jobemail,
                applicant: [{
                    name,
                    email,
                    number,
                    skills,
                    file:result.secure_url,
                    experienceLevel,
                    experienceinyears,
                }],
            });
        } else {
            await applicant.findOneAndUpdate(
                { jobid, jobtitle,jobemail },
                {
                    $push: {
                        applicant: {
                            name,
                            email,
                            number,
                            skills,
                            file:result.secure_url,
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
