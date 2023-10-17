import {createStore,compose,applyMiddleware,combineReducers} from "redux";
import cartReducers from './reducers';
import thunk from 'redux-thunk';
import throttle from 'lodash.throttle';


function loadState(){
try{
    const state = localStorage.getItem('cart');

    if(state!==null){
        return JSON.parse(state)
    }
    return {

    cart:[]
}}
    catch(e){
        console.log(e)
    }

    
};
function saveState(state){
    try {
        const SaveState = JSON.stringify(state)
    localStorage.setItem('cart',SaveState)
    }
    catch(e) {
        console.log(e)
    }
}
const AppReducers =combineReducers({
    cart:cartReducers
})



const store = createStore(AppReducers,loadState(),compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
store.subscribe(throttle(()=>{
   
    saveState(store.getState())
}));


export default store