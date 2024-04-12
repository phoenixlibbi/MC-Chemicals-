/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "labeeb",
      username: "phoenix",
      password: "phoenix",
      contact: "1234567890",
    },
    {
      id: 2,
      name: "admin",
      username: "admin@admin",
      password: "admin",
      contact: "9876543210",
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, username, password, contact } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.username = username;
        existingUser.password = password;
        existingUser.contact = contact;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    },
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
