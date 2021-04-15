import axios from "axios";

//-----------------------------------------Note Requests-----------------------------------------
export const addNoteRequest = (data)=>{
    return axios.request({
        method: "POST",
        url: `/createnote`,
        data: data
    });
}


export const deleteAllNoteRequest = ()=>{
    return axios.request({
      method: "DELETE",
      url: `/deleteallnotes`,
    });
}


export const deleteNoteByIdRequest = (id)=>{
    return axios.request({
      method: "DELETE",
      url: `/deletenote/${id}`,
    });
}


export const getNoteByIdRequest = (id)=>{
    return axios.request({
      method: "GET",
      url: `/notedetails/${id}`,
    });
}


export const requestGetNotesList = ()=>{
    return axios.request({
      method: "GET",
      url: `/allnotes`,
    });
}


export const updateNoteRequest = (data) => {
  return axios.request({
    method: "PATCH",
    url: `/updatenote`,
    data: data,
  });
};


export const updateNoteStatusRequest = (data) => {
    return axios.request({
      method: "PATCH",
      url: `/updatenotestatus`,
      data: data,
    });
};