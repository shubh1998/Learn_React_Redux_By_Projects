import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/Contact/contactSlice";

export default configureStore({
  reducer: {
    contactsStore: contactReducer,
  },
});