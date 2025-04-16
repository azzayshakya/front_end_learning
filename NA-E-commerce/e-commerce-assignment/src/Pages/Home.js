import React, { useEffect, useState } from 'react';

import Navbar from '../Component/Navbar';
import rating from '../Images/rating.png';
import p1 from '../Images/p1.png';
import p2 from '../Images/p2.png';
import p3 from '../Images/p3.png';
import fullpic from '../Images/fullpic.png';
import CircleImage1 from '../Images/circleImage1.png';
import CircleImage2 from '../Images/CircleImage2.png';
import CircleImage3 from '../Images/CircleImage3.png';
import RedLine from '../Images/Line 16.png';
import sizeguide from '../Images/size-guide.png';





import "../Css/Home.css"
import { IoStar } from "react-icons/io5";
import FooterComp from '../Component/FooterComp';


const Home = () => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        const fetchMyOrder = async () => {
           
      
            try {

              let response = await fetch("https://backend.nstee.in/api/v1/products/", {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  
                },
              });
      
            
              const jsonResponse = await response.json();
              console.log(jsonResponse)
              setData(jsonResponse)
            //   console.log("value :",Data[0].title)

            } catch (error) {
              console.error('Error fetching orders:', error);
            } finally {
              
            }
          };
          
        fetchMyOrder();
    }, []);


    return <div>
        <div className='Home'>
        <div className="navbar_at_pages">
            <Navbar/>
        </div>
        <div className="CircleImages">
        <img src={CircleImage3} alt="" />
            <img src={CircleImage2} alt="" />
            <img src={CircleImage1} alt="" />
        </div>
        </div>
        <div className="MidHomeProdutInfo">
            <div className="toprow">{Data[0].description}</div>
            <div className="mideHomeData">
            <div className="productinfoLeftside">
                <div className="rating">
                <div className="ratingStars">
                    {/* <ul> */}
                        <li><IoStar/></li>
                        <li><IoStar/></li>
                        <li><IoStar/></li>
                        <li><IoStar/></li>
                        <li><IoStar/></li>
                    {/* </ul> */}
                </div>
                <p>38 reviews</p>
                </div>
                <div className='sizeAtHome'>
                    size
                </div>
                <div className="sizeRow">
                    {/* <ul> */}
                        <li className='ActiveSizeRow'>XS</li>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                    {/* </ul> */}
                </div>
                <div className='selectedColor'>Color:Maroon</div>
                <div className="colorofproduct">
                    {/* <ol> */}
                        <li ><p className='colorOfProduct1'></p></li>
                        <li ><p className='colorOfProduct2'></p></li>
                        <li ><p className='colorOfProduct3'></p></li>
                        <li ><p className='colorOfProduct4'></p></li>
                        <li ><p className='colorOfProduct5'></p></li>
                        <li ><p className='colorOfProduct6'></p></li>
                        <li ><p className='colorOfProduct7'></p></li>
                        <li ><p className='colorOfProduct8'></p></li>
                    {/* </ol> */}
                    
                </div>
                <div className="sizeguide">
                        <span>Size Guide</span> 
                        <img src={sizeguide} alt="" />
                    </div>

            </div>
            <div className='productInforightSide'>
                <div className="prices">
                    <div>
                    <p className='firstPrice'>{Data[0].price}</p>
                    </div>
                    <div>    
                    <p className='SecondPrice'>{Data[0].old_price}</p>
                    </div>
                    <div className="discount">
                        34% Off
                    </div>
                </div>
                <div className="lineForOnlyMobile">
    <li><span class="statusDot"></span>In Stock</li>
    <li><span class="statusDot2"></span>Ships in 24Hrs</li>
    <li><span class="statusDot2"></span>14 Days Return</li>
</div>

                <div className="pricebottomLine">
                    <p className='pricelineLeft'>Tax Include</p>
                    <p className='priceLineRight'>Shipping Calculate at checkout</p>
                </div>
                <div className="quantity">
                    <p className='quantityname'>Quantity</p>
                    <p className='quantityItem'><span>-</span><span>{Data[0].stock_qty}</span><span>+</span></p>
                </div>
                <div className="HomeButtons">
                <div className="AddToCart">
                    Add to Cart
                </div>
                <div className="BuyitNow">
                    Buy it Now
                </div>
                </div>
                

            </div>
            
            </div>
            <div className='MidBottomRow'>
                Super Comfy ,Super Light

            </div>
        </div>
        <div className="PhotoSection">
            <div className='PhotoSectionTopRow'>
                <img src={p2} alt="" />
            </div>
            <div className='PhotoSectionBottomRows'>
                <img src={p1} alt="" />
                <img src={p3} alt="" />
            </div>
            <p className='tagline'>For Every Occasion</p>

        </div>
        <div className="lastphotosection">
            <img src={fullpic} alt="" />
        </div>
        <div className="signupform">
            <p className="SignUpTopLine">
            SIGN UP FOR DAILY DISCOUNTS AND OFFERS  
            </p>
            <p className='SignUpBottomLine'>
                Signup with your email for Daily updates bout our Discounts , Sales , and Offers. Get a wide variety of coupon codes <br />on your Mail 
            </p>
            <div className="inputemail">
                <input type="text" placeholder='Your Email' />
                <button>Subscribe</button>

            </div>
        </div>
        <div className="homeNavbar">
            <FooterComp/>
        </div>


    </div>;
}


export default Home;