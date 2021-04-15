import { call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { setNoteStatus } from "../../redux/Notes/noteSlice";

const updateNoteStatusRequest = (data) => {
    return axios.request({
        method: "PATCH",
        url: `http://localhost:3001/api/v1/updatenotestatus`,
        data: data
    });
};

export function* handleUpdateNoteStatus(action){
    try {
        yield call(updateNoteStatusRequest, action.payload)
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