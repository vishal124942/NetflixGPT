import { createSlice } from "@reduxjs/toolkit";

const SuggestedMovies = createSlice({
  name: "suggestedMovies",
  initialState: {
    showSuggestedMovies: [],
  },
  reducers: {
    AddSuggestedMovies: (state, action) => {
      state.showSuggestedMovies.push(...action.payload);
    },
  },
});
export const { AddSuggestedMovies } = SuggestedMovies.actions;
export default SuggestedMovies.reducer;
