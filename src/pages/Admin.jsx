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
import NavBar from "../components/Admin/NavBar";
import WelcomeAdmin from "../components/Admin/Welcome";
import Skills from "../components/Admin/Skills";
import Proyects from "../components/Admin/Proyects";
import Information from '../components/Admin/Information';

export default function Admin () {
    const principal = useSelector((state) => state.principal);

    return(

        <div className="w-full h-full bg-gray-400 min-h-[100vh] pt-[10px]">

            <NavBar />

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