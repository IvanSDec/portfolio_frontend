/**
 * @file axios.js
 * @description Configuración global de Axios para la aplicación.
 * Define una instancia personalizada de Axios con configuraciones base
 * para todas las peticiones HTTP de la aplicación.
 * 
 * @author Iván Sánchez
 * @version 1.0.0
 */
import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axiosInstance;