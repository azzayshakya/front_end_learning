import {React,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {selectedProduct} from '../redux/actions/productAction'

const ProductDetail =()=>{
    const {productId}=useParams();
    const dispatch = useDispatch();
    // console.log(productId)
    // console.log("ajju is here")

    const fetchdetails= async()=>{
        try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        console.log(response)
        dispatch(selectedProduct(response.data))
        } catch (error) {
            
        }

    }
    useEffect(() => {
        fetchdetails()  
    }, [])
    

    return <>
    <h1>ProductDetail</h1>
    </>
}

export  default ProductDetail;