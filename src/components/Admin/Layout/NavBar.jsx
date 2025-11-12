import { useSelector, useDispatch } from 'react-redux';
import { setOpen, setStateAdmin } from '../../../redux/principalSlice';
import { useRef, useEffect } from 'react';
import { FaFolderOpen } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { IoIosInformationCircle } from "react-icons/io";
import { FaBuildingUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { ImExit } from "react-icons/im";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 NAVBAR ADMIN COMPONENT - BARRA DE NAVEGACIÓN 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Barra de navegación lateral para el panel de administración.
 *    • Es expandible y contiene los enlaces a las diferentes secciones.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function NavBar() {
	const principal = useSelector((state) => state.principal);
	const dispatch = useDispatch();
	const navRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				dispatch(setOpen(true));
			};
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [dispatch]);

	return (
		<div
			ref={navRef}
			className={`navbar ${
				principal.open ? "w-[70px]" : "w-[240px]"
			} h-[100vh] bg-gradient-to-br from-slate-900 via-gray-900 to-black border-r border-slate-700/50 shadow-2xl shadow-cyan-500/10 px-0 py-0 overflow-hidden lg:flex justify-between items-start flex-col fixed top-0 left-0 hidden`}
			style={{ transition: "width 0.3s" }}
		>
			<div className="w-full flex items-center justify-between px-5 py-6 border-b border-slate-700/40 bg-black/20">
				<button
					className="flex justify-center items-center gap-3"
					onClick={() => dispatch(setOpen(!principal.open))}
				>
					<IoMenu className="text-[25px] text-cyan-400" />
					{!principal.open && (
						<span className="text-2xl font-mono text-cyan-400/80 tracking-widest uppercase">Admin</span>
					)}
				</button>
			</div>

			<div className="navbar-content flex flex-col gap-2 w-full px-2 pt-8">
				<button
					onClick={() => principal.stateAdmin === '' ? dispatch(setStateAdmin('')) : dispatch(setStateAdmin('')) }
					className="group flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-200 font-mono text-base text-slate-300 hover:bg-cyan-600/10 hover:text-cyan-400 focus:outline-none"
				>
					<IoIosHome className="text-xl group-hover:text-cyan-400 transition" />
					{!principal.open && <span>Home</span>}
				</button>
				<button
					onClick={() => principal.stateAdmin === 'projects' ? dispatch(setStateAdmin('')) : dispatch(setStateAdmin('projects')) }
					className="group flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-200 font-mono text-base text-slate-300 hover:bg-cyan-600/10 hover:text-cyan-400 focus:outline-none"
				>
					<FaFolderOpen className="text-xl group-hover:text-cyan-400 transition" />
					{!principal.open && <span>Proyectos</span>}
				</button>
				<button
					onClick={() => principal.stateAdmin === 'skills' ? dispatch(setStateAdmin('')) : dispatch(setStateAdmin('skills')) }
					className="group flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-200 font-mono text-base text-slate-300 hover:bg-cyan-600/10 hover:text-cyan-400 focus:outline-none"
				>
					<GiSkills className="text-xl group-hover:text-cyan-400 transition" />
					{!principal.open && <span>Skills</span>}
				</button>
				<button
					onClick={() => principal.stateAdmin === 'information' ? dispatch(setStateAdmin('')) : dispatch(setStateAdmin('information')) }
					className="group flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-200 font-mono text-base text-slate-300 hover:bg-cyan-600/10 hover:text-cyan-400 focus:outline-none"
				>
					<IoIosInformationCircle className="text-xl group-hover:text-cyan-400 transition" />
					{!principal.open && <span>Información</span>}
				</button>
				<button
					onClick={() => principal.stateAdmin === 'company' ? dispatch(setStateAdmin('')) : dispatch(setStateAdmin('company')) }
					className="group flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-200 font-mono text-base text-slate-300 hover:bg-cyan-600/10 hover:text-cyan-400 focus:outline-none"
				>
					<FaBuildingUser className="text-xl group-hover:text-cyan-400 transition" />
					{!principal.open && <span>Empresas</span>}
				</button>
			</div>

			<div className="w-full px-2 pb-6 pt-8 flex flex-col gap-2">
				<button
					onClick={() => {
						localStorage.removeItem("auth_token");
						localStorage.removeItem("user_data");
						window.location.href = "/login";
					}}
					className="group flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-200 font-mono text-base text-red-400 hover:bg-red-500/10 hover:text-red-500 focus:outline-none"
				>
					<ImExit className="text-xl group-hover:text-red-500 transition" />
					{!principal.open && <span>Salir</span>}
				</button>
				{!principal.open && (
					<p className="text-xs text-slate-600 font-mono text-center mt-2">Secured Panel</p>
				)}
			</div>
		</div>
	);
};