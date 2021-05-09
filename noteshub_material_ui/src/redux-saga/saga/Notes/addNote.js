import { call, takeLatest } from "redux-saga/effects";
import { addNoteRequest } from "../../../utils/APIs/notes.service";
import { createNote } from "../../redux/Notes/noteSlice";

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
