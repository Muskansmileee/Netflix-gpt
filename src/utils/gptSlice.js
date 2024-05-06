import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
      showGptSearch : false,
      suggestedGptMovies : null
    },
    reducers: {
      toggleGptSearchView : (state, action) => {
        state.showGptSearch = !state.showGptSearch;
      },
      addGptSuggestedMovies : (state, action) => {
        state.suggestedGptMovies = action.payload;
      },
      clearSuggestedSearchResult : (state) => {
        state.suggestedGptMovies = null;
      }
    }
})

export const { toggleGptSearchView, addGptSuggestedMovies, clearSuggestedSearchResult } = gptSlice.actions;
export default gptSlice.reducer;