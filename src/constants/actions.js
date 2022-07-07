import * as actionTypes from './message';

export const addToCart=(itemID)=>{
    return {
        type:actionTypes.MSG_ADD_TO_CART_SUCCESS,
       payload:{
        id:itemID
       }
    }
}

export const removeFromCart=(itemID)=>{
    return {
        type:actionTypes.MSG_UPDATE_CART_SUCCESS,
       payload:{
        id:itemID
       }
    }
}