import { call, takeLatest } from "redux-saga/effects";
import { deleteNoteByIdRequest } from "../../../utils/APIs/notes.service";
import { removeNote } from "../../redux/Notes/noteSlice";

function* handleDeleteNote(action){
    try {
        yield call(deleteNoteByIdRequest, action.payload)
        // let response = yield call(deleteNoteByIdRequest, action.payload)
        // if(response.data.success){
        //   yield put(removeNote(response.data.data));
        // }
    } catch (error) {
        console.log(error)
    }
}

function* watcherDeleteNote() {
    yield takeLatest(removeNote.type, handleDeleteNote)
}

export default watcherDeleteNote;