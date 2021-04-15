import { call, put, takeLatest } from "redux-saga/effects";
import { getNoteById, setNoteById } from "../../redux/Notes/noteSlice";
import { getNoteByIdRequest } from "../../../API/apiClient";

function* handleGetNoteDetails(action){
    try {
        let response = yield call(getNoteByIdRequest, action.payload)
        if(response.data.success){
            yield put(setNoteById(response.data.data));
        }
    } catch (error) {
        console.log(error)
    }
}

function* watchergetNoteDetails() {
    yield takeLatest(getNoteById.type, handleGetNoteDetails)
}

export default watchergetNoteDetails;