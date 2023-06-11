import { configureStore } from "@reduxjs/toolkit";
import sizesReducer from "./sizesSlice";
import componentAReducer from "./componentASlice";
import componentCReducer from "./componentCSlice";
import tableReducer from "./tableSlice";

export const store = configureStore({
  reducer: {
    sizes: sizesReducer,
    componentA: componentAReducer,
    componentC: componentCReducer,
    table: tableReducer,
  },
});
