import { call, takeLatest } from "redux-saga/effects";
import { deleteAllNoteRequest } from "../../../utils/APIs/notes.service";
import { removeAllNotes } from "../../redux/Notes/noteSlice";

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