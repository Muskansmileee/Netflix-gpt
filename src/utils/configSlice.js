import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : "appConfig",
    initialState : {
      lang : "en",
    },
    reducers: {
      addUserLanguage : (state, action) => {
        state.lang = action.payload;
      }
    }
})

export const { addUserLanguage } = configSlice.actions;
export default configSlice.reducer;