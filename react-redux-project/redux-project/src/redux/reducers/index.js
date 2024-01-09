import { combineReducers } from "redux";
import {productReducer} from './productReducer'
import {SelectedProductReducer} from './productReducer'


const reducers =combineReducers ({
    allproducts:productReducer,
    selectedProduct:SelectedProductReducer
    

})

export default reducers;