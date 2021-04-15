import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getNoteById, updateNoteById } from "../../redux-saga/redux/Notes/noteSlice";
import { useForm } from "react-hook-form";
import TextField from "../../components/ui/TextField";
import TextArea from "../../components/ui/TextArea";
// import CustomRadioButton from "../../components/ui/RadioButton";
import classNames from "classnames";
import CustomButton from "../../components/ui/Button";

const schema = yup.object().shape({
  title: yup.string().required("*Required").matches(/^[A-Za-z ]*$/, "Title should contain a character"),
  description: yup.string().required("*Required"),
  // note_status: yup.boolean().nullable().default(false).required("*Required")
})

const EditNote = ()=>{
    const { id } = useParams();
    const { register, handleSubmit, errors, reset } = useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

    const getNoteDetails = useSelector(state => state.notesReducer.getNote);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
      //Get Note to edit
      dispatch(getNoteById(id));
      //set the note in the form
      // console.log(getNoteDetails)
      if (getNoteDetails) {
        reset(getNoteDetails);
      }
    }, [getNoteDetails, dispatch, id, reset]);

    //Update Note
    const updateNoteFormSubmit = (data) => {
      const formdata = {
        ...getNoteDetails,
        ...data
      };
      // console.log(formdata);
      dispatch(updateNoteById(formdata))
      history.push("/");
    };

    //Radio Buttons Array
    // const radioButtons = [
    //   {
    //     label: "completed",
    //     value: true,
    //   },
    //   {
    //     label: "InCompleted",
    //     value: false,
    //   },
    // ];
    

    return (
      <div className="container py-3">
        <div className="card border-0 shadow">
          <div className="card-header bg-danger text-white">
            <h6>Edit a note</h6>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(updateNoteFormSubmit)}>
              <div className="form-group row">
                <label className="col-lg-2 col-form-label">Note Title : </label>
                <TextField
                  name="title"
                  type="text"
                  className={classNames("form-control col-lg-10", {"is-invalid col-lg-10": errors.title})}
                  placeholder="Enter Note Title"
                  inputRef={register}
                />
                {errors.title && <small className="ml-17 text-danger">{errors.title.message}</small>}
              </div>
              <div className="form-group row">
                <label className="col-lg-2 col-form-label">
                  Note Description :
                </label>
                <TextArea
                  name="description"
                  type="text"
                  className={classNames("form-control col-lg-10", {"is-invalid": errors.description})}
                  placeholder="Enter Note Description"
                  inputRef={register}
                  rows="6"
                ></TextArea>
                {errors.description && <small className="ml-17 text-danger">{errors.description.message}</small>}
              </div>
              {/* <div className="form-group row">
                <label className="col-lg-2 col-form-label">Note Status :</label>
                <div className="col-lg-10 mt-2">
                  <CustomRadioButton
                    className="form-check-input ml-2 mt-1"
                    radios={radioButtons}
                    name="note_status"
                    inputRef={register}
                    // key={1}
                  />
                </div>
                {errors.note_status && <small className="ml-17 text-danger">{errors.note_status.message}</small>}
              </div> */}
              <CustomButton
                className="btn btn-primary float-right"
                type="submit"
                label="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
}

export default EditNote;