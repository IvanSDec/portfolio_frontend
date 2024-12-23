import { configureStore } from '@reduxjs/toolkit';
import principalSlice from './principalSlice';

const store = configureStore({
  reducer: {
    principal: principalSlice, 
  },
});

export default store;