import React, { useState } from "react"; 
import Navbar from "../component/Navbar";
import {} from '../Css/Login.css'

const Login=()=>{
    const [credentials,setcredentials]=useState();
    const HandleNamechange=()=>{

    }
    return<>
    <div className="loginpage">
        <div>
            <Navbar/>
        </div>
        <div className="loginMainContainer">
            <div>
                <h2 style={{textAlign:"center"}}>LogIn</h2>
            </div>
            <div>
                <p>Email</p>
                <input type="email" name="" id="" />
            </div>
            <div>
                <p>Password</p>
                <input type="password" name="" id="" />
            </div> 
        </div>
    </div>
    </>
}

export  default Login;