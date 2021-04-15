import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getNoteById, updateNoteById } from "../../feature/Notes/noteSlice";

const EditNote = ()=>{
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const getNoteDetails = useSelector(state => state.notesReducer.getNote);
    const history = useHistory();
    

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getNoteById(id));
      // console.log("effect runs");
      // console.log(getNoteDetails)
      if (getNoteDetails) {
        setTitle(getNoteDetails.title);
        setDescription(getNoteDetails.description);
      }
    }, [getNoteDetails, dispatch, id]);

    const updateNoteFormSubmit = (e) => {
      e.preventDefault();
      const formdata = {
        ...getNoteDetails,
        title, 
        description
      };
      // console.log(formdata);
      dispatch(updateNoteById(formdata))
      history.push("/");
    };
    

    return (
      <div className="container py-3">
        <div className="card border-0 shadow">
          <div className="card-header bg-danger text-white">
            <h6>Add a note</h6>
          </div>
          <div className="card-body">
            <form onSubmit={updateNoteFormSubmit}>
              <div className="form-group row">
                <label className="col-lg-2 col-form-label">Note Title : </label>
                <input
                  type="text"
                  className="form-control col-lg-10"
                  placeholder="Enter Note Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required={true}
                />
              </div>
              <div className="form-group row">
                <label className="col-lg-2 col-form-label">
                  Note Description :
                </label>
                <textarea
                  type="text"
                  className="form-control col-lg-10"
                  placeholder="Enter Note Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required={true}
                  rows="6"
                ></textarea>
              </div>
              <button className="btn btn-primary float-right" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default EditNote;