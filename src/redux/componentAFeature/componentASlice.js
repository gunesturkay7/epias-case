/* Dependencies */
import { createSlice } from "@reduxjs/toolkit";

/* Data */
import data from "./data.json";

const initialState = {
  data: data,
};

const ComponentASlice = createSlice({
  name: "componentA",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateData } = ComponentASlice.actions;
export default ComponentASlice.reducer;
