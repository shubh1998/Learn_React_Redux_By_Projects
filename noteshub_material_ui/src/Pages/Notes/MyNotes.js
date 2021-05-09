import { FormControl, Grid, InputLabel } from '@material-ui/core'
import React from 'react'
import CustomContainer from '../../components/UI/Container'
import CustomTypography from '../../components/UI/Typography'
import useNoteSelector from '../../Selector/useNoteSelector'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux-saga/redux/Notes/noteSlice'
import Note from './Note'
import CustomSelect from '../../components/UI/Select'


const MyNotes = () => {
    const getFilter = useSelector((state) => state.notesReducer.filterBy);
    const notes = useNoteSelector(getFilter);
    const dispatch = useDispatch();
    const filterOptions = [
        {
            label: "All",
            value: "all"
        },
        {
            label: "Completed",
            value: "completed"
        },
        {
            label: "Incompleted",
            value: "incompleted"
        }
    ]

    const selectFilter = (e)=>{
        dispatch(setFilter(e.target.value))
    }

    return (
        <CustomContainer>
            <div style={{display: "flex"}}>
            <CustomTypography label="My Notes"  variant="h5" />
                <FormControl variant="outlined" style={{marginLeft: "auto"}}>
                    <InputLabel htmlFor="outlined-age-native-simple">Filter</InputLabel>
                    <CustomSelect options={ filterOptions } onChange={ selectFilter }/>
                </FormControl>
            </div>

            <Grid container spacing={4}>
                {
                    notes?.map(( item ) => (
                        <Note key={item.id} note={item}/>
                    ))
                }
            </Grid>
        </CustomContainer>
    )
}

export default MyNotes
