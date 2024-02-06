import {ACTION_TYPES} from "../constants/action-types"

export const setProduct=(products)=>{
    return {
        type:ACTION_TYPES.SET_PRODUCT,
        payload:products
    }
}

export const selectedProduct=(product)=>{
    return {
        type:ACTION_TYPES.SELECTED_PRODUCT,
        payload:product
    }
}