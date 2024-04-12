import { configureStore } from "@reduxjs/toolkit";

import customerReducer from "./redux/customerSlice";
import usersReducer from "./redux/usersSlice";

const store = configureStore({
  reducer: {
    customers: customerReducer,
    users: usersReducer,
  },
});

export default store;
