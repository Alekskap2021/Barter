import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";

// config the store

const store = configureStore({
  reducer: {
    user: user,
  },
});
// export default the store
export default store;

// export the action
