import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    videoItemsFromSuggestion: [],
    results: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      return { ...state, results: { ...state.results, ...action.payload } };
    },
    setVideoResultFromSuggestion: (state, action) => {
      state.videoItemsFromSuggestion = action.payload;
    },
  },
});

export const { cacheResults, setVideoResultFromSuggestion } =
  searchSlice.actions;
export default searchSlice.reducer;
