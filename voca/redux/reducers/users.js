import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {},
  },
  reducers: {
    ADD_USER(state, action) {
      state.users.push(action.payload);
    },
    LOGIN(state, action) {
      state.user = action.payload;
    },
    UPDATE(state, action) {
      state.users = action.payload;
    },
  },
});

export const { ADD_USER, LOGIN, UPDATE } = usersSlice.actions;

export default usersSlice.reducer;
