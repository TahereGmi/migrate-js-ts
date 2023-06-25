import { createSlice } from "@reduxjs/toolkit"
import { IStarredList } from "../types"

const initialState: IStarredList = {
    starredMovies: []
}

const starredSlice = createSlice({
    name: 'starred',
    initialState,
    reducers: {
        starMovie: (state, action) => {
            state.starredMovies = [action.payload, ...state.starredMovies]
        },
        unstarMovie: (state, action) => {
            const indexOfId = state.starredMovies.findIndex(key => key.id === action.payload.id)
            state.starredMovies.splice(indexOfId, 1)
        },
        clearAllStarred: (state) => {
            state.starredMovies = []
        },
    },
})

export const { starMovie, unstarMovie, clearAllStarred } = starredSlice.actions;

export default starredSlice