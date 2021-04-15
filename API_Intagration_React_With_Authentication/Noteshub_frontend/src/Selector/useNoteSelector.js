import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotesList } from "../redux-saga/redux/Notes/noteSlice";

const useNoteSelector = (filter) => {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getNotesList());
    }, [dispatch])
    let notes = useSelector(state => state.notesReducer.notes)
    // console.log(notes, "sdfghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    
    // useEffect(() => {
    //   const json = JSON.stringify(notes);
    //   localStorage.setItem("notes", json);
    // }, [notes]);

    switch (filter) {
      case "all":
        return notes;

      case "completed":
        return notes.filter((item) => item.note_status);

      case "incompleted":
        return notes.filter((item) => !item.note_status);

      default:
        return notes;
    }
}

export default useNoteSelector;