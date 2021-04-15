import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {combineAllReducers } from "../reducers/combineAllReducers"

//Create Store
const store = createStore(combineAllReducers, composeWithDevTools());

export default store;
