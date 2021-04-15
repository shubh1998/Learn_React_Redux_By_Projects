import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

export const combineAllReducers = combineReducers({
    contactsStore: contactReducer,
})
