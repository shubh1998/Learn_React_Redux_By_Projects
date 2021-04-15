import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeNote, setTaskCompletedStatus } from '../../redux-saga/redux/Notes/noteSlice';
import CustomButton from '../../components/ui/Button';

const Note = ({note}) => {
    const { id, title, description, note_status } = note;
    const dispatch = useDispatch();

    const setTaskStatus = (note)=>{
      if (note.note_status) {
        note = { ...note, note_status: false };
      } else {
        note = { ...note, note_status: true };
      }

      dispatch(setTaskCompletedStatus(note));
    }

    return (
      
      <div className="col-lg-4 card-deck">
        <div className="card border-0 shadow mt-5">
          <div className="card-header">
            <Link to={`editnote/${id}`} className="float-right">
              <span className="material-icons mr-2">edit</span>
            </Link>
            <Link to="#" className="float-right" onClick={(e)=>{dispatch(removeNote(id))}}>
              <span className="material-icons">delete</span>
            </Link>
            <h6>Note Title : <span className={note_status ? "text-info" : "text-warning"}>{title}</span></h6>
          </div>
          <div className="card-body">
            <p>{description}</p>
          </div>
          <CustomButton label={note_status ? "Completed" : "Incompleted"} className={note_status ? "btn btn-info" : "btn btn-warning text-white"} onClick={(e) => setTaskStatus(note)}/>
        </div>
      </div>
    );
}

export default Note;
