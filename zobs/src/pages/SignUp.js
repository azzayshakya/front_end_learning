import React, { useState } from "react"; 
import Navbar from "../component/Navbar";
import {} from '../Css/Login.css'
import { Lock } from 'lucide-react';
import { Mail } from 'lucide-react';
import { GiCrossFlare } from "react-icons/gi";
import { User } from 'lucide-react';
import { Contact } from 'lucide-react';

const SignUp=()=>{

    const [credentials,setcredentials]=useState({name:"" ,email:"",});

    const handleNameChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
    return<>
    <div className="Signuppage">
    <div>
            <Navbar/>
        </div>
        <div className="upperFormContainer">

            <div className="leftSide">
                <div className="leftsideIcon">
                    <GiCrossFlare/>
                </div>
                <div className="leftSideLogo active">
                    <p>ZOBS</p>

                </div>
                <div className="leftsideTag">
                    <p>“Your dream job awaits!”</p>

                </div>
            </div>
            <div className="rightside">

            <div style={{height:"370px"}}className="FormMainContainer SignUPFormMainContainer">

                <div>
                    <h2>SignUp</h2>
                </div>

                <div className="asdf">
                    <div className="formIcon"><User/></div>
                    <input type="name" name="name" id="" placeholder="Your Name"/>
                </div>

                <div className="asdf">
                    <div className="formIcon"><Mail/></div>
                    <input type="email" name="email" id="" placeholder="Your Email"/>
                </div>

                <div className="asdf">
                    <div className="formIcon"><Contact/></div>
                    <input type="Number" name="mobileNumber" id="" placeholder="Mobile Number"/>
                </div>

                <div className="asdf"> 
                <div className="formIcon"><Lock/></div>         
                    <input type="password" name="password" id="" placeholder="Password"/>
                </div> 

                <div className="FormButton">
                    <button>SignUp</button>
                </div>

            </div>

            </div>

        </div>
    </div>
    
    </>
}
export default SignUp;