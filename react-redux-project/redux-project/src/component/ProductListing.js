import {React, useEffect} from 'react'

import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from '../redux/actions/productAction'

const ProductListing=()=>{
  
    const product =useSelector(state=>state.allproducts.products)
    const dispatch =useDispatch();
    
    const fetchProduct =async()=>{
        try{
            const response =await axios.get("https://fakestoreapi.com/products")
            dispatch(setProducts(response.data))
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchProduct();
    },[])
    console.warn("ProductListing",product)
    return <>
    <div style={{}}>

   <ProductComponent/>
   </div>

    </>
}
export default ProductListing;