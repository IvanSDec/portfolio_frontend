import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 FOOTER COMPONENT - PIE DE PÁGINA 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Mostrar información de contacto y redes sociales
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function Footer() {
	return (
		<footer className="text-white text-center relative parallax-container overflow-hidden">
			
			<div className="absolute inset-0 parallax-bg"></div>
			
			<div className="absolute inset-0 bg-black/80 z-10"></div>

			<div className="container mx-auto px-6 py-10 relative z-20">
				
				<div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-8"></div>
				
				<div className="mb-8">
					<p className="text-2xl md:text-3xl font-light text-white uppercase tracking-widest mb-2">
						Iván Sánchez
					</p>
					<p className="text-sm text-slate-400 font-mono tracking-wide">
						Desarrollo y Modelado
					</p>
				</div>

				<div className="flex justify-center gap-4 mb-8">
					<Link 
						to={'https://www.instagram.com/ivanscarrillomx/'}
						target="_blank" 
						rel="noopener noreferrer"
						className="group p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
					>
						<FaInstagram className="text-cyan-400 text-xl group-hover:text-cyan-300 transition-colors duration-300" />
					</Link>

					<Link 
						to={'https://www.facebook.com/profile.php?id=100001168921982'}
						target="_blank" 
						rel="noopener noreferrer"
						className="group p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
					>
						<CiFacebook className="text-cyan-400 text-xl group-hover:text-cyan-300 transition-colors duration-300" />
					</Link>

					<Link 
						to={'https://www.linkedin.com/in/iv%C3%A1n-s-carrillo-a92663322/'}
						target="_blank" 
						rel="noopener noreferrer"
						className="group p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
					>
						<CiLinkedin className="text-cyan-400 text-xl group-hover:text-cyan-300 transition-colors duration-300" />
					</Link>
				</div>

				<div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6"></div>

				<div className="text-slate-500 font-mono text-xs">
					<p>© 2025 Iván Sánchez. All rights reserved.</p>
					<p className="mt-2 text-slate-600">Construyendo soluciones con tecnología y eficiencia</p>
				</div>

			</div>

		</footer>
	);
};