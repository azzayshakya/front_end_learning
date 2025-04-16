import React from 'react';
import "../Css/Footer.css"
import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FooterComp = () => {
    return <div>
        <div className="footer">
            <div className="footerrows">
            <div className="leftrow">
                <span>Navigate</span>
                <p>Home</p>
                <p>T-Shirts</p>
                <p>About Us</p>


            </div>
            <div className="midrow">
                <span>Tracking and Support</span>
                <p>Returns</p>
                <p>Terms</p>
                <p>Support</p>
                <p>Track Your Order</p>

            </div>
            <div className="rightrow">
                <span>More Info</span>
                <p>Blog</p>
                <p>Reviews</p>
                <p>Care</p>
                
            </div>
            </div>
            <div className="footerBottomPart">
                <p className='footerContect'>Contect</p>
                <p className='mailAtFooter'>Support@nstee.in</p>
                <p className='footericons'><span><FaFacebookF/></span><span><FaXTwitter/></span><span><FaPinterestP/></span><span><FaInstagram/></span></p>
            </div>

        </div>
        
    </div>;
}


export default FooterComp;