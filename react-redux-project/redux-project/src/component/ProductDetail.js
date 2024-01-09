import {React,useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct, setProducts} from '../redux/actions/productAction'
import { findDOMNode } from 'react-dom';

const ProductDetail =()=>{
    const {productId}=useParams();
    const dispatch = useDispatch();
    const [loading ,setloading] =useState(true);

    // console.log(productId)
    const product = useSelector(state=>state.selectedProduct)
    const {title,image,price,category}=product;

    console.log("product is here",product)

    const fetchdetails= async()=>{
        try {
            setProducts(true)
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        // console.log(response.data)
        dispatch(selectedProduct(response.data))
        } catch (error) {
            console.log(error)    
        }
        finally{
            setloading(false)
        }

    }
    useEffect(() => {
        fetchdetails()  
    }, [productId])
    

    return <>
    <div>
    { loading ?
   (   <h1>LOADING YOUR DATA............</h1>  )
   :(
    <div>
        <div className='main'>
        <div className='main-two'>
            <div className="card">
                

                <div className="image">
                    <img src={image} alt={title}/>
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                </div>
                
            </div>
        </div>
    </div>

    </div>
   )}
   


    </div>
    </>
}

export  default ProductDetail;