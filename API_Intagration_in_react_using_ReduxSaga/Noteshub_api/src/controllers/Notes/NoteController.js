"use strict"

const Note = require("../../models/Note");

/**
 * @description: Create a Note
 */
const createNote = async (req, res)=>{
    try {
        if (!req.body.title) throw badRequestError(res, "Title required !");
        if (!req.body.description) throw badRequestError(res, "Description required !");
        
        const newNote = new Note({...req.body});
        await newNote.save();

        return okResponse(res, newNote, "Note created successfully !");
    } catch (error) {
        console.log(error);
    }
}


/**
 * @description: Delete a Note 
 */
const deleteNote = async (req, res) => {
    try {
        if (!req.params.id) throw badRequestError(res, "Please pass id in params !");

        const noteDelete = await Note.findOneAndDelete({ _id: req.params.id })
        if (!noteDelete) {
            throw badRequestError(res, "Note not found !");
        }
        return okResponse(res, noteDelete, "Note deleted successfully !");
    } catch (error) {
        console.log(error);
    }
}


/**
 * @description: Fetch a Note Details by id 
 */
const getNoteDetailsById = async (req, res) => {
    try {
        if (!req.params.id) throw badRequestError(res, "Please pass id in params !");

        //get note detail by id
        const noteDetails = await Note.findOne({ _id: req.params.id });
        if (!noteDetails) throw badRequestError(res, "Note not found !");

        return okResponse(res, noteDetails, "Note Details fetched successfully !");
    } catch (error) {
        console.log(error);
    }
}


/**
 * @description: Fetch all Notes 
 */
const fetchAllNotes = async (req, res) => {
    try {
        let allNotes;
        const page = req.query.page || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        //For Sorting data : -1 for desc sorting, +1 for asc Sorting
        // if(req.query.note_status != ''){
        //     allNotes = await Note.find({ note_status: req.query.note_status }).limit(limit).skip(skip).sort({createdAt: -1});
        // } else{
            allNotes = await Note.find().limit(limit).skip(skip).sort({createdAt: -1});
        // }

        return okResponse(res, allNotes, "All Notes fetched successfully !");
    } catch (error) {
        console.log(error);
    }
}


/**
 * @description: Update Note Details by id
 */
const updateNotesDetailsById = async (req, res) => {
    try {
        if (!req.body._id) throw badRequestError(res, "Please pass _id in body!");
        
        const noteUpdate = await Note.findByIdAndUpdate({_id: req.body._id}, req.body, {
            new: true
        })

        return okResponse(res, noteUpdate, "Note Details updated successfully !");        
    } catch (error) {
        console.log(error);
    }
}


/**
 * @description: Update Note Status
 */
const updateNoteStatus = async (req, res) => {
    try {
        if (!req.body._id) throw badRequestError(res, "Please pass id in body !");
        let noteStatusUpdate = await Note.findByIdAndUpdate({_id: req.body._id}, {note_status:req.body.note_status}, {
            new: true
        })
        
        if(!noteStatusUpdate) throw badRequestError(res, "Note doesn't exist !");
        return okResponse(res, noteStatusUpdate, "Note Status Updated successfully !");
    } catch (error) {
        console.log(error)
    }
}


/**
 * @description: Delete All Notes 
 */
const deleteAllNotes = async (req, res) => {
    try {
        const allNoteDelete = await Note.deleteMany();
        return okResponse(res, allNoteDelete, "Note deleted successfully !");
    } catch (error) {
        console.log(error);
    }
}


// Export the functions
module.exports = {
    createNote,
    deleteNote,
    getNoteDetailsById,
    fetchAllNotes,
    updateNotesDetailsById,
    updateNoteStatus,
    deleteAllNotes
}