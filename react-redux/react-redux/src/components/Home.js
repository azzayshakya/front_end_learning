import React from 'react'

function Home(props) {
    // console.log("home ",props)
    return (

        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjqDxA4DtUD7Yn_G2aEJMzKHnaDcQR2gwqq2hproClA&s" alt='png_img'/>
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
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={{}}>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home