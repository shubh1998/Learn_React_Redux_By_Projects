import { call, takeLatest } from "redux-saga/effects";
import { updateNoteRequest } from "../../../utils/APIs/notes.service";
import { updateNoteById } from "../../redux/Notes/noteSlice";

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
