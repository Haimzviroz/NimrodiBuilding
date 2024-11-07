import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./Rolereducer";
import floorreducer from "./floorreducer";
export const store = configureStore({
  reducer: {
    // כל reducer מייצג חלק שונה של ה-state
    roleReducer,
    floorreducer,
  },
});
// נגדיר את הטיפוסים של ה-store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
