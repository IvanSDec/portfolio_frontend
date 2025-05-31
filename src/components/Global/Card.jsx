/**
 * @component Card
 * @description Componente de tarjeta interactiva con efecto flip que muestra información de un proyecto.
 * La tarjeta tiene dos caras: frontal (imagen y título) y trasera (descripción, dificultad y enlace).
 * Implementa animaciones y efectos visuales para mejorar la experiencia de usuario.
 * Comportamiento adaptativo: redirecciona en Home y muestra modal en Devs.
 * 
 * @author Iván Sánchez 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título del proyecto
 * @param {string} props.description - Descripción detallada del proyecto
 * @param {string} props.image - URL de la imagen principal del proyecto
 * @param {string} props.link - URL del enlace al proyecto
 * @param {number} props.difficulty - Nivel de dificultad del proyecto (1-5)
 * @param {boolean} props.isHome - Indica si la card se usa en la página de inicio
 * @param {Array} props.gallery - Array de URLs de imágenes del proyecto
 * 
 * @returns {JSX.Element} Tarjeta interactiva con efecto flip y comportamiento adaptativo
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

// Definimos los gradientes como constantes para reutilizarlos
const spaceGradient = "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500";
const spaceGradientBorder = "relative before:absolute before:inset-0 before:p-[2px] before:rounded-xl before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:-z-10";

export default function Card({title, description, image, link, difficulty, isHome = false, gallery = []}) {
    // Estado para controlar la visibilidad del modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Función para manejar el clic en el botón de detalles
    const handleDetailsClick = (e) => {
        if (!isHome) {
            e.preventDefault();
            setIsModalOpen(true);
        }
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        /**
         * @section Contenedor Principal
         * @description Contenedor con dimensiones responsivas:
         * - Móvil: altura fija de 350px
         * - Desktop: altura de 550px y ancho máximo de 450px
         */
        <div className="perspectiva w-full h-[350px] md:max-w-[450px] md:h-[550px]">

            {/* 
             * @section Contenedor del Efecto Flip
             * @description Contenedor que maneja la perspectiva 3D y la transición del efecto flip
             * - perspective: 1000px para el efecto 3D
             * - transition-transform: duración de 500ms para la animación
             */}
            <div className="tarjeta-flip w-full h-full relative transition-transform duration-500" style={{perspective: '1000px'}}>

                {/* 
                 * @section Contenedor Interno Flip
                 * @description Contenedor que rota para mostrar el frente o reverso
                 * - transformStyle: preserve-3d para mantener el efecto 3D
                 * - group: permite activar el efecto flip al hover
                 */}
                <div className="tarjeta-flip-inner w-full h-full transition-transform duration-500 ease-in-out group hover:rotate-y-180" style={{transformStyle: 'preserve-3d'}}>
                    
                    {/* 
                     * @section Cara Frontal
                     * @description Muestra la imagen y título del proyecto
                     * - Fondo semi-transparente (rgba(255,255,255,0.7))
                     * - Imagen ocupando 75% de la altura
                     * - Título con fuente Jura y tamaño 2xl
                     */}
                    <div className="tarjeta-flip-front absolute w-full h-full flex flex-col items-center justify-start bg-gray-700 rounded-xl shadow-lg border border-gray-900 p-5 backface-hidden">
                        <div className='w-full h-[75%] bg-gray-500 rounded-xl'>
                            <img src={image} alt="Not Found" className='w-full h-full object-cover rounded-xl' />
                        </div>
                        <h3 className="text-gray-100 text-2xl font-bold mb-2 font-jura mt-6">{title}</h3>
                    </div>

                    {/* 
                     * @section Cara Trasera
                     * @description Muestra la descripción, nivel de dificultad y botón de detalles
                     * - Fondo semi-transparente (rgba(255,255,255,0.9))
                     * - Borde amarillo para destacar
                     * - Sistema de estrellas para mostrar dificultad
                     * - Botón con gradiente y efectos hover
                     */}
                    <div className={`tarjeta-flip-back absolute w-full h-full flex flex-col items-center justify-center bg-gray-700 rounded-xl shadow-lg p-1 rotate-y-180 backface-hidden ${spaceGradientBorder}`}>
                        <div className="w-full h-full bg-gray-700 rounded-xl flex flex-col items-center justify-center p-3">
                            <p className="text-gray-100 text-center text-xl font-jura font-semibold my-4">
                                {description}
                            </p>

                            <div className="w-full h-auto flex flex-col items-center justify-end">
                                <div className="flex flex-col items-center justify-start mb-2">
                                <span className="text-[#3B82F6] font-jura font-bold text-sm mb-1">Dificultad</span>
                                <div className="flex items-center justify-center" title="Dificultad del proyecto">
                                    {[1,2,3,4,5].map((num) => {
                                        let color = "#E5E7EB"; 
                                        if ((difficulty || 0) >= num) {
                                            if ((difficulty || 0) === 5) {
                                                color = "#DC2626";
                                            } else if ((difficulty || 0) === 3 || (difficulty || 0) === 4) {
                                                color = "#FFD700";
                                            } else if ((difficulty || 0) === 1 || (difficulty || 0) === 2) {
                                                color = "#3B82F6";
                                            }
                                        }
                                        return (
                                            <svg
                                                key={num}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill={color}
                                                className="w-6 h-6"
                                            >
                                                <title>
                                                    {num <= (difficulty || 0)
                                                        ? `Estrella de dificultad ${difficulty}`
                                                        : "Estrella vacía"}
                                                </title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                                            </svg>
                                        );
                                    })}
                                </div>
                                </div>
                                {isHome ? (
                                    <Link 
                                        to="/devs"
                                        className={`mt-4 px-6 py-2 ${spaceGradient} text-white rounded-full shadow-lg font-jura font-bold text-md transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 transform-gpu`}
                                    >
                                        Ver Proyectos
                                    </Link>
                                ) : (
                                    <button 
                                        onClick={handleDetailsClick}
                                        className={`mt-4 px-6 py-2 ${spaceGradient} text-white rounded-full shadow-lg font-jura font-bold text-md transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 transform-gpu`}
                                    >
                                        Detalles
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* 
             * @section Estilos CSS
             * @description Estilos necesarios para el efecto flip:
             * - perspective: Define la profundidad del efecto 3D
             * - transform-style: preserve-3d para mantener la perspectiva
             * - backface-visibility: hidden para ocultar la cara no visible
             * - transition: Maneja la animación del flip
             * - hover: Activa la rotación al pasar el mouse
             */}
            <style>
                {`
                .tarjeta-flip { perspective: 1000px; }
                .tarjeta-flip-inner { position: relative; width: 100%; height: 100%; transition: transform 0.5s; transform-style: preserve-3d; }
                .tarjeta-flip:hover .tarjeta-flip-inner, .tarjeta-flip:focus .tarjeta-flip-inner, .group:hover .tarjeta-flip-inner { transform: rotateY(180deg); }
                .tarjeta-flip-front, .tarjeta-flip-back { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
                .tarjeta-flip-back { transform: rotateY(180deg); }
                `}
            </style>

            {/* Modal para la vista de Devs */}
            {!isHome && isModalOpen && (
                <Modal
                    title={title}
                    description={description}
                    image={image}
                    link={link}
                    difficulty={difficulty}
                    gallery={gallery}
                    handleCloseModal={handleCloseModal}
                />
            )}

        </div>

    );

};