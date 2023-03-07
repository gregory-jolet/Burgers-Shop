import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burgers: [],
};

export const burgersSlice = createSlice({
  name: "burgers",
  initialState,
  reducers: {
    addBurger: (state, action) => {
      state.burgers.push(action.payload);
    },
    removeBurger: (state, action) => {
        state.burgers = state.burgers.filter((burger) => burger !== action.payload);
        }
  },
});

export const { addBurger, removeBurger } = burgersSlice.actions;
export default burgersSlice.reducer;
