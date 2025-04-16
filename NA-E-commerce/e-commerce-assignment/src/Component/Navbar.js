import React from 'react';
import "../Css/Navbar.css"
import homemenu from "../Images/menu.png"
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {
    return <div>
        <div className="main_navbar">
            
            <span><TbMenu2/></span>
            <p>SHOP</p>
        </div>
    </div>;
}
export default Navbar;