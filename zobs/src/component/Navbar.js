import {React, useState} from 'react'
import {} from '../Css/Navbar.css'
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Navbar=()=>{
    const [IsOpen,setIsOpen]=useState(false);
    const toggleButton=()=>{
        setIsOpen(!IsOpen);
    }
    return (<>
    <div className='Header'>

        <div className="logoSide a">
            <div className="companyIcon zx">
                a
            </div>
            <div className="companyName zx">
                ZOBS
            </div>
        </div>

        <div className="navbarMid a">
            <ul>
                <li className="navbarNames active">Search</li>
                <li className="navbarNames">My Jobs</li>
                <li className="navbarNames">Salary Estimate</li>
                <li className="navbarNames">Post A Job</li>
            </ul>
        </div>

        <div className="buttonside a">
            <div className="loginButton">
                <button>Log In</button>

            </div>
            <div className="logoutButton">
                <button>Log Out</button>
            </div>
        </div>

        <div className="toggleButton">

            <button onClick={toggleButton}>
            {
                IsOpen ? <ImCross/>:<FaBars/>
            }

            </button>

        </div>

        </div>

        


        {/* for mobile */}
        {/* for mobile */}
        {IsOpen && (
          <div className="headerMobile">
            <div className="navbarMidMobile a">
              <ul>
              <li className="navbarNames active">Search</li>
                <li className="navbarNames">My Jobs</li>
                <li className="navbarNames">Salary Estimate</li>
                <li className="navbarNames">Post A Job</li>
              </ul>
            </div>

            <div className="buttonsideMobile a">
              <div className="loginButtonMobile">
                <button>Log In</button>
              </div>
              <div className="logoutButtonMobile">
                <button>Log Out</button>
              </div>
            </div>
          </div>
        )}

        

    
    </>)
}
export default Navbar;