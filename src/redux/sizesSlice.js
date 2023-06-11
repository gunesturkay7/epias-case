import { createSlice } from "@reduxjs/toolkit";

// Check if there are sizes in localStorage
const savedSizes = JSON.parse(localStorage.getItem("sizes"));

// Use the sizes from localStorage if they exist, otherwise use default values
const initialState = savedSizes || {
  parent: [70, 30],
  child1: [70, 30],
  child2: [70, 30],
};

const sizesSlice = createSlice({
  name: "sizes",
  initialState,
  reducers: {
    setSizes(state, action) {
      return { ...state, ...action.payload };
    },
    setParentSizes(state, action) {
      state.parent = action.payload;
    },
    setChild1Sizes(state, action) {
      state.child1 = action.payload;
    },
    setChild2Sizes(state, action) {
      state.child2 = action.payload;
    },
  },
});

export const { setSizes, setParentSizes, setChild1Sizes, setChild2Sizes } = sizesSlice.actions;

export default sizesSlice.reducer;
