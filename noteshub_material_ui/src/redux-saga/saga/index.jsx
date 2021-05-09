import { all } from "redux-saga/effects";
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
    ])
}