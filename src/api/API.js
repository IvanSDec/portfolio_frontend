/**
 * @component API.js
 * @description Configuracion de APIS usadas en toda la página
 * @author Iván Sánchez
*/
import axios from "axios";
import Swal from "sweetalert2";

/* ==========================================================================
  🔑 MANEJO DE TOKEN
  ========================================================================== */
export const getToken = () => localStorage.getItem("auth_token");
export const setToken = (token) => localStorage.setItem("auth_token", token);
export const removeToken = () => localStorage.removeItem("auth_token");

/**
 * Retorna configuración de headers con token incluido
 * @param {Object} [config={}] - Configuración adicional
 * @returns {Object} Configuración completa para axios
*/
export const withAuth = (config = {}) => {
	const token = getToken();
	return {
		...config,
		headers: {
			Authorization: token ? `Bearer ${token}` : "",
			...(config.headers || {}),
		},
	};
};

/* ==========================================================================
   ⚙️ CONFIGURACIÓN GENERAL DEL CLIENTE AXIOS
   ========================================================================== */
const API = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL_API || "http://localhost:3001/api/v1",
	timeout: 15000,
});

/**
 * Muestra un error global con SweetAlert2
 * @param {Error} err - Error lanzado por Axios
*/
const showError = (err) => {
	const message =
		err.response?.data?.error ||
		err.response?.data?.message ||
		err.message ||
		"Error desconocido";
	console.error("❌ API Error:", err);
	Swal.fire({
		icon: "error",
		title: "Error",
		html: `<p style="font-size:18px;">${message}</p>`,
		timer: 4000,
		timerProgressBar: true,
	});
};

/* ==========================================================================
   🔧 CONTROLADOR DE PETICIONES
   ========================================================================== */
const handleRequest = async (promise, { swalError = true } = {}) => {
	try {
		const res = await promise;
		return res.data;
	} catch (err) {
		if (swalError) showError(err);
		throw err;
	}
};

/* ==========================================================================
   📦 ENDPOINTS ORGANIZADOS POR RECURSO
   ========================================================================== */
const APIClient = {
	auth: {
		login: async (credentials) =>
			handleRequest(API.post("/users/compare-password", credentials)),
		logout: () => {
			removeToken();
			localStorage.removeItem("user_data");
		},
	},
	user: {
		me: async () => handleRequest(API.get("/me", withAuth())),
		update: async (data) =>
			handleRequest(API.put("/user/update", data, withAuth())),
	},
};

export default APIClient;
