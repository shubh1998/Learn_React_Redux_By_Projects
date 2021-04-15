import { call, takeLatest } from "redux-saga/effects";
import { createNote } from "../../redux/Notes/noteSlice";
import { addNoteRequest } from "../../../API/apiClient";

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
