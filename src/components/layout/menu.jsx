import Arcade from "../../Icons/Arcade"
import Github from "../../Icons/Github";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Menu() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const pages = [
		{ name: "HOME", href: "/" },
		{ name: "WORK", href: "/work" },
		{ name: "ABOUT ME", href: "/about" },
		{ name: "CONTACT", href: "/contact" }
	]

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
		<menu className={`bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out min-h-[70px] border-b-2 border-cyan-400/50 p-3 flex items-center justify-between shadow-2xl shadow-cyan-500/20 backdrop-blur-sm ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
			<Link
				to={'/'}
				className="text-sm group transition-all duration-300 hover:scale-110"
			>
				<Arcade 
					className="w-8 h-8 inline-block mr-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg"
				/>
			</Link>
			<div className="flex items-center justify-between gap-10">
				{
					pages.map( (page) => (
						<Link
							key={page.name}
							to={page.href}
							className="text-lg font-bold text-white cursor-pointer hover:text-cyan-400 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105 active:scale-95"
						>	
							<span className="relative z-10 drop-shadow-sm">{page.name}</span>
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
						</Link>
					))
				}
			</div>
			<Link 
				to={'https://github.com/IvanSDec'} 
				className="text-sm group transition-all duration-300 hover:scale-110"
				target="_blank" 
        rel="noopener noreferrer"
			>
				<Github className="w-8 h-8 inline-block mr-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg" />
			</Link>
		</menu>
	);
};