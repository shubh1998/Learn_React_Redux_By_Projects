import { call, put, takeLatest } from "redux-saga/effects";
import { getNotesList, setNotesList } from "../../redux/Notes/noteSlice";
import { requestGetNotesList } from "../../../API/apiClient";

function* handleGetNotes(action){
    try {
        let response = yield call(requestGetNotesList)
        yield put(setNotesList(response.data.data));
    } catch (error) {
        console.log(error)
    }
}

function* watcherGetNoteList() {
    yield takeLatest(getNotesList.type, handleGetNotes)
}

export default watcherGetNoteList;