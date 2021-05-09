import apiClient from "../apiClient";

//-----------------------------------------Note Requests-----------------------------------------
export const addNoteRequest = (data)=>{
    return apiClient.postRequest('/notes', data)
}


export const deleteAllNoteRequest = ()=>{
    return apiClient.deleteRequest('/notes')
}


export const deleteNoteByIdRequest = (id)=>{
    return apiClient.deleteRequest(`/notes/${id}`)
}


export const getNoteByIdRequest = (id)=>{
    return apiClient.getRequest(`/notes/${id}`)
}


export const getAllNotesRequest = ()=>{
    return apiClient.getRequest(`/notes`)
}


export const updateNoteRequest = (data) => {
  return apiClient.putRequest(`/notes/${data.id}`, data)
};