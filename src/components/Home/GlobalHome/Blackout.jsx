/**
 * @component Blackout
 * @description Componente que crea una capa de superposición oscura (overlay) para mejorar
 * la legibilidad del contenido sobre imágenes de fondo. Se utiliza principalmente en
 * banners y secciones con imágenes de fondo para asegurar que el texto sea legible.
 * 
 * @author Iván Sánchez
 * @returns {JSX.Element} Div con fondo negro semi-transparente que cubre todo el contenedor padre
 */
import { BackgroundBlack } from "../../Global/Colors";

export default function Blackout () {
    return(
        /**
         * @section Overlay
         * @description Capa de superposición con las siguientes características:
         * - absolute: Posicionamiento absoluto para cubrir todo el contenedor padre
         * - w-full h-full: Ancho y alto completos
         * - top-0 left-0: Posicionamiento desde la esquina superior izquierda
         * - opacity-[0.5]: 50% de opacidad para el efecto de superposición
         * - BackgroundBlack: Fondo negro definido en el sistema de colores global
         */
        <div className={`absolute w-full h-full top-0 left-0 opacity-[0.5] ${BackgroundBlack}`}></div>
    );
};