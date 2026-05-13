import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleShowGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        storeGptMoviesInfo: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearMovieDetails: (state) => {
            state.movieNames = null;
            state.movieResults = null;
        },
    }
});

export default gptSlice.reducer;

export const { toggleShowGptSearch, storeGptMoviesInfo, clearMovieDetails } = gptSlice.actions;