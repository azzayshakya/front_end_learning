import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import SingleCreatedJob from "../component/SingleCreaedJob";
import UpdatePage from "../component/UpdatePage";

const MyCreatedJobs = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:5000/MyCreatedJobs", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem("userEmail")
                })
            });
            const jsonData = await response.json();
            setData(jsonData.postedJobs);
            console.log("jobdata",jsonData)



        } catch (error) {

            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Navbar />
            <div>
                {loading ? (
                    <h1>Data is loading</h1>
                ) : (
                    <div>
                        {data && data.length > 0 ? (
                            <div>
                                {data.map((job, index) => (
                                    <div key={job._id}>
                                       
                                        <SingleCreatedJob job={job} />   
                                        {/* <UpdatePage UpdateJob={job}/>  */}

                                                                         
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <h2>No jobs found</h2>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCreatedJobs;
