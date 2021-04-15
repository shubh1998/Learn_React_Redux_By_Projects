import { all } from "redux-saga/effects";
import getUserProfile from "./User/getUserProfile";
import login from "./User/login";
import logout from "./User/logout";
import signUp from "./User/signUp";
import updateUserProfile from "./User/updateUserProfile";
import addNote from "./Notes/addNote";
import deleteAllNotes from "./Notes/deleteAllNotes";
import deleteNote from "./Notes/deleteNote";
import getNoteDetails from "./Notes/getNoteDetails";
import noteList from "./Notes/getNoteList";
import updateNoteStatus from "./Notes/updateNoteStatus";
import updateNote from "./Notes/updateNote";

export default function* rootSaga(){
    yield all([
        addNote(),
        deleteAllNotes(),
        deleteNote(),
        getNoteDetails(),
        noteList(),
        updateNoteStatus(),
        updateNote(),
        getUserProfile(),
        login(),
        logout(),
        signUp(),
        updateUserProfile()
    ])
}