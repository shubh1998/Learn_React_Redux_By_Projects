import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomButton from "../../components/ui/Button";
import TextArea from "../../components/ui/TextArea";
import TextField from "../../components/ui/TextField";
import { createNote } from "../../redux-saga/redux/Notes/noteSlice";
import classNames from "classnames";

const schema = yup.object().shape({
  title: yup.string().required("*Required").matches(/^[A-Za-z ]*$/, "Title should contain a character"),
  description: yup.string().required("*Required"),
  note_status: yup.boolean().nullable().default(false).required("*Required")
})

const AddNote = ()=>{
    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(schema),
      mode: "onChange"
    });
    const history = useHistory();
    const dispatch = useDispatch();

    //Add Note
    const addNoteFormSubmit = (data) => {
        const formdata ={
            ...data
        }
        // console.log(formdata);
        dispatch(createNote(formdata));
        history.push("/");
    }

    return (
      <div className="container py-3">
        <div className="card border-0 shadow">
          <div className="card-header bg-danger text-white">
            <h6>Add a note</h6>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(addNoteFormSubmit)}>
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

export default AddNote;