import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART} from '../actions/type';



export default function cartReducers(state,action){


    
switch(action.type){
    case ADD_TO_CART :{
        
        return[...state,
                {
                    product:action.productInfo,
                    quantity:action.quantity
                }
            ];}

    case REMOVE_FROM_CART: {
            const item_index = action.index;
            const new_state = {...state};
            new_state.splice(item_index,1);
            return new_state;
        }
    case CLEAR_CART:{
        return [];
    }
        default:{
                if(state === undefined)
                 return [];
                 return state;
                }

    }
    
}
