/**
 * @component BannerHome
 * @description Componente que representa el banner principal de la página de inicio.
 * Incluye un fondo con efecto parallax, título principal con gradiente espacial y botón de descarga de CV.
 * El banner es completamente responsivo y se adapta a diferentes tamaños de pantalla.
 * Utiliza un gradiente espacial cósmico personalizado con múltiples stops de color.
 * 
 * @author Iván Sánchez
 * @returns {JSX.Element} Banner principal con efecto parallax y elementos interactivos
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Blackout from './GlobalHome/Blackout';

// Definimos los gradientes como constantes para reutilizarlos
const spaceGradient = "bg-[linear-gradient(to_right,#4f46e5,#06b6d4,#3b82f6,#8b5cf6,#7c3aed,#ec4899)]";
const spaceGradientBg = "bg-[linear-gradient(to_right,rgba(79,70,229,0.2),rgba(6,182,212,0.2),rgba(59,130,246,0.2),rgba(139,92,246,0.2),rgba(124,58,237,0.2),rgba(236,72,153,0.2))]";
const spaceGradientBgHover = "bg-[linear-gradient(to_right,rgba(79,70,229,0.3),rgba(6,182,212,0.3),rgba(59,130,246,0.3),rgba(139,92,246,0.3),rgba(124,58,237,0.3),rgba(236,72,153,0.3))]";

export default function BannerHome() {
    /**
     * @effect
     * @description Implementa el efecto parallax en el banner
     * - Detecta el scroll de la página
     * - Ajusta la posición del fondo basado en el scroll
     * - Limpia el event listener al desmontar el componente
     * @returns {Function} Función de limpieza que remueve el event listener
     */
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const banner = document.getElementById('banner');
            banner.style.backgroundPosition = `center ${scrollY * 0.6}px`;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        /**
         * @section Banner Principal
         * @description Contenedor principal del banner con imagen de fondo y efecto parallax
         * - min-h-[100vh]: Altura mínima de 100% del viewport
         * - p-10: Padding en todos los lados
         * - backgroundImage: Imagen de fondo de Van Gogh
         * - backgroundSize: cover para cubrir todo el espacio
         */
        <div 
            id="banner" 
            className="relative w-full min-h-[100vh] p-10" 
            style={{ 
                backgroundImage: "url('https://docsfichas.s3.us-east-2.amazonaws.com/PORTFOLIO/city.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            {/* Overlay oscuro para mejorar la legibilidad del contenido */}
            <Blackout />

            {/* 
             * @section Título Principal
             * @description Contenedor del título con diseño responsivo y gradiente espacial
             * - z-10: Asegura que el texto esté por encima del overlay
             * - md:text-left: Alineación a la izquierda en pantallas medianas
             * - font-bebas: Fuente personalizada para el título
             * - Gradiente espacial personalizado con múltiples stops de color
             */}
            <div className="z-10 relative bottom-0 text-center md:text-left mt-[50px] w-full">
                <h1 className={`md:text-[80px] font-bebas text-[50px] mt-[10px] w-full bg-clip-text text-white`}>
                    DESARROLLADOR & DISEÑADOR
                </h1>
                <h1 className={`md:text-[80px] font-bebas text-[50px] mt-[10px] w-full text-transparent bg-clip-text ${spaceGradient}`}>
                    WEB
                </h1>
            </div>

            {/* 
             * @section Botón de CV
             * @description Contenedor del botón de descarga de CV con gradiente espacial
             * - Responsive: Centrado en móvil, posicionado absolutamente en desktop
             * - md:bottom-[200px]: Posición desde abajo en desktop
             * - md:right-[250px]: Posición desde la derecha en desktop
             * - Fondo transparente con gradiente espacial personalizado
             * - Texto con gradiente sólido
             * - Efecto hover con escala y transición suave
             */}
            <div className='relative transform md:absolute md:bottom-[200px] md:right-[250px] w-full md:w-fit flex justify-center items-center'>
                <Link
                    to='https://drive.google.com/file/d/1JCQCNd1CAk8nPo00_SOoFEoCE98lPOd5/view?usp=sharing'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <div className="text-center mt-[200px] md:mt-0 text-lg md:text-2xl w-fit rounded-xl px-7 py-2 transition-all duration-300 group-hover:scale-110">
                        <div className={`relative backdrop-blur-sm rounded-xl border-2 border-transparent bg-clip-padding p-[2px] transition-all duration-300 ${spaceGradientBg} group-hover:${spaceGradientBgHover}`}>
                            <div className="px-6 py-1">
                                <h3 className={`text-transparent bg-clip-text ${spaceGradient} font-bold`}>
                                    ¡ Descarga mi CV !
                                </h3>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
};