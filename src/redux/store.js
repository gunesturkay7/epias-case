/* Dependencies */
import { configureStore } from "@reduxjs/toolkit";
import sizesReducer from "./sizesSlice";
import componentAReducer from "./componentASlice";
import componentCReducer from "./componentCSlice";
import { localStorageMiddleware } from "./localStorageMiddleware";

export const store = configureStore({
  reducer: {
    sizes: sizesReducer,
    componentA: componentAReducer,
    componentC: componentCReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
