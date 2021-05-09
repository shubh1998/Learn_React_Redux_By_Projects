import { call, takeLatest } from "redux-saga/effects";
import { updateNoteRequest } from "../../../utils/APIs/notes.service";
import { setNoteStatus } from "../../redux/Notes/noteSlice";

export function* handleUpdateNoteStatus(action){
    try {
        yield call(updateNoteRequest, action.payload)
        // let response = yield call(updateNoteStatusRequest, action.payload)
        // if(response.data.success){
        //   yield put(setNoteStatus(response.data.data));
        // }
    } catch (error) {
        console.log(error)
    }
}

function* watcherUpdateNoteStatus() {
    yield takeLatest(setNoteStatus.type, handleUpdateNoteStatus)
}

export default watcherUpdateNoteStatus;