import { useEffect } from "react";
import { useSelector } from "react-redux";

const useNoteSelector = (filter) => {
    let notes = useSelector(state => state.notesReducer.notes)
    
    useEffect(() => {
      const json = JSON.stringify(notes);
      localStorage.setItem("notes", json);
    }, [notes]);

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