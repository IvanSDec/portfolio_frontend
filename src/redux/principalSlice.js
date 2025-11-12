import { createSlice } from '@reduxjs/toolkit';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 PRINCIPAL SLICE - ESTADO PRINCIPAL 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Define el estado inicial y los reducers para la sección principal de la UI.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
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
