import {actionTypes} from '../constants/action-types'

const initialeState=[{
    name:"ajju",
    category :"programmer"
}]
export const setProductReducer=(state=initialeState,{type,payload})=>{
    
    switch(type){
        case actionTypes.SET_PRODUCT:
        return state

        default:
            return state




    }
     
    
    
}



