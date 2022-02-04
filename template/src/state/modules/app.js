import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    example: false,
  },
  reducers: {
    setExample: (state, action) => {
      state.example = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setExample } = appSlice.actions;
