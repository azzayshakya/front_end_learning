import React, { useState } from "react"; 
import Navbar from "../component/Navbar";
import {} from '../Css/Login.css'
import { Lock } from 'lucide-react';
import { Mail } from 'lucide-react';
import { GiCrossFlare } from "react-icons/gi";


const Login=()=>{
    const [credentials,setcredentials]=useState();
    const HandleNamechange=()=>{

    }
    return<>
    <div className="loginpage">
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

            <div className="FormMainContainer">

                <div>
                    <h2>LogIn</h2>
                </div>

                <div className="asdf">
                    <div className="formIcon"><Mail/></div>
                    <input type="email" name="" id="" placeholder="Your Email"/>
                </div>

                <div className="asdf"> 
                <div className="formIcon"><Lock/></div>         
                    <input type="password" name="" id="" placeholder="Password"/>
                </div> 

                <div className="FormButton">
                    <button>Submit</button>
                </div>

            </div>

            </div>

        </div>
    </div>
    </>
}

export  default Login;