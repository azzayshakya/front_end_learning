// always take the initiale state and the actions

import {ActionTypes} from '../constants/action-types'
const initialestate={
    products :[],

}
export const productReducer =(state=initialestate,{type,payload} )=>{

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
           return {...state , products:payload} 
        default:
            return state
    }

   


}