import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "roles",
  initialState: [],
  reducers: {
    addRole: (state, action) => {
      const role = {
        text: action.payload,
      };

      state.push(role);
    },
  },
});

// this is for dispatch
export const { addRole } = Slice.actions;

// this is for configureStore
export default Slice.reducer;
