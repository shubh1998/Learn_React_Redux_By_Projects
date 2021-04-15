const { createSlice } = require("@reduxjs/toolkit")

//Default Initial State
const defaultState = {
    notes: [],
    getNote: {},
    filterBy: "all"
}

//Create a Note Slice
const noteSlice = createSlice({
    name: "noteSlice",
    initialState: defaultState,
    reducers: {
        createNote: (state, action)=>{},

        removeNote: (state, action)=>{},

        getNoteById: (state, action)=>{},

        setNoteById: (state, action) =>{
            return {
                ...state,
                getNote: action.payload
            }
        },

        updateNoteById: (state, action)=>{return},

        removeAllNotes: (state, action)=>{},

        setFilter: (state, action)=>{
            return{
                ...state,
                filterBy: action.payload
            }
        },

        setNoteStatus: (state, action) =>{},

        getNotesList: (state, action)=>{},

        setNotesList: (state, action)=>{
            return {
                ...state,
                notes: action.payload
            }
        },

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
  setNoteStatus,
  setNotesList,
  getNotesList,
  setNoteById,
} = noteSlice.actions;

//Export Reducer
export default noteSlice.reducer;