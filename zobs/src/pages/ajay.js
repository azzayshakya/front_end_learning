import React,{useEffect, useState} from "react";
import {} from "../Css/ajay.css"
import { Link } from "react-router-dom";
const Ajay=()=>{
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch("http://localhost:5000/ajay", {
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
            // console.log("front end",jsonData)
            
        } catch (error) {

            console.error(error);
        } 
    };

    useEffect(() => {
        getData();
    }, []);

    return <>

    <div className="parenta">
  
    <div className='Headera'>


        <div className="logoSidea">
            <div className="companyIcona active zx">
               {/* <GiCrossFlare/> */}
            </div>
            <div className="companyNamea zx">
                ZOBS
            </div>
        </div>
       

       

        
        <div className="navbarMida a">
            <ul>
                <li className="navbarNamesa active"><Link className='  active' to={"/"}>Home</Link></li>
                <li className="navbarNamesa"><Link className='' to={""}>My Jobs</Link></li>
                <li className="navbarNamesa">azay</li>
                <li className="navbarNamesa"><Link className='' >Post A Job</Link></li>
            </ul>
        </div>
        
    
    <div className="buttonsidea a">
        

        <div className="loginButtona">
            <button><Link className='LinkTaga' to="/LogIn">Log In</Link></button>
        </div>

        <div className="logoutButtona">
            <button><Link className='LinkTaga' to="/SignUp">Sign Up</Link></button>
        </div>

    </div>

</div>



<div className="lefta">

</div>
<div className="righta">

</div>

<div className="footera">

</div>
</div>
   
   </>
}
export default Ajay;