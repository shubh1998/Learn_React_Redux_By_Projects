const { createSlice } = require("@reduxjs/toolkit")

//Default Initial State
const defaultState = {
    notes: [
        {
            id: "1",
            title: "react learning sources",
            description: "see you tube various sources are avalabile.",
            completed: true
        },
        {
            id: "2",
            title: "Learn",
            description: "Learn anything with udemy by following andrew mead.",
            completed: false
        },
        {
            id: "3",
            title: "Alphabets",
            description: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
            completed: false
        },
        {
            id: "4",
            title: "Frontend Technologies",
            description: "HTML, CSS, JS, AJAX, Jquery, ReactJS, Angular",
            completed: true
        },
        {
            id: "5",
            title: "Backend Technologies",
            description: "JAVA, ROR, NODE.JS, PHP, PYTHON",
            completed: true
        }
    ],
    getNote: null,
    filterByCompleted: null
    
}

//Create a Note Slice
const noteSlice = createSlice({
    name: "noteSlice",
    initialState: defaultState,
    reducers: {
        createNote: (state, action)=>{
            return{
                notes: [action.payload, ...state.notes]
            }
        },

        removeNote: (state, action)=>{
            return{
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        },

        getNoteById: (state, action)=>{
            let note = state.notes.filter(note => note.id === action.payload) //get object in array
            //structure object by getting it from array
            for (let values of note) {
                note = values;
            }
            return{
                ...state,
                getNote: note
            }
        },

        updateNoteById: (state, action)=>{
            console.log(action.payload)
            return{
                ...state,
                notes: state.notes.map((note) => 
                    (note.id === action.payload.id ? action.payload : note)
                )
            }
        },

        removeAllNotes: (state, action)=>{
            return{
                ...state,
                notes: []
            }
        },
    
        filterCompletedNote: (state)=>{
            return{
                ...state,
                notes: state.notes.filter(note => note.completed)
            }
        },

        filterInCompletedNote: (state)=>{
            return{
                ...state,
                notes: state.notes.filter(note => !note.completed)
            }
        },

        fetchAllNotes: (state) => {
            return state.notes
        }
    }
})


//Export Actions
export const {createNote, removeNote, removeAllNotes, getNoteById, updateNoteById, filterCompletedNote, filterInCompletedNote, fetchAllNotes} = noteSlice.actions;

//Export Reducer
export default noteSlice.reducer;