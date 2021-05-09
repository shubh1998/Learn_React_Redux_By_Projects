import { call, put, takeLatest } from "redux-saga/effects";
import { getNoteByIdRequest } from "../../../utils/APIs/notes.service";
import { getNoteById, setNoteById } from "../../redux/Notes/noteSlice";

function* handleGetNoteDetails(action){
    try {
        let response = yield call(getNoteByIdRequest, action.payload)
        if(response.status === 200){
            yield put(setNoteById(response.data));
        }
    } catch (error) {
        console.log(error)
    }
}

function* watchergetNoteDetails() {
    yield takeLatest(getNoteById.type, handleGetNoteDetails)
}

export default watchergetNoteDetails;