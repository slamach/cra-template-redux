import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './modules/main';

export const store = configureStore({
  reducer: { main: mainReducer },
});
