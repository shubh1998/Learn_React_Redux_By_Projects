import { combineReducers } from "@reduxjs/toolkit";
import notesReducer from "./Notes/noteSlice"

const rootReducer = combineReducers({
    notesReducer
})

export default rootReducer;