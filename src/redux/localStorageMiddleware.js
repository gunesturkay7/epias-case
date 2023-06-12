import { setIsSavedSize } from "./sizesSlice";

const defaultSizes = {
  parent: [70, 30],
  child1: [70, 30],
  child2: [70, 30],
};

export const localStorageMiddleware = (store) => (next) => (action) => {
  next(action);

  const { sizes } = store.getState().sizes;

  const hasChanged =
    JSON.stringify(sizes.parent) !== JSON.stringify(defaultSizes.parent) ||
    JSON.stringify(sizes.child1) !== JSON.stringify(defaultSizes.child1) ||
    JSON.stringify(sizes.child2) !== JSON.stringify(defaultSizes.child2);

  if (hasChanged && !store.getState().sizes.isSavedSize) {
    localStorage.setItem("sizes", JSON.stringify(sizes));
    localStorage.setItem("savedSizes", JSON.stringify(true));
    store.dispatch(setIsSavedSize(true));
  }
};
