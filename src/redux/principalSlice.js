import { createSlice } from '@reduxjs/toolkit';

const principalSlice = createSlice({
	name: 'principal',
	initialState: {
		open: true,
		stateAdmin: '',
	},
	reducers: {
		setOpen: (state, action) => {
			state.open = action.payload;
		},
		setStateAdmin: (state, action) => {
			state.stateAdmin = action.payload;
		},
	},
});

export const { setOpen, setStateAdmin } = principalSlice.actions;
export default principalSlice.reducer;
