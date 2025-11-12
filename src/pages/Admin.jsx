import { useSelector } from 'react-redux';
import NavBar from '../components/Admin/Layout/NavBar';
import WelcomeAdmin from "../components/Admin/WelcomeAdmin";
import Skills from "../components/Admin/Skills";
import Projects from "../components/Admin/Projects";
import Information from '../components/Admin/Information';
import MenuResponsive from '../components/Admin/Layout/MenuResponsive';
import Enterprices from '../components/Admin/Enterprices';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 ADMIN COMPONENT - PÁGINA DE ADMINISTRACIÓN 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Gestión de usuarios 
 *    • Gestión de proyectos
 *    • Gestión de habilidades
 *    • Gestión de información personal
 *    • Gestión de empresas
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function Admin() {
	const principal = useSelector((state) => state.principal);

	return (
		<div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black font-sans overflow-hidden">

			<div className="absolute inset-0 opacity-10 pointer-events-none z-0">
				<div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
				<div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
			</div>

			<NavBar />
			<MenuResponsive />

			<main className="relative z-10 pt-10 pb-10 px-2 md:px-8">
				{
					principal.stateAdmin === '' ? <div className="font-mono"><WelcomeAdmin /></div>
						: principal.stateAdmin === 'skills' ? <div className="font-mono"><Skills /></div>
							: principal.stateAdmin === 'projects' ? <div className="font-mono"><Projects /></div>
								: principal.stateAdmin === 'information' ? <div className="font-mono"><Information /></div>
									: principal.stateAdmin === 'company' ? <div className="font-mono"><Enterprices /></div>
										: <></>
				}
			</main>
		</div>
	);
};