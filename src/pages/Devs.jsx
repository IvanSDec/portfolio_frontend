/**
 * @component Devs
 * @description Componente que muestra la página completa de desarrollos.
 * Renderiza un banner con fondo espacial y una colección de tarjetas de proyectos.
 * Incluye un sistema de paginación que muestra 3 proyectos por página.
 * 
 * @author Iván Sánchez
 * @returns {JSX.Element} Página de desarrollos con grid de proyectos y paginación
 */
import Card from "../components/Global/Card";
import Blackout from "../components/Home/GlobalHome/Blackout";
import { useState } from "react";

// Definimos los gradientes como constantes para reutilizarlos
const spaceGradient = "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500";
const spaceGradientBg = "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20";
const spaceGradientBgHover = "bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30";

/**
 * @constant {Array} projects - Array de objetos que representan los proyectos a mostrar.
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
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww",
        gallery: [
            "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww"
        ],
        link: "https://github.com/ivansanchez-dev/portfolio",
        difficulty: 2
    },
    {
        title: "E-commerce",
        description: "Plataforma de comercio electrónico desarrollada con React, Node.js y MongoDB. Incluye autenticación de usuarios, carrito de compras, pasarela de pagos y panel de administración.",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww",
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
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww",
        gallery: [
            "/images/social.png",
            "/images/social-2.png",
            "/images/social-3.png",
            "/images/social-4.png"
        ],
        link: "https://github.com/ivansanchez-dev/social-network",
        difficulty: 5
    },
    {
        title: "Blog Personal",
        description: "Blog personal desarrollado con React y Node.js. Incluye sistema de gestión de contenido, editor de texto enriquecido, categorías y etiquetas, y sistema de comentarios.",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww",
        gallery: [
            "/images/blog.png",
            "/images/blog-2.png",
            "/images/blog-3.png",
            "/images/blog-4.png"
        ],
        link: "https://github.com/ivansanchez-dev/blog",
        difficulty: 3
    },
    {
        title: "App de Tareas",
        description: "Aplicación de gestión de tareas desarrollada con React y Firebase. Permite crear, editar y eliminar tareas, organizarlas por categorías y establecer recordatorios.",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww",
        gallery: [
            "/images/todo.png",
            "/images/todo-2.png",
            "/images/todo-3.png",
            "/images/todo-4.png"
        ],
        link: "https://github.com/ivansanchez-dev/todo-app",
        difficulty: 2
    },
    {
        title: "Clon de Spotify",
        description: "Clon de Spotify desarrollado con React y Node.js. Incluye reproductor de música, listas de reproducción, búsqueda de canciones y sistema de recomendaciones.",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww",
        gallery: [
            "/images/spotify.png",
            "/images/spotify-2.png",
            "/images/spotify-3.png",
            "/images/spotify-4.png"
        ],
        link: "https://github.com/ivansanchez-dev/spotify-clone",
        difficulty: 4
    },
    {
        title: "App del Clima",
        description: "Aplicación del clima desarrollada con React y la API de OpenWeatherMap. Muestra el pronóstico del tiempo actual y futuro, incluyendo temperatura, humedad y velocidad del viento.",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww",
        gallery: [
            "/images/weather.png",
            "/images/weather-2.png",
            "/images/weather-3.png",
            "/images/weather-4.png"
        ],
        link: "https://github.com/ivansanchez-dev/weather-app",
        difficulty: 2
    },
    {
        title: "Chat en Tiempo Real",
        description: "Aplicación de chat en tiempo real desarrollada con React, Node.js y Socket.io. Permite a los usuarios crear salas de chat, enviar mensajes y compartir archivos.",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww",
        gallery: [
            "/images/chat.png",
            "/images/chat-2.png",
            "/images/chat-3.png",
            "/images/chat-4.png"
        ],
        link: "https://github.com/ivansanchez-dev/chat-app",
        difficulty: 4
    },
    {
        title: "Juego de Memoria",
        description: "Juego de memoria desarrollado con React. Incluye diferentes niveles de dificultad, sistema de puntuación y efectos de sonido. Diseño atractivo y animaciones fluidas.",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww",
        gallery: [
            "/images/memory.png",
            "/images/memory-2.png",
            "/images/memory-3.png",
            "/images/memory-4.png"
        ],
        link: "https://github.com/ivansanchez-dev/memory-game",
        difficulty: 1
    }
];

export default function Devs () {
    // Estado para manejar la página actual
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    // Calculamos el total de páginas
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    // Obtenemos los proyectos de la página actual
    const currentProjects = projects.slice(
        (currentPage - 1) * projectsPerPage,
        currentPage * projectsPerPage
    );

    // Función para cambiar de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll suave hacia arriba cuando cambia la página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        /**
         * @section Banner Principal
         * @description Contenedor principal con imagen de fondo espacial
         * - min-h-[100vh]: Altura mínima de 100% del viewport
         * - p-10: Padding uniforme
         * - Fondo con imagen espacial y overlay oscuro
         */
        <div             
            id="banner" 
            className="relative w-full min-h-[100vh] p-10" 
            style={{ 
                backgroundImage: "url('https://docsfichas.s3.us-east-2.amazonaws.com/PORTFOLIO/space2.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            {/* Overlay oscuro para mejorar contraste y legibilidad */}
            <Blackout />
            
            {/* 
             * @section Grid de Proyectos
             * @description Contenedor flexible que muestra las cards de proyectos
             * - Responsive: columnas en móvil, filas en desktop (md:flex-row)
             * - Espaciado uniforme entre cards (gap-10)
             * - Centrado vertical y horizontal
             * - Flex-wrap para ajuste automático
             * - Padding vertical para espaciado (py-[80px])
             */}
            <div className='w-full h-auto flex items-center justify-center gap-10 flex-col md:flex-row mt-10 flex-wrap py-[80px]'>
                {currentProjects.map((project, index) => (
                    <Card 
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        gallery={project.gallery}
                        link={project.link}
                        difficulty={project.difficulty}
                        isHome={false}
                    />
                ))}
            </div>

            {/* 
             * @section Paginación
             * @description Controles de navegación entre páginas
             * - Centrado horizontal
             * - Espaciado uniforme entre botones
             * - Efectos hover con gradiente
             * - Indicador de página actual
             */}
            <div className="w-full flex justify-center items-center gap-4 mt-8 mb-8">
                {/* Botón Anterior */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === 1 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:scale-110'
                    } ${spaceGradientBg} backdrop-blur-sm border-2 border-transparent`}
                >
                    <span className={`text-transparent bg-clip-text ${spaceGradient} font-bold`}>
                        Anterior
                    </span>
                </button>

                {/* Números de página */}
                <div className="flex gap-2">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                                currentPage === index + 1
                                    ? spaceGradient
                                    : spaceGradientBg
                            } backdrop-blur-sm border-2 border-transparent hover:scale-110`}
                        >
                            <span className={`font-bold ${
                                currentPage === index + 1
                                    ? 'text-white'
                                    : 'text-transparent bg-clip-text ' + spaceGradient
                            }`}>
                                {index + 1}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Botón Siguiente */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === totalPages 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:scale-110'
                    } ${spaceGradientBg} backdrop-blur-sm border-2 border-transparent`}
                >
                    <span className={`text-transparent bg-clip-text ${spaceGradient} font-bold`}>
                        Siguiente
                    </span>
                </button>
            </div>
        </div>
    );
};