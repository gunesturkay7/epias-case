/* Dependencies */
import { configureStore } from "@reduxjs/toolkit";
import sizesReducer from "./sizesFeature/sizesSlice";
import tableReducer from "./tableFeature/tableSlice";

import { localStorageMiddleware } from "./middleware/localStorageMiddleware";
import componentAReducer from "./componentAFeature/componentASlice";
import componentCReducer from "./componentCFeature/componentCSlice";

export const store = configureStore({
  reducer: {
    sizes: sizesReducer,
    componentA: componentAReducer,
    componentC: componentCReducer,
    table: tableReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
