/* Dependencies */
import { createSlice } from "@reduxjs/toolkit";
/* Data */
import data from "./data.json";

const initialState = {
  data: data,
  showForm: false,
  newRow: {},
};

const componentCSlice = createSlice({
  name: "componentC",
  initialState,
  reducers: {
    toggleForm(state) {
      state.showForm = !state.showForm;
    },
    saveRow(state, action) {
      state.data.push(action.payload);
    },
    updateNewRow(state, action) {
      // Validasyon Eklnecek
      state.newRow = { ...state.newRow, ...action.payload };
    },
  },
});

export const { toggleForm, saveRow, updateNewRow } = componentCSlice.actions;

export default componentCSlice.reducer;
