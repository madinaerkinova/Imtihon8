import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import userReducer from "./reducer/user-reducer";
import { saveState } from "../lib/storage";
import likeReducer from "./reducer/like-reducer";
import {
  addProduct,
  deleteProduct,
  toggleAnmount,
  totalPriceData,
} from "./reducer/like-reducer";
import { isAnyOf } from "@reduxjs/toolkit";
const storageMiddlware = createListenerMiddleware();

storageMiddlware.startListening({
  matcher: isAnyOf(addProduct, deleteProduct, toggleAnmount),
  effect: (action, api) => {
    api.dispatch(totalPriceData());
  },
});

export const store = configureStore({
  reducer: {
    user: userReducer,
    like: likeReducer,
  },
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().prepend(storageMiddlware.middleware);
  },
});

store.subscribe(() => {
  saveState("user", store.getState().user);
  saveState("like", store.getState().like);
});
