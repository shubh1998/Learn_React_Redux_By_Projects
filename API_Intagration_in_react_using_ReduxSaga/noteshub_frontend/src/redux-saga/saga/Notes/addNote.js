import { call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { createNote } from "../../redux/Notes/noteSlice";

const addNoteRequest = (data)=>{
    return axios.request({
        method: "POST",
        url: "http://localhost:3001/api/v1/createnote",
        data: data
    });
}

function* handleAddNote(action){
    try {
        yield call(addNoteRequest, action.payload);
        // let response = yield call(addNoteRequest, action.payload)
        // if(response.data.success){
        //     yield put(createNote(response.data.data));
        // }
    } catch (error) {
        console.log(error)
    }
}

function* watcherAddNote() {
    yield takeLatest(createNote.type, handleAddNote)
}

export default watcherAddNote;
