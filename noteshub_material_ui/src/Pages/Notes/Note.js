import React, { Fragment } from 'react'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import CustomButton from '../../components/UI/Button'
import { Avatar, Card, CardContent, CardHeader, Grid, IconButton, makeStyles } from '@material-ui/core';
import CustomTypography from '../../components/UI/Typography';
import { useDispatch } from 'react-redux';
import { getNotesList, removeNote, setNoteStatus } from '../../redux-saga/redux/Notes/noteSlice';

const useStyles = makeStyles((theme) => ({
    avatarCompleted: {
      backgroundColor: theme.palette.info.main
    },
    avatarIncompleted: {
        backgroundColor: theme.palette.warning.main
    },
    info: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.info.main,
        '&:hover':{
            color: theme.palette.common.white,
            backgroundColor: theme.palette.info.main,
        }
    },
    warning: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.warning.main,
        '&:hover':{
            color: theme.palette.common.white,
            backgroundColor: theme.palette.warning.main,
        }
    },
    cardContent: {
        display: "-webkit-box",
        overflow: "hidden",
        lineClamp: 3,
        boxOrient:"vertical",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": "vertical",
    },
}));

const Note = ({ note }) => {
    const classes = useStyles()
    const { id, status, title, note_date, description } = note;
    const dispatch = useDispatch()

    const deleteNote = (id)=>{
        dispatch(removeNote(id))
        dispatch(getNotesList());
    }

    const updateNoteStatus = (note)=>{
        let data = {...note, status: !note.status}
        dispatch(setNoteStatus(data));
        dispatch(getNotesList());
    }

    return (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={id}>
                 <Card>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={ status ? classes.avatarCompleted : classes.avatarIncompleted}>
                            {status ? "C" : "I"}
                        </Avatar>
                        }
                        action={
                        <Fragment>
                            <IconButton href={`editnote/${id}`}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={()=> deleteNote(id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Fragment>
                        }
                        title={ title }
                        subheader={ note_date }
                    />
                    <CardContent>
                        <CustomTypography variant="body2" color="textSecondary" component="p" label={ description } className={classes.cardContent} />
                        <br/>
                        <CustomButton 
                            className={status ? classes.info : classes.warning}  
                            label={status ? "Completed" : "Incompleted"} 
                            variant="contained" 
                            onClick={()=>updateNoteStatus(note)}
                        />
                    </CardContent>
                </Card>
            </Grid>
    )
}

export default Note