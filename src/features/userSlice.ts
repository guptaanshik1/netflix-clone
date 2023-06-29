import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/UserType";

interface IInitialState {
  user: IUser | null;
}

const initialState: IInitialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
