import { legacy_createStore, createStore, combineReducers } from "redux";
import countReducer from "./countReducer";
import themeReducer from "./themeReducer";


const rootReducer = combineReducers({
    count: countReducer,
    theme: themeReducer
})

const store = legacy_createStore(rootReducer);

export default store;