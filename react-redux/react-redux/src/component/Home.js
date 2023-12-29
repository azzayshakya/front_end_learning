import React from "react";

const Home =()=>{
    return<>

<div>
    <div className="add-to-cart-wrapper">
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/add-to-cart-icon.png" alt="" />
    </div>

           
           <h1>Home Component</h1>
           <div className="cart-wrapper">
               <div className="img-wrapper item">
                   <img src="https://www.freepnglogos.com/uploads/mobile-png/samsung-mobile-png-14.png" />
               </div>
               <div className="text-wrapper item">
                   <span>
                       I-Phone
                   </span>
                   <span>
                       Price: $1000.00
                   </span>
               </div>
               <div className="btn-wrapper item">
                   <button>Add To Cart</button>
               </div>
           </div>
       </div>

    </>
}
export default Home;