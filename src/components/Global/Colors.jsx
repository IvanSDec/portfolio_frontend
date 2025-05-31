/**
 * @file Colors.jsx
 * @description Archivo que define las constantes de colores globales utilizadas en toda la aplicación.
 * Proporciona un sistema de colores consistente para fondos, textos y bordes.
 * Utiliza clases de Tailwind CSS y valores hexadecimales personalizados.
 * 
 * @author Iván Sánchez
 */

/**
 * @section Colores de Fondo
 * @description Constantes para los colores de fondo de la aplicación
 * @constant {string} BackgroundGray - Fondo gris oscuro (#3d3d3d)
 * @constant {string} BackgroundBlack - Fondo negro puro
 * @constant {string} BackgroundGoldenLigth - Fondo negro semi-transparente con opacidad 0.4
 */
export const BackgroundGray = 'bg-[#3d3d3d]';
export const BackgroundBlack = 'bg-black';
export const BackgroundGoldenLigth = 'bg-[rgb(0,0,0,0.4)]'

/**
 * @section Colores de Texto
 * @description Constantes para los colores de texto de la aplicación
 * @constant {string} TextGolden - Texto dorado (yellow-500 de Tailwind)
 * @constant {string} TextWhite - Texto blanco puro (#FFFFFF)
 * @constant {string} TextBlack - Texto negro puro (#000000)
 */
export const TextGolden = 'text-yellow-500;'
export const TextWhite = 'text-[#FFFFFF]';
export const TextBlack = 'text-[#000000]'

/**
 * @section Colores de Borde
 * @description Constantes para los colores de borde de la aplicación
 * @constant {string} BorderGolden - Borde dorado (yellow-500 de Tailwind)
 */
export const BorderGolden = 'border-yellow-500'