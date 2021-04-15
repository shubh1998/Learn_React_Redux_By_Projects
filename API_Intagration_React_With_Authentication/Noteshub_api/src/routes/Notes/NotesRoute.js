const promiseRouter = require("express-promise-router");
const router = promiseRouter();

//------Import Midlewares--------------
const checkUserStatus = require("../../middlewares/checkUserStatus");
//----------Using passport for authentication---------
var passport = require("passport");
require("../../middlewares/passport");

const NotesManagement = require("../../controllers").NotesManagement;


/*--------Create Note Route--------------------*/
router.post('/createnote', passport.authenticate('jwt', {session: false}), checkUserStatus.isActiveUser, NotesManagement.createNote);
/*--------Update Note Details Route------------*/
router.patch('/updatenote', passport.authenticate('jwt', {session: false}), checkUserStatus.isActiveUser, NotesManagement.updateNotesDetailsById);
/*--------Get Note Details By Id Route---------*/
router.get('/notedetails/:id', passport.authenticate('jwt', {session: false}), checkUserStatus.isActiveUser, NotesManagement.getNoteDetailsById);
/*--------Delete Note Route--------------------*/
router.delete('/deletenote/:id', passport.authenticate('jwt', {session: false}), checkUserStatus.isActiveUser, NotesManagement.deleteNote);
/*--------Fetch all Notes Route----------------*/
router.get('/allnotes', passport.authenticate('jwt', {session: false}), checkUserStatus.isActiveUser, NotesManagement.fetchAllNotes);
/*--------Note Status Update Route------------*/
router.patch('/updatenotestatus', passport.authenticate('jwt', {session: false}), checkUserStatus.isActiveUser, NotesManagement.updateNoteStatus)
/*--------Delte All Notes Route------------*/
router.delete('/deleteallnotes', passport.authenticate('jwt', {session: false}), checkUserStatus.isActiveUser, NotesManagement.deleteAllNotes)


/**
  * @description - {Export the router}
*/
module.exports = router;