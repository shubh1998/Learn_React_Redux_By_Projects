import { combineReducers } from "@reduxjs/toolkit";
import notesReducer from "./Notes/noteSlice";
import userReducer from "./User/userSlice";

const rootReducer = combineReducers({
    notesReducer,
    userReducer
})

export default rootReducer;