import {ADD_TO_CART, REMOVE_FROM_CART,CLEAR_CART} from './type';

export function CreateaddToCart (productInfo,quantity){
    return{
        type: ADD_TO_CART,
        productInfo,
        quantity

    }
}
export function addToCart(productInfo,quantity) {
    return (dispatch) => {
        dispatch(CreateaddToCart(productInfo,quantity))
    }
}
export function CreateremoveFromCartActions(index){
    return {
        type: REMOVE_FROM_CART,
        index
    }
}
export function removeFromCart(index){
    return (dispatch) =>{
        dispatch(CreateremoveFromCartActions(index))
    }
}

export function CreateClearCart(){
    return {
        type: CLEAR_CART
        
    }
}
export function ClearCart() {
    return (dispatch) => {
        dispatch(CreateClearCart())
    }
}