import { call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { removeAllNotes } from "../../redux/Notes/noteSlice";

const deleteAllNoteRequest = ()=>{
    return axios.request({
        method: "DELETE",
        url: `http://localhost:3001/api/v1/deleteallnotes`
    });
}

function* handleDeleteAllNote(action){
    try {
        yield call(deleteAllNoteRequest, action.payload)
        // let response = yield call(deleteAllNoteRequest, action.payload)
        // if(response.data.success){
        //   yield put(removeAllNotes(response.data.data));
        // }
    } catch (error) {
        console.log(error)
    }
}

function* watcherDeleteAllNote() {
    yield takeLatest(removeAllNotes.type, handleDeleteAllNote)
}

export default watcherDeleteAllNote