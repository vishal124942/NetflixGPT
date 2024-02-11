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
    RemoveSuggestedMovies: (state) => {
      state.showSuggestedMovies = [];
    },
  },
});
export const { AddSuggestedMovies, RemoveSuggestedMovies } =
  SuggestedMovies.actions;
export default SuggestedMovies.reducer;
