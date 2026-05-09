import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "lang",
    initialState: {
        language: "en"
    },
    reducers: {
        toggleLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
});

export default languageSlice.reducer;

export const { toggleLanguage } = languageSlice.actions;