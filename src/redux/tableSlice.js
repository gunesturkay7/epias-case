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
        // Remove column if it's currently visible
        state.visibleColumns.splice(index, 1);
      } else {
        // Add column if it's not visible
        state.visibleColumns.push({ key, title: action.payload });
      }
    },
    setInitialColumns: (state, action) => {
      // Set initial columns
      state.visibleColumns = action.payload;
    },
  },
});

export const { setVisibleColumns, setFilters, setOptions, toggleColumnVisibility, setInitialColumns } =
  tableSlice.actions;

export default tableSlice.reducer;
