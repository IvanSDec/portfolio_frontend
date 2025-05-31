/**
 * @component Menu
 * @description Componente de navegación superior fijo con efectos visuales espaciales.
 * Incluye foto de perfil, nombre con gradiente espacial, eslogan y enlaces de navegación.
 * Los enlaces activos y hover tienen un gradiente espacial personalizado con múltiples stops de color.
 * El menú se oculta automáticamente al hacer scroll hacia abajo y reaparece al hacer scroll hacia arriba.
 * 
 * @author Iván Sánchez
 * @returns {JSX.Element} Menú de navegación con efectos visuales espaciales
 */

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Definimos el gradiente espacial como una constante para reutilizarlo
const spaceGradient = "bg-[linear-gradient(to_right,#4f46e5,#06b6d4,#3b82f6,#8b5cf6,#7c3aed,#ec4899)]";

export default function Menu() {
    // Estado para controlar si el menú está oculto o visible
    const [hidden, setHidden] = useState(false);

    // Variable para almacenar la posición vertical previa del scroll
    let lastScrollY = 0;

    // Hook que permite conocer la ruta actual
    const location = useLocation();

    /**
     * Efecto que se ejecuta al montar el componente.
     * Añade un event listener al scroll para determinar la dirección
     * del mismo y ocultar o mostrar el menú según corresponda.
     */
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Oculta el menú al hacer scroll hacia abajo
                setHidden(true);
            } else {
                // Muestra el menú al hacer scroll hacia arriba
                setHidden(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        // Limpia el event listener al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /**
     * Determina si el enlace dado debe mostrarse como activo,
     * comparando la ruta actual con el path del enlace.
     * Aplica un gradiente espacial personalizado al texto para los enlaces activos.
     * 
     * @param {string} path - Ruta del enlace
     * @returns {string} - Clases CSS que marcan el enlace como activo o inactivo
     */
    const isActive = (path) =>
        location.pathname === path
            ? 'group'
            : 'text-gray-100 group';

    return (
        <menu
            className={`fixed hidden z-50 w-full h-[60px] bg-[rgba(41,41,41,0.7)] backdrop-blur-[10px] md:flex justify-between items-center px-[60px] transition-all duration-300 ${hidden ? '-top-[60px]' : 'top-0'}`}
        >
            {/* Sección izquierda: avatar, nombre con gradiente espacial y eslogan */}
            <div className='flex justify-center items-center gap-[10px]'>
                <div className='w-[50px] h-[50px] bg-black rounded-full overflow-hidden'>
                    <img
                        src="https://3decstore.s3.us-east-2.amazonaws.com/perfil.png"
                        alt="profile"
                        className='w-full h-full object-cover'
                    />
                </div>
                <h3 className={`text-md font-jura font-semibold text-transparent bg-clip-text ${spaceGradient}`}>
                    IVÁN S. CARRILLO
                </h3>
                <h3 className="text-gray-100 text-xl font-jura font-semibold"> | </h3>
                <h3 className="text-gray-100 text-md font-jura font-extrabold uppercase">
                    Código claro, resultados concretos.
                </h3>
            </div>

            {/* Sección derecha: enlaces de navegación con efectos espaciales en el texto */}
            <div className='flex justify-center items-center gap-[20px]'>
                <Link to='/' className={isActive('/')}>
                    <div className={`text-xl font-jura font-bold transition-all duration-300 group-hover:scale-110 ${location.pathname === '/' ? `text-transparent bg-clip-text ${spaceGradient}` : `group-hover:text-transparent group-hover:bg-clip-text group-hover:${spaceGradient}`}`}>
                        INICIO
                    </div>
                </Link>

                <h3 className="text-gray-100 text-xl font-jura font-bold"> | </h3>
                <Link to='/devs' className={isActive('/devs')}>
                    <div className={`text-xl font-jura font-bold transition-all duration-300 group-hover:scale-110 ${location.pathname === '/devs' ? `text-transparent bg-clip-text ${spaceGradient}` : `group-hover:text-transparent group-hover:bg-clip-text group-hover:${spaceGradient}`}`}>
                        DESARROLLOS
                    </div>
                </Link>

                <h3 className="text-gray-100 text-xl font-jura font-bold"> | </h3>
                <Link to='/experience' className={isActive('/experience')}>
                    <div className={`text-xl font-jura font-bold transition-all duration-300 group-hover:scale-110 ${location.pathname === '/experience' ? `text-transparent bg-clip-text ${spaceGradient}` : `group-hover:text-transparent group-hover:bg-clip-text group-hover:${spaceGradient}`}`}>
                        EXPERIENCIA
                    </div>
                </Link>

                <h3 className="text-gray-100 text-xl font-jura font-bold"> | </h3>
                <Link to='/me' className={isActive('/me')}>
                    <div className={`text-xl font-jura font-bold transition-all duration-300 group-hover:scale-110 ${location.pathname === '/me' ? `text-transparent bg-clip-text ${spaceGradient}` : `group-hover:text-transparent group-hover:bg-clip-text group-hover:${spaceGradient}`}`}>
                        SOBRE MI
                    </div>
                </Link>

                <h3 className="text-gray-100 text-xl font-jura font-bold"> | </h3>
                <Link to='/contact' className={isActive('/contact')}>
                    <div className={`text-xl font-jura font-bold transition-all duration-300 group-hover:scale-110 ${location.pathname === '/contact' ? `text-transparent bg-clip-text ${spaceGradient}` : `group-hover:text-transparent group-hover:bg-clip-text group-hover:${spaceGradient}`}`}>
                        CONTACTO
                    </div>
                </Link>
            </div>
        </menu>
    );
};