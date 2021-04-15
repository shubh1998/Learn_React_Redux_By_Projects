import { call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { updateNoteById } from "../../redux/Notes/noteSlice";

const updateNoteRequest = (data)=>{
    return axios.request({
        method: "PATCH",
        url: `http://localhost:3001/api/v1/updatenote`,
        data: data
    });
}

function* handleUpdateNote(action){
    try {
        yield call(updateNoteRequest, action.payload)
        // let response = yield call(updateNoteRequest, action.payload)
        // if(response.data.success){
        //     yield put(updateNoteById(response.data.data));
        // }
    } catch (error) {
        console.log(error)
    }
}

function* watcherUpdateNote() {
    yield takeLatest(updateNoteById.type, handleUpdateNote)
}

export default watcherUpdateNote;
