import Arcade from "../../Icons/Arcade"
import Github from "../../Icons/Github";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 MENU COMPONENT - MENÚ DE NAVEGACIÓN 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Mostrar enlaces de navegación
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function Menu() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	// ocultar este menu en pantallas <= 1000px (mostrar menu mobile en su lugar)
	const [isDesktop, setIsDesktop] = useState(typeof window !== "undefined" ? window.innerWidth > 1000 : true);

	const pages = [
		{ name: "HOME", href: "/" },
		{ name: "PROYECTOS", href: "/projects" },
		{ name: "TRABAJOS", href: "/work" },
		{ name: "SOBRE MI", href: "/me" },
		{ name: "CONTACTO", href: "/contact" }
	]

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth > 1000);
		};
		window.addEventListener("resize", handleResize, { passive: true });
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (!isDesktop) return null;

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY < 10) {
				setIsVisible(true);
			} else {
				if (currentScrollY > lastScrollY) {
					setIsVisible(false);
				} else {
					setIsVisible(true);
				}
			}
			
			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollY]);

	return (
		<menu className={`bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-black/95 backdrop-blur-xl text-white fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out min-h-[70px] border-b border-slate-700/50 shadow-2xl shadow-cyan-500/10 px-6 py-4 flex items-center justify-between ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
			
			<Link
				to={'/'}
				className="group transition-all duration-300 hover:scale-110 flex items-center gap-2"
			>
				<Arcade 
					className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
				/>
				<span className="hidden md:block text-cyan-400/60 font-mono text-xs uppercase tracking-wider">
					Portafolio
				</span>
			</Link>

			<div className="flex items-center justify-center gap-2 md:gap-6">
				{
					pages.map((page) => (
						<Link
							key={page.name}
							to={page.href}
							className="text-sm md:text-base font-mono text-slate-300 cursor-pointer hover:text-cyan-400 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-cyan-400/10 uppercase tracking-wider"
						>	
							<span className="relative z-10">{page.name}</span>
							<div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
						</Link>
					))
				}
			</div>

			<Link 
				to={'https://github.com/IvanSDec'} 
				className="group transition-all duration-300 hover:scale-110"
				target="_blank" 
				rel="noopener noreferrer"
			>
				<Github className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
			</Link>
			
		</menu>
	);
};