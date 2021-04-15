const promiseRouter = require("express-promise-router");
const router = promiseRouter();
const NotesManagement = require("../../controllers").NotesManagement;


/*--------Create Note Route--------------------*/
router.post('/createnote', NotesManagement.createNote);
/*--------Update Note Details Route------------*/
router.patch('/updatenote', NotesManagement.updateNotesDetailsById);
/*--------Get Note Details By Id Route---------*/
router.get('/notedetails/:id', NotesManagement.getNoteDetailsById);
/*--------Delete Note Route--------------------*/
router.delete('/deletenote/:id', NotesManagement.deleteNote);
/*--------Fetch all Notes Route----------------*/
router.get('/allnotes', NotesManagement.fetchAllNotes);
/*--------Note Status Update Route------------*/
router.patch('/updatenotestatus', NotesManagement.updateNoteStatus)
/*--------Delte All Notes Route------------*/
router.delete('/deleteallnotes', NotesManagement.deleteAllNotes)


/**
  * @description - {Export the router}
*/
module.exports = router;