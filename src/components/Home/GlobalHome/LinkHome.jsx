/**
 * @component LinkHome
 * @description Componente que crea un encabezado de sección con título y enlace "VER TODOS".
 * Diseñado para ser utilizado en diferentes secciones de la página de inicio,
 * proporcionando navegación y contexto visual consistente.
 * Utiliza un gradiente espacial cósmico personalizado con múltiples stops de color.
 * 
 * @author Iván Sánchez
 * @param {Object} props - Propiedades del componente
 * @param {string} props.rute - Ruta de navegación para el enlace "VER TODOS"
 * @param {string} props.title - Título de la sección
 * @param {string} props.color - Clase de color para el texto (del sistema de colores global)
 * @returns {JSX.Element} Encabezado de sección con título y enlace
 */
import { Link } from 'react-router-dom'

// Definimos los gradientes como constantes para reutilizarlos
const spaceGradient = "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500";
const spaceGradientBg = "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20";
const spaceGradientBgHover = "bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30";

export default function LinkHome ({ rute, title, color }) {
    return(
        /**
         * @section Contenedor Principal
         * @description Contenedor flexible que organiza el título y el enlace
         * - z-10: Asegura que el contenido esté por encima de otros elementos
         * - Responsive: Centrado en móvil, alineado a la izquierda en desktop
         * - mt-2 md:mt-[50px]: Margen superior responsivo
         * - flex-wrap: Permite que los elementos se ajusten en pantallas pequeñas
         */
        <div className="w-full z-10 relative bottom-0 text-center md:text-left mt-2 md:mt-[50px] flex justify-center md:justify-between items-center flex-wrap">
            {/* 
             * @section Título
             * @description Título de la sección con estilos responsivos
             * - w-1/2: Ocupa la mitad del ancho
             * - min-w-[300px]: Ancho mínimo para mantener legibilidad
             * - font-bebas: Fuente personalizada
             * - Color dinámico basado en la prop color
             */}
            <h2 className={`${color} text-[40px] md:text-[60px] mb-1 md:mb-14 font-bebas w-1/2 min-w-[300px]`}>{title}</h2>

            {/* 
             * @section Enlace
             * @description Enlace "VER TODOS" con estilos responsivos y gradiente espacial
             * - w-1/2: Ocupa la mitad del ancho
             * - Fondo transparente con gradiente espacial personalizado
             * - Texto con gradiente sólido
             * - Efecto hover con escala y transición suave
             */}
            <Link to={`${rute}`} className='w-1/2 group'>
                <div className="flex justify-center md:justify-end items-center text-xl w-full">
                    <div className="text-center text-lg md:text-xl w-fit rounded-xl px-7 py-2 transition-all duration-300 group-hover:scale-110">
                        <div className={`relative backdrop-blur-sm rounded-xl border-2 border-transparent bg-clip-padding p-[2px] transition-all duration-300 ${spaceGradientBg} group-hover:${spaceGradientBgHover}`}>
                            <div className="px-6 py-1">
                                <h3 className={`text-transparent bg-clip-text ${spaceGradient} font-bold`}>
                                    VER TODOS
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};