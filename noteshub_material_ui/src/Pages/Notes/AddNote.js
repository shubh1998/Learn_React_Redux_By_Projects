import { makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomTextField from '../../components/UI/TextField'
import CustomTypography from '../../components/UI/Typography'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import CustomButton from '../../components/UI/Button'
import CustomContainer from '../../components/UI/Container'
import { useHistory, useParams } from 'react-router'
import moment from 'moment'
import { createNote, getNoteById, setNoteById, updateNoteById } from '../../redux-saga/redux/Notes/noteSlice';
import { useDispatch, useSelector } from 'react-redux';

const schema = yup.object().shape({
    title: yup.string().required("*Required").matches(/^[A-Za-z ]*$/, "Title should contain a character"),
    description: yup.string().required("*Required"),
})

const useStyles = makeStyles({
    field: {
      marginTop: 20,
    }
})

const AddNote = () => {
    const classes = useStyles();
    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
      });
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const getNoteDetails = useSelector((state) => state.notesReducer.getNote);
    let operation = "create";
    if(id){
        operation = "update";
    }

    // ------------To Edit get Note------------------------
    useEffect(()=>{
        if(id) {
            dispatch(getNoteById(id));
        }
    }, [dispatch, id])

    useEffect(() => {
        //set the note in the form
        if (getNoteDetails) {
            reset(getNoteDetails);
        }
    }, [getNoteDetails, reset]);

    // -------Run when component destroys where we set getNote state to null------------
    useEffect(() => {
        return () => {
            dispatch(setNoteById(null))
        }
    }, [dispatch])

    const FormSubmit = (data)=>{
        let formdata;  
        if(operation === "create"){
            formdata = {...data, status: false, note_date: moment(new Date()).format('MMMM D YYYY') }
            dispatch(createNote(formdata));
        }else if(operation === "update"){
            formdata = { ...getNoteDetails, ...data }
            dispatch(updateNoteById(formdata))
        }
        history.push('/mynotes')
    }
    
    return (
        <CustomContainer>
            <CustomTypography variant="h5" label={getNoteDetails ? "Update a note" : "Create a note"} color="secondary" />

            <form noValidate autoComplete="off" onSubmit={handleSubmit(FormSubmit)}>
                <CustomTextField 
                    label="Note Title" 
                    variant="outlined" 
                    color="secondary" 
                    className={classes.field}
                    required={ true }
                    name='title'
                    inputRef={register}
                    InputLabelProps={ {shrink: true} }
                />
                {errors.title && <CustomTypography variant="caption" label={errors.title.message} color="error" /> }

                <CustomTextField 
                    label="Details"
                    variant="outlined"
                    color="secondary"
                    className={classes.field}
                    multiline
                    rows={5}
                    required={ true }
                    name='description'
                    inputRef={register}
                    InputLabelProps={ {shrink: true} }
                />
                {errors.description && <CustomTypography variant="caption" label={errors.description.message} color="error" /> }
                <br/><br/>
                <CustomButton
                    type="submit" 
                    color="secondary" 
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}
                    label="Submit"
                />
            </form>
        </CustomContainer>
    )
}

export default AddNote
