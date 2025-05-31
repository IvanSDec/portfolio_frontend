/**
 * @component DevsHome
 * @description Componente principal que muestra la sección de desarrollos en la página de inicio.
 * Renderiza un banner con efecto de parallax y una colección de tarjetas de proyectos.
 * 
 * @author Iván Sánchez 
 * @returns {JSX.Element} Componente DevsHome con banner y cards de proyectos
 */
import React, { useEffect } from 'react';
import LinkHome from './GlobalHome/LinkHome';
import { TextWhite } from '../Global/Colors';
import Blackout from './GlobalHome/Blackout';
import Card from '../Global/Card';

/**
 * @constant {Array} projects - Array de objetos que representan los proyectos destacados a mostrar en la página de inicio.
 * Cada proyecto contiene información detallada incluyendo título, descripción, imágenes y enlaces.
 * @type {Array<{
 *   title: string,
 *   description: string,
 *   image: string,
 *   gallery: string[],
 *   link: string,
 *   difficulty: number
 * }>}
 */
const projects = [
    {
        title: "Portfolio Personal",
        description: "Portfolio personal desarrollado con React y Tailwind CSS. Incluye secciones de proyectos, habilidades, experiencia y contacto. Diseño moderno y responsivo con animaciones y efectos visuales.",
        image: "/images/portfolio.png",
        gallery: [
            "/images/portfolio.png",
            "/images/portfolio-2.png",
            "/images/portfolio-3.png",
            "/images/portfolio-4.png"
        ],
        link: "https://github.com/ivansanchez-dev/portfolio",
        difficulty: 3
    },
    {
        title: "E-commerce",
        description: "Plataforma de comercio electrónico desarrollada con React, Node.js y MongoDB. Incluye autenticación de usuarios, carrito de compras, pasarela de pagos y panel de administración.",
        image: "/images/ecommerce.png",
        gallery: [
            "/images/ecommerce.png",
            "/images/ecommerce-2.png",
            "/images/ecommerce-3.png",
            "/images/ecommerce-4.png"
        ],
        link: "https://github.com/ivansanchez-dev/ecommerce",
        difficulty: 4
    },
    {
        title: "Red Social",
        description: "Red social desarrollada con React, Node.js y MongoDB. Permite a los usuarios crear perfiles, publicar contenido, seguir a otros usuarios y interactuar mediante likes y comentarios.",
        image: "/images/social.png",
        gallery: [
            "/images/social.png",
            "/images/social-2.png",
            "/images/social-3.png",
            "/images/social-4.png"
        ],
        link: "https://github.com/ivansanchez-dev/social-network",
        difficulty: 5
    }
];

export default function DevsHome () {   
    /**
     * @effect
     * @description Maneja el efecto de parallax en el banner secundario.
     * Actualiza la posición del fondo basado en el scroll de la página.
     * Se ejecuta al montar el componente y limpia el event listener al desmontar.
     */
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const secundary_banner = document.getElementById('secundary_banner');
            secundary_banner.style.backgroundPosition = `center ${scrollY * 0.6}px`;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        /**
         * @section Banner Secundario
         * @description Contenedor principal con imagen de fondo y efecto parallax
         * - Utiliza una imagen de fondo de Unsplash
         * - Implementa un efecto de parallax mediante scroll
         * - Incluye un overlay oscuro (Blackout) para mejorar la legibilidad
         */
        <div 
            id="secundary_banner" 
            className="relative w-full min-h-[100vh] p-10 h-auto" 
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            {/* Overlay oscuro para mejorar contraste y legibilidad */}
            <Blackout />

            {/* Enlace de navegación a la sección de desarrollos */}
            <LinkHome
                rute={'/devs'}
                title={'Top, desarrollos'}
                color={TextWhite}
            />

            {/* 
             * @section Grid de Proyectos
             * @description Contenedor flexible que muestra las cards de proyectos
             * - Responsive: columnas en móvil, filas en desktop (md:flex-row)
             * - Espaciado uniforme entre cards (gap-4)
             * - Centrado vertical y horizontal
             * - Margen superior para separación (mt-10)
             */}
            <div className='w-full h-auto flex items-center justify-center gap-4 flex-col md:flex-row mt-10'>
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        gallery={project.gallery}
                        link={project.link}
                        difficulty={project.difficulty}
                        isHome={true}
                    />
                ))}
            </div>
        </div>
    );
};