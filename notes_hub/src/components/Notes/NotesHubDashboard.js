import { useDispatch, useSelector } from "react-redux";
import { removeAllNotes, filterCompletedNote, filterInCompletedNote, fetchNoteList, fetchAllNotes } from "../../feature/Notes/noteSlice";
import Note from "./Note";

const NotesHubDashboard = ()=>{
    const notesList = useSelector(state => state.notesReducer.notes);
    // console.log(notesList);

    const dispatch = useDispatch();

    const applyFilter = (e)=>{
      // console.log(e.target.value)
      const filter = e.target.value;
      if(filter){
        dispatch(filterCompletedNote());
      }else if(!filter){
        dispatch(filterInCompletedNote());
      } else{
        dispatch(fetchAllNotes());
      }
    }

    return (
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-6">
            <h5>Apply Filter : </h5>
            <select className="form-select"  onChange={applyFilter}>
              <option value="">All Notes</option>
              <option value="true">Completed</option>
              <option value="false">In-Completed</option>
            </select>
          </div>
          <div className="col-lg-6">
            <button
              className="btn btn-danger float-right"
              onClick={(e) => {
                dispatch(removeAllNotes());
              }}
            >
              Delete All Notes
            </button>
          </div>
        </div>
        <div className="row">
          {notesList.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      </div>
    );
}

export default NotesHubDashboard;