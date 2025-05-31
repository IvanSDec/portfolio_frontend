/**
 * @component Admin
 * @description Componente principal del panel de administración.
 * Renderiza diferentes secciones basadas en el estado de navegación
 * almacenado en Redux. Incluye una barra de navegación y contenido
 * dinámico según la sección seleccionada.
 * 
 * @author Iván Sánchez
 * @returns {JSX.Element} Panel de administración con navegación y contenido dinámico
 */
import { useSelector } from 'react-redux';
import NavBar from "../../components/Admin/NavBar";
import WelcomeAdmin from "../../components/Admin/Welcome";
import Skills from "../../components/Admin/Skills";
import Proyects from "../../components/Admin/Proyects";
import Information from '../../components/Admin/Information';

export default function Admin () {
    /**
     * @constant {Object} principal
     * @description Estado global de Redux que controla la navegación del panel
     * @property {string} stateAdmin - Estado actual de navegación ('', 'skills', 'proyects', 'information')
     */
    const principal = useSelector((state) => state.principal);

    return(
        /**
         * @section Contenedor Principal
         * @description Contenedor del panel de administración
         * - w-full h-full: Ancho y alto completos
         * - bg-gray-400: Fondo gris
         * - min-h-[100vh]: Altura mínima de 100% del viewport
         * - pt-[10px]: Padding superior
         */
        <div className="w-full h-full bg-gray-400 min-h-[100vh] pt-[10px]">
            
            {/* 
             * @section Barra de Navegación
             * @description Componente de navegación del panel administrativo
             * Permite cambiar entre diferentes secciones
             */}
            <NavBar />

            {/* 
             * @section Contenido Dinámico
             * @description Renderizado condicional basado en el estado de navegación
             * 
             * @conditional {string} principal.stateAdmin
             * - '': Renderiza WelcomeAdmin (pantalla de bienvenida)
             * - 'skills': Renderiza Skills (gestión de habilidades)
             * - 'proyects': Renderiza Proyects (gestión de proyectos)
             * - 'information': Renderiza Information (gestión de información)
             * - otros: Renderiza componente vacío
             */}
            { 
                principal.stateAdmin === '' ? <WelcomeAdmin /> 
                : principal.stateAdmin === 'skills' ?  <Skills /> 
                : principal.stateAdmin === 'proyects' ? <Proyects /> 
                : principal.stateAdmin === 'information' ? <Information /> 
                : <></>
            }

        </div>
    );
};