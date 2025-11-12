import { useState, useEffect } from "react";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import APIClient, { setToken } from "../api/API";
import Swal from "sweetalert2";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 LOGIN COMPONENT - PÁGINA DE INICIO DE SESIÓN 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Autenticación de usuarios
 *    • Redirección según rol (admin/trial)
 *    • Información de credenciales demo
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function Login() {
	const [showInfo, setShowInfo] = useState(false);
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [score, setScore] = useState(0);

	useEffect(() => {
		const scoreInterval = setInterval(() => {
			setScore(prev => prev + 50);
		}, 100);

		return () => clearInterval(scoreInterval);
	}, []);

	const showSuccessAlert = (userName) => {
		Swal.fire({
			title: '<span style="color: #22d3ee; font-family: monospace; text-transform: uppercase;">✓ ACCESS GRANTED</span>',
			html: `<p style="color: #6ee7b7; font-family: monospace;">Bienvenido ${userName}</p>`,
			background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
			backdrop: 'rgba(0, 0, 0, 0.8)',
			showConfirmButton: false,
			timer: 1500,
			customClass: {
				popup: 'border-4 border-cyan-500 rounded-lg shadow-2xl shadow-cyan-500/50',
			}
		});
	};

	const showErrorAlert = () => {
		Swal.fire({
			title: '<span style="color: #f87171; font-family: monospace; text-transform: uppercase;">✗ ACCESS DENIED</span>',
			html: '<p style="color: #fca5a5; font-family: monospace;">Credenciales inválidas</p>',
			background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
			backdrop: 'rgba(0, 0, 0, 0.8)',
			confirmButtonText: 'RETRY',
			confirmButtonColor: '#0891b2',
			customClass: {
				popup: 'border-4 border-red-500 rounded-lg shadow-2xl shadow-red-500/50',
				confirmButton: 'font-mono uppercase tracking-wider border-2 border-cyan-400 px-6 py-2 rounded-lg'
			}
		});
	};

	const tryLogin = async () => {
		try {
			const res = await APIClient.auth.login({ email, password });
			if (res?.user && res?.token) {
				setToken(res.token);
				localStorage.setItem("auth_token", res?.token);
				localStorage.setItem("user_data", JSON.stringify(res.user));
				showSuccessAlert(res.user.name || res.user.email);
				setTimeout(() => {
					if (res.user.rol === 1) {
						window.location.href = "/admin";
					} else if (res.user.rol === 2) {
						window.location.href = "/trial";
					}
				}, 1500);
			} else {
				showErrorAlert();
			}
		} catch (err) {
			console.error("Error en login:", err);
			showErrorAlert();
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center p-4 overflow-hidden relative">

			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
				<div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
			</div>

			<button
				onClick={() => setShowInfo(true)}
				className="absolute top-6 right-6 z-50 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 text-cyan-400 p-3 rounded-lg transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
				aria-label="Mostrar información"
			>
				<Info size={20} />
			</button>

			<div className="relative z-10 max-w-2xl w-full">

				<div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">

					<div className="flex justify-between items-center p-6 border-b border-slate-700/50 bg-black/20">
						<div className="flex gap-2">
							<div className="w-3 h-3 rounded-full bg-red-500/70"></div>
							<div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
							<div className="w-3 h-3 rounded-full bg-green-500/70"></div>
						</div>
						<div className="text-cyan-400/60 font-mono text-xs uppercase tracking-wider">
							Admin Portal
						</div>
					</div>

					<div className="relative p-8 md:p-12">

						<div className="absolute top-4 right-4 text-slate-600 font-mono text-xs">
							{score.toString().padStart(6, '0')}
						</div>

						<form
							className="space-y-8"
							onSubmit={(e) => {
								e.preventDefault();
								tryLogin();
							}}
						>
							<div className="text-center mb-10">
								<h1 className="text-4xl md:text-5xl font-light text-white uppercase tracking-widest mb-2">
									Bienvenido
								</h1>
								<div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
							</div>

							<div className="space-y-2">
								<label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
									Usuario
								</label>
								<input
									className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300 placeholder-slate-600"
									type="text"
									placeholder="email@ejemplo.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div className="space-y-2">
								<label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
									Contraseña
								</label>
								<input
									className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300 placeholder-slate-600"
									type="password"
									placeholder="••••••••"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
							>
								Iniciar Sesión
							</button>
						</form>

					</div>

					<div className="p-4 border-t border-slate-700/50 bg-black/20">
						<p className="text-slate-500 font-mono text-xs text-center">
							Secured Connection
						</p>
					</div>

				</div>

			</div>

			<AnimatePresence>
				{showInfo && (
					<>
						<motion.div
							initial={{ x: "100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "100%", opacity: 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="hidden md:flex fixed right-0 top-0 w-[400px] h-full bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-gray-900/95 backdrop-blur-xl border-l border-slate-700/50 shadow-2xl flex-col justify-center items-center p-8 z-[100]"
						>
							<div className="space-y-6 w-full">
								<div className="text-center">
									<h3 className="text-cyan-400 text-xl font-light uppercase tracking-wider mb-2">
										Información
									</h3>
									<div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
								</div>

								<p className="text-slate-300 text-sm leading-relaxed">
									Portal de administración del sitio web de{" "}
									<span className="font-medium text-cyan-400">Iván Sánchez</span>.
								</p>

								<div className="space-y-3">
									<p className="text-slate-400 text-xs uppercase tracking-wide">
										Credenciales de prueba:
									</p>

									<div className="bg-slate-900/60 border border-slate-700/50 rounded-lg p-3">
										<p className="text-slate-500 font-mono text-xs mb-1">
											Usuario
										</p>
										<p className="text-white font-mono text-sm select-all">
											admin@admin.com
										</p>
									</div>

									<div className="bg-slate-900/60 border border-slate-700/50 rounded-lg p-3">
										<p className="text-slate-500 font-mono text-xs mb-1">
											Contraseña
										</p>
										<p className="text-white font-mono text-sm select-all">
											Admin@trial
										</p>
									</div>
								</div>
							</div>

							<button
								onClick={() => setShowInfo(false)}
								className="mt-8 w-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 text-slate-300 py-2.5 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300"
							>
								Cerrar
							</button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="md:hidden fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm z-[100] p-6"
						>
							<motion.div
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.9, opacity: 0 }}
								transition={{ duration: 0.2 }}
								className="relative bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-gray-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 text-white max-w-[90%] shadow-2xl"
							>
								<h3 className="text-cyan-400 text-lg font-light uppercase tracking-wider mb-4 text-center">
									Información
								</h3>
								<p className="text-slate-300 text-sm mb-4 text-center">
									Portal de administración de <span className="font-medium text-cyan-400">Iván Sánchez</span>.
								</p>

								<div className="bg-slate-900/60 border border-slate-700/50 rounded-lg p-3 mb-2">
									<p className="text-slate-500 font-mono text-xs">
										User: <span className="font-medium text-white select-all">admin@admin.com</span>
									</p>
								</div>

								<div className="bg-slate-900/60 border border-slate-700/50 rounded-lg p-3 mb-4">
									<p className="text-slate-500 font-mono text-xs">
										Pass: <span className="font-medium text-white select-all">Admin@trial</span>
									</p>
								</div>

								<button
									onClick={() => setShowInfo(false)}
									className="w-full bg-slate-800/80 border border-slate-600 py-2.5 rounded-lg font-mono text-sm uppercase transition-all"
								>
									Cerrar
								</button>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>

		</div>
	);
}
