import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
const MyCreatedJobs =()=>{

    const [loading,setloading]=useState(true);
    const [data,setdata]=useState([])
    const getData=async(req,res)=>{
        try {
            setloading(true)
            const response=await fetch("http://localhost:5000/MyCreatedJobs",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'                
            },
            body:JSON.stringify({
                email:localStorage.getItem("userEmail")
            })
        })
        const data= response.json.stringify();
            
        } catch (error) {
            
        }
        finally{
            setloading(false);
        }
        
    }    


    useEffect(()=>{
        getData();
    },[])
   



    return <>
    <div>

        <div>
            <Navbar/>
        </div>

        <div>
           {
            loading ?(
                <h1>data is loading</h1>
            ):(
                <div>

                </div>
            )
           }


        </div>
    </div>
    </>
}
export default MyCreatedJobs;