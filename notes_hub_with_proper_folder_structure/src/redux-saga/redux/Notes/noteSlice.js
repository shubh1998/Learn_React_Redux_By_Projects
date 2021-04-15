const { createSlice } = require("@reduxjs/toolkit")

const defaultNoteList = [
    {
        id: "1",
        title: "react learning sources",
        description: "see you tube various sources are avalabile.",
        note_status: true
    },
    {
        id: "2",
        title: "Learn",
        description: "Learn anything with udemy by following andrew mead.",
        note_status: false
    },
    {
        id: "3",
        title: "Alphabets",
        description: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
        note_status: false
    },
    {
        id: "4",
        title: "Frontend Technologies",
        description: "HTML, CSS, JS, AJAX, Jquery, ReactJS, Angular",
        note_status: true
    },
    {
        id: "5",
        title: "Backend Technologies",
        description: "JAVA, ROR, NODE.JS, PHP, PYTHON",
        note_status: true
    }
]

//Default Initial State
const defaultState = {
    notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : defaultNoteList,
    getNote: null,
    filterBy: "all"
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
            // console.log(action.payload)
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

        setFilter: (state, action)=>{
            return{
                ...state,
                filterBy: action.payload
            }
        },

        setTaskCompletedStatus: (state, action) =>{
            return {
                ...state,
                notes: state.notes.map((note) => 
                    (note.id === action.payload.id ? action.payload : note)
                )
            }
        }
    }
})


//Export Actions
export const {
  createNote,
  removeNote,
  removeAllNotes,
  getNoteById,
  updateNoteById,
  setFilter,
  setTaskCompletedStatus
} = noteSlice.actions;

//Export Reducer
export default noteSlice.reducer;