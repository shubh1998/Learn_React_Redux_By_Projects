import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../feature/Notes/noteSlice"

const store = configureStore({
    reducer:{
       notesReducer: notesReducer 
    }
})

export default store;