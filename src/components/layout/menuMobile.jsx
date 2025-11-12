import { useState, useEffect } from "react";
import Arcade from "../../Icons/Arcade";
import Github from "../../Icons/Github";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 📱 MENÚ MÓVIL - COMPONENTE DE NAVEGACIÓN 📱
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 🔧 FUNCIONALIDAD:
 *    • Menú tipo "drawer" para pantallas móviles (abre desde la izquierda).
 *    • Detecta resize para ocultarse en pantallas grandes.
 *    • Incluye navegación interna y enlaces externos (GitHub).
 *    • Accesibilidad básica (aria-labels, manejo de focus implícito).
 *
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
 */

export default function MenuMobile () {
	const [open, setOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 1000 : true);

	useEffect(() => {
		const onResize = () => setIsMobile(window.innerWidth <= 1000);
		window.addEventListener("resize", onResize, { passive: true });
		return () => window.removeEventListener("resize", onResize);
	}, []);

	const pages = [
		{ name: "HOME", href: "/" },
		{ name: "PROYECTOS", href: "/projects" },
		{ name: "TRABAJOS", href: "/work" },
		{ name: "SOBRE MI", href: "/me" },
		{ name: "CONTACTO", href: "/contact" }
	];

	if (!isMobile) return null; 

	return (
		<>
			<header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-black/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl px-4 py-3 flex items-center justify-between">
				<button
					aria-label="Abrir menú"
					onClick={() => setOpen(true)}
					className="w-10 h-10 flex items-center justify-center bg-slate-800/70 border border-slate-700/50 rounded-lg text-cyan-400 hover:bg-slate-700/80 transition"
				>
					<span className="block w-5 h-0.5 bg-current rounded-sm"></span>
				</button>

				<Link to={'/'} className="flex items-center gap-2">
					<Arcade className="w-7 h-7 text-cyan-400" />
					<span className="text-cyan-400/60 font-mono text-xs uppercase tracking-wider hidden sm:block">Portafolio</span>
				</Link>
			</header>

			<div className="h-[64px]"></div>

			<AnimatePresence>
				{open && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/60 z-50"
							onClick={() => setOpen(false)}
						/>

						<motion.aside
							initial={{ x: "-100%" }}
							animate={{ x: 0 }}
							exit={{ x: "-100%" }}
							transition={{ type: "tween", duration: 0.25 }}
							className="fixed left-0 top-0 h-full w-80 bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-gray-900/95 backdrop-blur-xl border-r border-slate-700/50 shadow-2xl p-6 z-50"
						>
							<div className="flex items-center justify-between mb-6">
								<div className="flex items-center gap-2">

									<Arcade className="w-6 h-6 text-cyan-400" />
									<span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">Menú</span>
								</div>
								<button onClick={() => setOpen(false)} className="text-slate-400 px-3 py-1 rounded hover:bg-slate-700/40">Cerrar</button>
							</div>

							<nav className="flex flex-col gap-3">
								{pages.map((p) => (
									<Link
										key={p.name}
										to={p.href}
										onClick={() => setOpen(false)}
										className="px-3 py-2 rounded-lg text-white font-mono text-sm uppercase tracking-wider hover:bg-cyan-400/8 transition flex items-center justify-between"
									>
										<span>{p.name}</span>
									</Link>
								))}
							</nav>

							<div className="mt-auto pt-6 border-t border-slate-700/40">
								<a
									href="https://github.com/IvanSDec"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition mt-4"
								>
									<Github className="w-6 h-6" />
									<span className="font-mono text-sm">Github</span>
								</a>
							</div>
						</motion.aside>
					</>
				)}
			</AnimatePresence>
		</>
	);
};