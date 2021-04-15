import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getNotesList, removeNote, setNoteStatus } from '../../redux-saga/redux/Notes/noteSlice';
import CustomButton from '../../components/ui/Button';

const Note = ({note}) => {
    const { _id, title, description, note_status } = note;
    const dispatch = useDispatch();

    const updateNoteStatusFunction = (note)=>{
      if (note.note_status) {
        note = { _id, note_status: false };
      } else {
        note = { _id, note_status: true };
      }

      dispatch(setNoteStatus(note));
      dispatch(getNotesList());
    }

    const deleteNote = (id)=>{
      dispatch(removeNote(id));
      dispatch(getNotesList());
    }

    return (
      
      <div className="col-lg-4 card-deck">
        <div className="card border-0 shadow mt-5">
          <div className="card-header">
            <Link to={`editnote/${_id}`} className="float-right">
              <span className="material-icons mr-2">edit</span>
            </Link>
            <Link to="#" className="float-right" onClick={(e)=>{deleteNote(_id)}}>
              <span className="material-icons">delete</span>
            </Link>
            <h6>Note Title : <span className={note_status ? "text-info" : "text-warning"}>{title}</span></h6>
          </div>
          <div className="card-body">
            <p>{description}</p>
          </div>
          <CustomButton label={note_status ? "Completed" : "Incompleted"} className={note_status ? "btn btn-info" : "btn btn-warning text-white"} onClick={(e) => updateNoteStatusFunction(note)}/>
        </div>
      </div>
    );
}

export default Note;
