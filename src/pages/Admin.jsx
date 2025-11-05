/**
 * @component Admin
 * @description Pagina principal del administrador
 * @author Iván Sánchez
*/
import { useSelector } from 'react-redux';
import NavBar from '../components/Admin/Layout/NavBar';
import WelcomeAdmin from "../components/Admin/Welcome";
import Skills from "../components/Admin/Skills";
import Projects from "../components/Admin/Projects";
import Information from '../components/Admin/Information';
import MenuResponsive from '../components/Admin/Layout/MenuResponsive';
import Enterprices from '../components/Admin/Enterprices';

export default function Admin () {
    const principal = useSelector((state) => state.principal);

    return(

        <div className="w-full h-full bg-black min-h-[100vh] pt-[10px] pb-10 font-sans">

            <NavBar />
            <MenuResponsive />

            { 
                principal.stateAdmin === '' ? <WelcomeAdmin /> 
                : principal.stateAdmin === 'skills' ?  <Skills /> 
                : principal.stateAdmin === 'projects' ? <Projects /> 
                : principal.stateAdmin === 'information' ? <Information /> 
                : principal.stateAdmin === 'company' ? <Enterprices /> 
                : <></>
            }

        </div>
    );
};