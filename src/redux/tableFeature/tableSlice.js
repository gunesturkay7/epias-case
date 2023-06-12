/* Dependencies */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleColumns: [],
  filters: {},
  options: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setVisibleColumns(state, action) {
      state.visibleColumns = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    setOptions(state, action) {
      state.options = action.payload;
    },
    toggleColumnVisibility: (state, action) => {
      const key = action.payload;
      const index = state.visibleColumns.findIndex((column) => column.key === key);

      if (index >= 0) {
        state.visibleColumns.splice(index, 1);
      } else {
        state.visibleColumns.push({ key, title: action.payload });
      }
    },
    setInitialColumns: (state, action) => {
      state.visibleColumns = action.payload;
    },
  },
});

export const { setVisibleColumns, setFilters, setOptions, toggleColumnVisibility, setInitialColumns } =
  tableSlice.actions;

export default tableSlice.reducer;
