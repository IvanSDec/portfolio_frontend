/**
 * @component Footer
 * @description Componente que representa el pie de página de la aplicación.
 * Incluye información de copyright, enlaces a redes sociales y un lema.
 * Los iconos de redes sociales tienen un efecto interactivo que combina:
 * - Un gradiente espacial (azul-morado-rosa) que aparece al hover
 * - Una animación de escala suave
 * - Transiciones fluidas en todos los efectos
 * 
 * @author Iván Sánchez
 * @returns {JSX.Element} Pie de página con información de contacto y redes sociales
 */
import { BackgroundGray } from "../Global/Colors";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer () {
    return(
        /**
         * @section Footer Principal
         * @description Contenedor principal del pie de página
         * - text-white: Color de texto blanco
         * - text-center: Alineación centrada del contenido
         * - p-6: Padding en todos los lados
         * - BackgroundGray: Fondo gris del sistema de colores global
         */
        <footer className={` text-white text-center p-6 ${BackgroundGray}`}>
            {/* 
             * @section Contenedor de Contenido
             * @description Contenedor con ancho máximo y centrado
             * - container: Ancho máximo responsivo
             * - mx-auto: Centrado horizontal
             */}
            <div className="container mx-auto">
                {/* 
                 * @section Copyright
                 * @description Información de copyright y derechos
                 * - text-lg: Tamaño de texto grande
                 * - font-semibold: Peso de fuente semi-negrita
                 */}
                <p className="text-lg font-semibold">© 2025 Iván Sánchez — Desarrollo y Modelado</p>
                
                {/* 
                 * @section Redes Sociales
                 * @description Contenedor de enlaces a redes sociales con efectos interactivos
                 * 
                 * @structure
                 * Cada enlace contiene:
                 * 1. Un contenedor con posicionamiento relativo y grupo
                 * 2. Un div absoluto con el gradiente espacial
                 * 3. El icono con posicionamiento relativo
                 * 
                 * @effects
                 * - Gradiente espacial: Aparece al hover (opacity-0 a opacity-100)
                 * - Escala del icono: Aumenta ligeramente al hover (scale-110)
                 * - Transiciones: Duración de 300ms para todos los efectos
                 * 
                 * @gradient
                 * Colores del gradiente espacial:
                 * - Inicio: Azul (from-blue-500)
                 * - Medio: Morado (via-purple-500)
                 * - Final: Rosa (to-pink-500)
                 * 
                 * @note Todos los enlaces se abren en nueva pestaña con seguridad
                 * @note Los iconos mantienen su visibilidad sobre el gradiente
                 */}
                <div className="flex justify-center gap-4 mt-3">
                    <Link 
                        to={'https://www.instagram.com/ivanscarrillomx/'}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        <FaInstagram className="relative text-white text-2xl transition-transform duration-300 group-hover:scale-110" />
                    </Link>

                    <Link 
                        to={'https://www.facebook.com/profile.php?id=100001168921982'}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        <CiFacebook className="relative text-white text-2xl transition-transform duration-300 group-hover:scale-110" />
                    </Link>

                    <Link 
                        to={'https://x.com/IvnSnch64591889'}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        <FaSquareXTwitter className="relative text-white text-2xl transition-transform duration-300 group-hover:scale-110" />
                    </Link>
                </div>
                
                {/* 
                 * @section Lema
                 * @description Frase descriptiva de la empresa
                 * - mt-3: Margen superior
                 * - text-sm: Tamaño de texto pequeño
                 * - opacity-70: Opacidad reducida para énfasis visual
                 */}
                <p className="mt-3 text-sm opacity-70">Construyendo soluciones con tecnología y eficiencia.</p>
            </div>
        </footer>
    );
};