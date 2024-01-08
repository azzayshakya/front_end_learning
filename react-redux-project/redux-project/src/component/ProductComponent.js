import {React, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const ProductComponent=()=>{
    const products =useSelector(state=>state.allproducts.products)
    const rendorList=products.map((product)=>{
        const {id,title,image,price,category}=product;
        return(
    
    <div className='main'  key={id}>
        <div className='main-two'>
            <div className="card">
                
                    <Link to={`/product/${id}`} >

                <div className="image">
                    <img src={image} alt={title}/>
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                </div>
                </Link>
            </div>
        </div>
    </div>
    

        )
    })
    
    return<>
    <div>
        {rendorList}
    </div>


    </>
}
export default ProductComponent;