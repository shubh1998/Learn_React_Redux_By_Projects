import { call, put, takeLatest } from "redux-saga/effects";
import { getAllNotesRequest } from "../../../utils/APIs/notes.service";
import { getNotesList, setNotesList } from "../../redux/Notes/noteSlice";

function* handleGetNotes(action){
    try {
        let response = yield call(getAllNotesRequest)
        yield put(setNotesList(response.data));
    } catch (error) {
        console.log(error)
    }
}

function* watcherGetNoteList() {
    yield takeLatest(getNotesList.type, handleGetNotes)
}

export default watcherGetNoteList;