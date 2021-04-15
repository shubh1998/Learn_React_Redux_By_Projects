import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { getNoteById, setNoteById } from "../../redux/Notes/noteSlice";

const getNoteByIdRequest = (id)=>{
    return axios.request({
        method: "GET",
        url: `http://localhost:3001/api/v1/notedetails/${id}`
    });
}

function* handleGetNoteDetails(action){
    try {
        let response = yield call(getNoteByIdRequest, action.payload)
        if(response.data.success){
            yield put(setNoteById(response.data.data));
        }
    } catch (error) {
        console.log(error)
    }
}

function* watchergetNoteDetails() {
    yield takeLatest(getNoteById.type, handleGetNoteDetails)
}

export default watchergetNoteDetails;