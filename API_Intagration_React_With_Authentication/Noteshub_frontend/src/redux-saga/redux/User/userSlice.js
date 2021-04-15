import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    name: localStorage.getItem("name") || "loading...",
    isLoggedIn: localStorage.getItem("authtoken") ? true : false,
    userProfile: null,
    user_id: localStorage.getItem("user_id") || null
}

//Create Slice for user
const userSlice = createSlice({
    name: "userSlice",
    initialState: defaultState,
    reducers: {
        loggedIn: (state, action)=>{},

        signUpUser: (state, action)=>{}, 
        
        setIsLoggedIn: (state, action)=>{
            // console.log(action.payload)
            return {
                ...state,
                isLoggedIn: action.payload.status,
                user_id: action.payload.user_id,
                name: action.payload.name
            }
        },

        getUserProfile: (state, action)=>{},

        updateUserProfile: (state, action)=>{},

        logOut: (state, action)=>{},

        setUserProfile: (state, action)=>{
            return{
                ...state,
                userProfile: action.payload
            }
        }
    }
})

export const {
  loggedIn,
  setIsLoggedIn,
  getUserProfile,
  updateUserProfile,
  logOut,
  setUserProfile,
  signUpUser,
} = userSlice.actions;

export default userSlice.reducer;