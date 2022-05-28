import * as actions from "./shoppingTypes";

export const addToCart=(itemId)=>{
    return {
        type:actions.ADD_TO_CART,
        payload:{
            id:itemId,
        }
    }
}

export const removeFromCart=(itemId)=>{
    return {
        type:actions.REMOVE_FROM_CART,
        payload:{
            id:itemId,
        }
    }
}

export const adjQuantity=(itemId,value)=>{
    return {
        type: actions.ADJUST_QUANTITY,
        payload:{
            id:itemId,
            qty:value,
        }
    }
}