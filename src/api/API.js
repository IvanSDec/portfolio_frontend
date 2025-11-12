import axios from "axios";
import Swal from "sweetalert2";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 API CLIENT - CONFIGURACIÓN DE API 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Configura el cliente Axios para las peticiones a la API.
 *    • Maneja la autenticación (tokens) y los errores de forma centralizada.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export const getToken = () => localStorage.getItem("auth_token");
export const setToken = (token) => localStorage.setItem("auth_token", token);
export const removeToken = () => localStorage.removeItem("auth_token");

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

const API = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL_API || "http://localhost:3001/api/v1",
	timeout: 15000,
});

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

const handleRequest = async (promise, { swalError = true } = {}) => {
	try {
		const res = await promise;
		return res.data;
	} catch (err) {
		if (swalError) showError(err);
		throw err;
	}
};

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
