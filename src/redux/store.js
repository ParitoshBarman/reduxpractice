import { legacy_createStore, createStore, combineReducers, applyMiddleware } from "redux";
import countReducer from "./countReducer";
import themeReducer from "./themeReducer";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
    count: countReducer,
    theme: themeReducer
})


// let testFunc1 = async (dispatch)=>{
//     dispatch({type:'CUSTOM', payload:'Set by testFunc 1'})
// }                                                                   // This are in another file                         
// let testFunc2 = async (dispatch)=>{
//     dispatch({type:'CUSTOM', payload:'Set by testFunc 2'})
// }


const myThumkMiddleware = (store) => (dispatch) => (action) => {
    // console.log(store)
    // console.log(dispatch)
    // console.log(action)
    // return dispatch({type:'CUSTOM', payload:'hello_payload'})
    // return dispatch(action)


    if(typeof action == 'function'){
        return action(dispatch)
    }
    
    return dispatch(action)
}

// const store = legacy_createStore(rootReducer, applyMiddleware(myThumkMiddleware));
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;