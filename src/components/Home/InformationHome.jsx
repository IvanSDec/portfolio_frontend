/**
 * @component InformationHome
 * @description Componente que muestra la sección de información personal y habilidades del desarrollador.
 * Incluye una presentación personal y una sección de skills con tarjetas interactivas.
 * El diseño es completamente responsivo y se adapta a diferentes tamaños de pantalla.
 * Utiliza un gradiente espacial personalizado para elementos destacados.
 * 
 * @author Iván Sánchez
 * @returns {JSX.Element} Sección de información personal y habilidades
 */
import { BackgroundGray, TextWhite } from "../Global/Colors";
import React from "react";
import SkillFlipCard from "../Global/SkillFlip";

/**
 * @constant {Array} skills
 * @description Array que contiene las habilidades técnicas y su nivel de dominio
 * @property {string} name - Nombre de la habilidad
 * @property {number} percent - Porcentaje de dominio (0-100)
 */
const skills = [
    { name: 'React', percent: 90 },
    { name: 'Python', percent: 85 },
    { name: 'Node', percent: 80 },
    { name: 'Github', percent: 95 },
    { name: 'Blender', percent: 70 },
    { name: 'HTML', percent: 95 },
    { name: 'CSS', percent: 90 },
    { name: 'SASS', percent: 80 },
    { name: 'AWS', percent: 60 },
    { name: 'DJANGO', percent: 75 },
    { name: 'Trello', percent: 80 }
];

// Definimos el gradiente espacial como una constante para reutilizarlo
const spaceGradient = "bg-[linear-gradient(to_right,#4f46e5,#06b6d4,#3b82f6,#8b5cf6,#7c3aed,#ec4899)]";

export default function InformationHome() {
    /**
     * @function randomDelay
     * @description Genera un retraso aleatorio para la animación de las tarjetas de skills
     * @returns {string} Retraso aleatorio entre 1 y 4 segundos
     */
    const randomDelay = () => `${Math.random() * 3 + 1}s`;

    return (
        /**
         * @section Contenedor Principal
         * @description Contenedor principal con diseño responsivo
         * - min-h-[100vh]: Altura mínima de 100% del viewport
         * - p-[20px] md:p-[70px]: Padding responsivo
         * - md:flex: Layout en flex para pantallas medianas
         * - BackgroundGray: Fondo gris personalizado
         */
        <div className={`w-full min-h-[100vh] p-[20px] md:p-[70px] md:flex md:items-start md:justify-between ${BackgroundGray}`}>

            {/* 
             * @section Información Personal
             * @description Sección izquierda con información personal y profesional
             * - md:w-1/2: Ancho del 50% en pantallas medianas
             * - Contiene título, nombre y descripción profesional
             * - Texto centrado en móvil, alineado a la izquierda en desktop
             */}
            <div className="w-full md:w-1/2 h-auto md:h-full">
                <div className="w-full h-auto md:max-w-[600px] mr-0">
                    <h2 className={`${TextWhite} text-[40px] md:text-[60px] mb-14 font-bebas w-full text-center md:text-start`}>Hola, mi nombre es Iván Sánchez Carrillo</h2>
                    <p className={`${TextWhite} text-md mb-4 font-jura md:max-w-[500px] text-center md:text-start`}>
                        <span className={`font-bold text-transparent bg-clip-text ${spaceGradient}`}>
                            Desarrollador Web Fullstack y artista 3D
                        </span>
                        , tengo una gran pasión por la tecnología en general, lo que provocó mi gusto y fascinación por el desarrollo de aplicaciones web y modelado 3D.
                    </p>
                    <p className={`${TextWhite} text-md mb-4 font-jura md:max-w-[500px] text-center md:text-start`}>Mi compromiso y trabajo me han llevado a colaborar en distintas empresas a lo largo de mi carrera profesional, donde he aprendido diversas tecnologías y metodologías de trabajo.</p>
                    <p className={`${TextWhite} text-md mb-4 font-jura md:max-w-[500px] text-center md:text-start`}>He participado en diferentes proyectos, siempre aportando con profesionalismo y una gran empatía para apoyar a los equipos de trabajo.</p>
                </div>
            </div>

            {/* 
             * @section Habilidades Técnicas
             * @description Sección derecha con grid de habilidades técnicas
             * - md:w-1/2: Ancho del 50% en pantallas medianas
             * - md:h-[80vh]: Altura del 80% del viewport en desktop
             * - Grid de tarjetas flip con animaciones aleatorias
             * - Título con gradiente espacial personalizado
             */}
            <div className="w-full md:w-1/2 h-auto md:h-[80vh] flex justify-end items-center flex-col">
                {/* Título de la sección de skills con gradiente espacial */}
                <div className="w-full h-auto text-center p-2">
                    <h2 className={`font-bold text-[60px] font-bebas text-transparent bg-clip-text ${spaceGradient}`}>
                        Skills
                    </h2>
                </div>

                {/* Grid de tarjetas de habilidades */}
                <div className="w-full max-w-[600px] flex flex-wrap gap-2 justify-center items-center">
                    {skills.map((skill, index) => (
                        <SkillFlipCard
                            key={index}
                            skill={skill}
                            delay={randomDelay()}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};
