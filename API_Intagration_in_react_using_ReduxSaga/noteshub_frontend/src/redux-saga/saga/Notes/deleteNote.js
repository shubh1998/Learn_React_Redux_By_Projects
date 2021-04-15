import { call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { removeNote } from "../../redux/Notes/noteSlice";

const deleteNoteByIdRequest = (id)=>{
    return axios.request({
        method: "DELETE",
        url: `http://localhost:3001/api/v1/deletenote/${id}`
    });
}

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