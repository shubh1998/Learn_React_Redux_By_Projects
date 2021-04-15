import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { getNotesList, setNotesList } from "../../redux/Notes/noteSlice";

const requestGetNotesList = ()=>{
    return axios.request({
        method: "GET",
        url: "http://localhost:3001/api/v1/allnotes"
    });
}

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