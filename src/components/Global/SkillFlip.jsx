/**
 * @component SkillFlipCard
 * @description Componente de tarjeta interactiva que muestra una habilidad técnica y su nivel de dominio.
 * Implementa un efecto flip al hover que revela una barra de progreso con el porcentaje de dominio.
 * Incluye animaciones suaves y gradientes espaciales en tonos pastel para mejorar la experiencia visual.
 * 
 * @author Iván Sánchez
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.skill - Objeto que contiene la información de la habilidad
 * @param {string} props.skill.name - Nombre de la habilidad técnica
 * @param {number} props.skill.percent - Porcentaje de dominio (0-100)
 * @param {string} props.delay - Retraso para la animación inicial
 * @returns {JSX.Element} Tarjeta interactiva con efecto flip
 */
export default function SkillFlipCard({ skill, delay }) {

    return (

        /**
         * @section Contenedor Principal
         * @description Contenedor de la tarjeta con dimensiones fijas y efecto de perspectiva
         * - min-w-[90px]: Ancho mínimo para mantener legibilidad
         * - max-w-[140px]: Ancho máximo para consistencia visual
         * - h-[38px]: Altura fija para todas las tarjetas
         * - perspective: Efecto 3D para el flip
         * - animationDelay: Retraso personalizado para animación
         */
        <div
            className="skill-flip-card min-w-[90px] w-full max-w-[140px] h-[38px] perspective group"
            style={{ animationDelay: delay }}
        >

            {/* 
             * @section Contenedor Interno Flip
             * @description Contenedor que maneja la rotación 3D
             * - transformStyle: preserve-3d para mantener el efecto 3D
             * - transition-transform: Animación suave del flip
             * - duration-500: Duración de 500ms para la transición
             */}
            <div className="skill-flip-inner w-full h-full relative transition-transform duration-500" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* 
                 * @section Cara Frontal
                 * @description Muestra el nombre de la habilidad
                 * - Gradiente espacial en tonos pastel
                 * - Borde y sombra para profundidad
                 * - Fuente Jura para consistencia tipográfica
                 */}
                <div className="skill-flip-front absolute w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-200/80 via-cyan-100/80 to-blue-100/90 rounded-md shadow border border-indigo-200/50 backface-hidden">
                    <span className="font-jura text-xs text-indigo-900 font-semibold tracking-wide z-10 flex items-center gap-1">
                        {skill.name}
                    </span>
                </div>

                {/* 
                 * @section Cara Trasera
                 * @description Muestra la barra de progreso y porcentaje
                 * - Gradiente espacial inverso en tonos pastel
                 * - Barra de progreso con gradiente espacial
                 * - Porcentaje numérico en tono espacial
                 */}
                <div className="skill-flip-back absolute w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100/90 via-purple-100/80 to-pink-100/80 rounded-md shadow border border-purple-200/50 rotate-y-180 backface-hidden">
                    <div className="w-[80%] flex items-center gap-2">
                        <div className="h-2 bg-gray-100/50 rounded-full overflow-hidden flex-1">
                            <div
                                className="h-full bg-gradient-to-r from-indigo-400/80 via-purple-400/80 to-pink-400/80 rounded-full transition-all duration-500"
                                style={{ width: `${skill.percent}%` }}
                            ></div>
                        </div>
                        <span className="text-indigo-600 font-bold text-xs">{skill.percent}%</span>
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
             * - cursor: pointer para indicar interactividad
             */}
            <style>
                {`
                .skill-flip-card {
                    margin-bottom: 4px;
                    cursor: pointer;
                    perspective: 800px;
                }
                .skill-flip-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.5s;
                    transform-style: preserve-3d;
                }
                .group:hover .skill-flip-inner, .group:focus .skill-flip-inner {
                    transform: rotateY(180deg);
                }
                .skill-flip-front, .skill-flip-back {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
                .skill-flip-back {
                    transform: rotateY(180deg);
                }
                `}
            </style>

        </div>

    );

};