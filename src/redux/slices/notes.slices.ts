import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NotesI {
    title: string,
    description: string,
    author: string
}

let initialState: NotesI[] = [
    {
        title: "La vie est belle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .",
        author: "marta_perez@gmail.com"
    },
    {
        title: "The streets of Paris",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .",
        author: "marta_perez@gmail.com"
    },
    {
        title: "Thailand",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .",
        author: "marta_perez@gmail.com"
    },
]


export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNoteAction: (state: any, action: any) => {
            state.push(action.payload);
        },
        deleteNoteAction: (state: any, action: any) => {
            state.splice(action.payload.id, 1);
        }
    }
})

export const { addNoteAction, deleteNoteAction } = notesSlice.actions

export default notesSlice.reducer