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

/**
 * @constant {Object} axiosInstance
 * @description Instancia personalizada de Axios con configuración base
 * 
 * @property {string} baseURL - URL base para todas las peticiones
 * @property {Object} headers - Cabeceras HTTP por defecto
 * @property {string} headers['Content-Type'] - Tipo de contenido JSON
 * 
 * @note La URL base está configurada para desarrollo local.
 * En producción, deberá ser actualizada a la URL del servidor.
 */
const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axiosInstance;