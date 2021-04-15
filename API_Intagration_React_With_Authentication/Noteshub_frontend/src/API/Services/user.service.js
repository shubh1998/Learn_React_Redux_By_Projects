import axios from "axios";

//---------------------------------------------User Requests---------------------------------------------------------------
export const fetchUserProfileRequest = (id)=>{
    return axios.request({
      method: "GET",
      url: `/userprofile/${id}`,
    });
}

export const loginRequest = (data) => {
  return axios.request({
    method: "POST",
    url: `/userlogin`,
    data: data,
  });
};

export const logoutRequest = () => {
  return axios.request({
    method: "GET",
    url: `/userlogout`,
  });
};

export const signUpRequest = (data)=>{
    return axios.request({
        method: "POST",
        url: `/registeruser`,
        data: data
    })
}

export const updateUserProfileRequest = (data) => {
  return axios.request({
    method: "PATCH",
    url: `/updateuser`,
    data: data,
  });
};