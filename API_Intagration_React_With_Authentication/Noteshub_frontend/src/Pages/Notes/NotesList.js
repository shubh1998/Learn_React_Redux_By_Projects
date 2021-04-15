import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/ui/Button";
import CustomSelect from "../../components/ui/Select";
import { getNotesList, removeAllNotes, setFilter } from "../../redux-saga/redux/Notes/noteSlice";
import useNoteSelector from "../../Selector/useNoteSelector";
import Note from "./Note";

const NotesList = ()=>{
    const getFilter = useSelector((state) => state.notesReducer.filterBy);
    const notesList = useNoteSelector(getFilter)
    const dispatch = useDispatch();
    
    const filterApply = (e)=>{
      dispatch(setFilter(e.target.value))
    }

    const optionFilters = [
      {
        label: "All Tasks",
        value: "all",
      },
      {
        label: "Completed Tasks",
        value: "completed",
      },
      {
        label: "InCompleted Tasks",
        value: "incompleted",
      },
    ];

    const deleteAllNotes = ()=>{
      dispatch(removeAllNotes());
      dispatch(getNotesList());
    }


    return (
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-inline-block">
              <CustomSelect className="custom-select" name="filter" option={optionFilters} onChange={filterApply}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div style={{"marginLeft": "57%"}}>
              <CustomButton className="btn btn-danger" onClick={deleteAllNotes} label="Delete All Notes" />
            </div>
          </div>
        </div>
        <div className="row">
          {notesList.map((note) => (
            <Note key={note._id} note={note} />
          ))}
        </div>
      </div>
    );
}

export default NotesList;