import { configureStore } from "@reduxjs/toolkit";
import sizesReducer from "./sizesSlice";
import componentAReducer from "./componentASlice";
import componentCReducer from "./componentCSlice";
import tableReducer from "./tableSlice";
import { localStorageMiddleware } from "./localStorageMiddleware";

export const store = configureStore({
  reducer: {
    sizes: sizesReducer,
    componentA: componentAReducer,
    componentC: componentCReducer,
    table: tableReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
