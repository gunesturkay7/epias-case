/* Dependencies */
import { createSlice } from "@reduxjs/toolkit";

const savedSizes = JSON.parse(localStorage.getItem("sizes"));

const initialState = {
  isSavedSize: false,
  sizes: savedSizes || {
    parent: [70, 30],
    child1: [70, 30],
    child2: [70, 30],
  },
};
const sizesSlice = createSlice({
  name: "sizes",
  initialState,
  reducers: {
    setSizes(state, action) {
      state.sizes = { ...state.sizes, ...action.payload };
    },
    setParentSizes(state, action) {
      state.sizes.parent = action.payload;
    },
    setChild1Sizes(state, action) {
      state.sizes.child1 = action.payload;
    },
    setChild2Sizes(state, action) {
      state.sizes.child2 = action.payload;
    },
    setIsSavedSize(state, action) {
      state.isSavedSize = action.payload;
    },
  },
});

export const { setSizes, setParentSizes, setChild1Sizes, setChild2Sizes, setIsSavedSize } = sizesSlice.actions;

export default sizesSlice.reducer;
