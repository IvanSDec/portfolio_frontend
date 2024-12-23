import { createSlice } from '@reduxjs/toolkit';

const principalSlice = createSlice({
  name: 'principal',
  initialState: {
    open: true,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = principalSlice.actions;
export default principalSlice.reducer;
