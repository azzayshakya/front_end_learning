// always take the initiale state and the actions

import {ActionTypes} from '../constants/action-types'
const initialestate={
    products :[
        {
        id:1,
        title:"ajay",
        catogeory:"programmer"
    }
]

}
export const productReducer =(state=initialestate,{type,payload} )=>{

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
           return state 
        default:
            return state
    }


}