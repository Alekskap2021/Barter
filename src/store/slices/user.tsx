import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLoggedIn: false,
  token: null,
  email: null,
  name: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfileData(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    removeProfileData(state) {
      state.email = null;
      state.token = null;
    },
  },
});



export const { setProfileData, removeProfileData } = userSlice.actions;

export default userSlice.reducer;
