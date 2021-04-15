import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeNote } from "../../feature/Notes/noteSlice";

const Note = ({note}) => {
    const {id, title, description} = note;
    const dispatch = useDispatch();

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
            <h6>Note Title : <span className="text-info">{title}</span></h6>
          </div>
          <div className="card-body">
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
}

export default Note;
