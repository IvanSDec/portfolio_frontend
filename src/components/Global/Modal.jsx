/**
 * @component Modal
 * @description Modal que muestra los detalles de un proyecto, incluyendo un sistema de tabs para organizar la información.
 * Incluye animaciones suaves usando Framer Motion.
 * 
 * @author Iván Sánchez
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título del proyecto
 * @param {string} props.description - Descripción del proyecto
 * @param {string} props.image - URL de la imagen principal
 * @param {string} props.link - URL del proyecto
 * @param {number} props.difficulty - Nivel de dificultad (1-5)
 * @param {Array} props.gallery - Array de URLs de imágenes del proyecto
 * @param {Function} props.handleCloseModal - Función para cerrar el modal
 * @returns {JSX.Element} Modal con sistema de tabs y detalles del proyecto
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Definimos los gradientes como constantes para reutilizarlos
const spaceGradient = "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500";
const spaceGradientBg = "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20";
const spaceGradientBgHover = "bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30";

// Definimos las tabs disponibles
const TABS = {
    INFO: 'info',
    GALLERY: 'gallery',
    NOTES: 'notes'
};

export default function Modal ({ title, description, image, link, difficulty, gallery = [], handleCloseModal }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(TABS.INFO);

    // Función para cambiar a la siguiente imagen
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Función para cambiar a la imagen anterior
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
        );
    };

    return(
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center"
            >
                {/* Overlay con blur */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={handleCloseModal}
                />
                
                {/* Contenido del Modal */}
                <motion.div 
                    initial={{ 
                        opacity: 0,
                        scale: 0.8,
                        y: 20
                    }}
                    animate={{ 
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}
                    exit={{ 
                        opacity: 0,
                        scale: 0.8,
                        y: 20
                    }}
                    transition={{ 
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                        delay: 0.1
                    }}
                    className="relative bg-gray-700 rounded-xl p-8 max-w-4xl w-full mx-4 transform h-[700px] flex flex-col"
                >
                    {/* Botón de cerrar */}
                    <motion.button
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        onClick={handleCloseModal}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 transition-colors z-10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </motion.button>

                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-3xl font-bold font-jura text-gray-100 mb-6"
                    >
                        {title}
                    </motion.div>

                    {/* Sistema de Tabs */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="w-full mb-6"
                    >
                        <div className="flex space-x-2 border-b border-gray-200">
                            {Object.entries(TABS).map(([key, value]) => (
                                <motion.button
                                    key={value}
                                    onClick={() => setActiveTab(value)}
                                    className={`px-4 py-2 font-jura font-medium text-sm relative ${
                                        activeTab === value 
                                            ? 'text-transparent bg-clip-text ' + spaceGradient
                                            : 'text-gray-100 hover:text-gray-400'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {key === 'INFO' ? 'Información General' : 
                                     key === 'GALLERY' ? 'Galería' : 'Notas'}
                                    
                                    {activeTab === value && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5"
                                            style={{
                                                background: 'linear-gradient(to right, #3B82F6, #8B5CF6, #EC4899)'
                                            }}
                                            transition={{ type: "spring", duration: 0.5 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contenido de las Tabs */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex-1 overflow-y-auto"
                        >
                            <div className="h-full">
                                {activeTab === TABS.INFO && (
                                    <div className="h-full flex flex-col justify-between">

                                        <div className='flex gap-0'>
                                            <motion.div 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="flex justify-start mt-6 mb-6"
                                            >
                                                <motion.a
                                                    href={link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`px-5 py-2 ${spaceGradient} text-white rounded-full shadow-lg font-jura font-bold transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 transform-gpu mr-5`}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Visitar Repositorio 
                                                </motion.a>
                                            </motion.div>

                                            <motion.div 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="flex justify-start mt-6 mb-6"
                                            >
                                                <motion.a
                                                    href={link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`px-5 py-2 ${spaceGradient} text-white rounded-full shadow-lg font-jura font-bold transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 transform-gpu mr-5`}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Ver en linea 
                                                </motion.a>
                                            </motion.div> 

                                            <motion.div 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="flex justify-start mt-6 mb-6"
                                            >
                                                <motion.a
                                                    href={link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`px-5 py-2 ${spaceGradient} text-white rounded-full shadow-lg font-jura font-bold transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 transform-gpu mr-5`}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Proyecto Offline 
                                                </motion.a>
                                            </motion.div> 

                                        </div>

                                        <div className="space-y-6">
                                            <motion.p 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.1 }}
                                                className="text-gray-100 text-lg font-jura"
                                            >
                                                {description}
                                            </motion.p>

                                            <motion.div 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="flex items-center space-x-2"
                                            >
                                                <span className="text-[#3B82F6] font-jura font-bold">Dificultad:</span>
                                                <div className="flex">
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
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                                                            </svg>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                                className="space-y-4"
                                            >
                                                <div className="bg-[rgba(255,255,255,0.3)] rounded-lg p-4">
                                                    <h3 className="text-lg font-jura font-bold text-gray-100 mb-2">Información Técnica</h3>
                                                    <ul className="list-disc list-inside space-y-2 text-gray-200 font-jura">
                                                        <li>Desarrollado con React y Tailwind CSS</li>
                                                        <li>Implementación de animaciones con Framer Motion</li>
                                                        <li>Diseño responsivo y optimizado para móviles</li>
                                                        <li>Sistema de rutas con React Router</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-[rgba(255,255,255,0.3)] rounded-lg p-4">
                                                    <h3 className="text-lg font-jura font-bold text-gray-100 mb-2">Características Principales</h3>
                                                    <ul className="list-disc list-inside space-y-2 text-gray-200 font-jura">
                                                        <li>Interfaz moderna y atractiva</li>
                                                        <li>Navegación intuitiva y fluida</li>
                                                        <li>Optimización de rendimiento</li>
                                                        <li>Compatibilidad con navegadores modernos</li>
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        </div>

                                    </div>
                                )}

                                {activeTab === TABS.GALLERY && (
                                    <div className="h-full flex flex-col">
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.1 }}
                                            className="relative flex-1 rounded-lg overflow-hidden group"
                                        >
                                            <img 
                                                src={gallery[currentImageIndex] || image} 
                                                alt={`${title} - Imagen ${currentImageIndex + 1}`} 
                                                className="w-full h-full object-cover transition-opacity duration-300"
                                            />

                                            {gallery.length > 1 && (
                                                <>
                                                    <motion.button
                                                        initial={{ opacity: 0, rotate: -90 }}
                                                        animate={{ opacity: 1, rotate: 0 }}
                                                        transition={{ delay: 0.3, duration: 0.3 }}
                                                        onClick={prevImage}
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30 backdrop-blur-sm"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                                                            <defs>
                                                                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                    <stop offset="0%" style={{ stopColor: '#3B82F6' }} />
                                                                    <stop offset="50%" style={{ stopColor: '#8B5CF6' }} />
                                                                    <stop offset="100%" style={{ stopColor: '#EC4899' }} />
                                                                </linearGradient>
                                                            </defs>
                                                            <path stroke="url(#arrowGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </motion.button>

                                                    <motion.button
                                                        initial={{ opacity: 0, rotate: -90 }}
                                                        animate={{ opacity: 1, rotate: 0 }}
                                                        transition={{ delay: 0.3, duration: 0.3 }}
                                                        onClick={nextImage}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30 backdrop-blur-sm"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                                                            <defs>
                                                                <linearGradient id="arrowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                    <stop offset="0%" style={{ stopColor: '#3B82F6' }} />
                                                                    <stop offset="50%" style={{ stopColor: '#8B5CF6' }} />
                                                                    <stop offset="100%" style={{ stopColor: '#EC4899' }} />
                                                                </linearGradient>
                                                            </defs>
                                                            <path stroke="url(#arrowGradient2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </motion.button>

                                                    <motion.div 
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.4, duration: 0.4 }}
                                                        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
                                                    >
                                                        {gallery.map((_, index) => (
                                                            <motion.button
                                                                key={index}
                                                                initial={{ opacity: 0, scale: 0.5 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                                                                onClick={() => setCurrentImageIndex(index)}
                                                                className="w-2 h-2 rounded-full transition-all duration-300 relative overflow-hidden"
                                                            >
                                                                <svg className="absolute inset-0 w-full h-full">
                                                                    <defs>
                                                                        <linearGradient id={`indicatorGradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                                            <stop offset="0%" style={{ stopColor: '#3B82F6' }} />
                                                                            <stop offset="50%" style={{ stopColor: '#8B5CF6' }} />
                                                                            <stop offset="100%" style={{ stopColor: '#EC4899' }} />
                                                                        </linearGradient>
                                                                    </defs>
                                                                    <circle
                                                                        cx="50%"
                                                                        cy="50%"
                                                                        r="4"
                                                                        fill={currentImageIndex === index ? "url(#indicatorGradient" + index + ")" : "rgba(255,255,255,0.5)"}
                                                                        className="transition-all duration-300"
                                                                    />
                                                                </svg>
                                                            </motion.button>
                                                        ))}
                                                    </motion.div>
                                                </>
                                            )}
                                        </motion.div>
                                    </div>
                                )}

                                {activeTab === TABS.NOTES && (
                                    <div className="h-full flex flex-col space-y-4">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                            className="space-y-4"
                                        >
                                            <div className="bg-[rgba(255,255,255,0.3)] rounded-lg p-4">
                                                <h3 className="text-lg font-jura font-bold text-gray-100 mb-2">Aprendizajes Clave</h3>
                                                <ul className="list-disc list-inside space-y-2 text-gray-200 font-jura">
                                                    <li>Mejoré mis habilidades en la gestión de estados complejos con React</li>
                                                    <li>Aprendí a implementar animaciones fluidas y profesionales</li>
                                                    <li>Desarrollé una mejor comprensión de la optimización de rendimiento</li>
                                                    <li>Gané experiencia en la creación de interfaces intuitivas</li>
                                                </ul>
                                            </div>
                                            <div className="bg-[rgba(255,255,255,0.3)] rounded-lg p-4">
                                                <h3 className="text-lg font-jura font-bold text-gray-100 mb-2">Desafíos Superados</h3>
                                                <ul className="list-disc list-inside space-y-2 text-gray-200 font-jura">
                                                    <li>Implementación de un sistema de paginación eficiente</li>
                                                    <li>Creación de un carrusel de imágenes con transiciones suaves</li>
                                                    <li>Optimización de la carga de imágenes y recursos</li>
                                                    <li>Desarrollo de un diseño verdaderamente responsivo</li>
                                                </ul>
                                            </div>
                                            <div className="bg-[rgba(255,255,255,0.3)] rounded-lg p-4">
                                                <h3 className="text-lg font-jura font-bold text-gray-100 mb-2">Reflexiones Personales</h3>
                                                <ul className="list-disc list-inside space-y-2 text-gray-200 font-jura">
                                                    <li>La importancia de la planificación en el desarrollo frontend</li>
                                                    <li>El valor de mantener un código limpio y mantenible</li>
                                                    <li>Cómo las animaciones mejoran la experiencia de usuario</li>
                                                    <li>La relevancia de la accesibilidad en el diseño web</li>
                                                </ul>
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}