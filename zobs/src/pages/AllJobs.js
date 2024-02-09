import React, { useEffect } from "react";
import Navbar from "../component/Navbar";

const Alljob=()=>{
    const fetchdata=async(req,res)=>{
        const fatchedData=await fetch("http://localhost:5000/applicants",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify()
        })
        const response= await fatchedData.json();
        console.log("alljobs",response.data)
        

    }

    useEffect(()=>{
        fetchdata();
    },[])


    return <>
    <div>
        <Navbar/>
    </div>
    


    </>
}
export default  Alljob;