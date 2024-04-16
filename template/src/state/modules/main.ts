import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMainState {
  replaceMe: number[];
}

const initialState: IMainState = {
  replaceMe: [],
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    replaceMeAction: (
      state,
      action: PayloadAction<IMainState['replaceMe']>
    ) => {
      state.replaceMe = action.payload;
    },
  },
});

export const mainReducer = mainSlice.reducer;
export const { replaceMeAction } = mainSlice.actions;
