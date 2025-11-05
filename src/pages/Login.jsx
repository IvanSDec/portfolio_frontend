import { useState, useRef, useEffect } from "react";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import APIClient, { setToken } from "../api/API";
import Swal from "sweetalert2";

/**
 * @component Login
 * @description Página de inicio de sesión responsiva con modal/panel de información.
 * - En desktop: el panel aparece a la derecha.
 * - En móviles/tablets: se abre un modal centrado.
 * - Se puede cerrar haciendo clic fuera o con el botón de cerrar.
 * @autor Iván Sánchez
 */
export default function Login() {
	const [showInfo, setShowInfo] = useState(false);
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const infoRef = useRef(null);

	// Detectar clic fuera del modal o panel
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (infoRef.current && !infoRef.current.contains(e.target)) {
				setShowInfo(false);
			}
		};

		if (showInfo) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showInfo]);

	const tryLogin = async () => {
		try {
			const res = await APIClient.auth.login({ email, password });

			if (res?.user && res?.token) {
				setToken(res.token);
				localStorage.setItem("auth_token", res?.token);
				localStorage.setItem("user_data", JSON.stringify(res.user));

				Swal.fire({
					icon: "success",
					title: "Bienvenido",
					text: `Hola ${res.user.name || res.user.email}`,
					timer: 1000,
					showConfirmButton: false,
				});

				// Redirección según rol
				if (res.user.rol === 1) {
					window.location.href = "/admin";
				} else if (res.user.rol === 2) {
					window.location.href = "/trial";
				}
			} else {
				Swal.fire({
					icon: "error",
					text: "Credenciales inválidas",
				});
			}
		} catch (err) {
			console.error("Error en login:", err);
		}
	};

	return (
		<div className="w-full h-screen bg-gray-700 flex justify-center items-center relative overflow-hidden">
			{/* Contenedor principal */}
			<div className="w-[80%] h-[80%] rounded-xl flex justify-center items-center overflow-hidden shadow-2xl relative bg-black">

				{/* Imagen de fondo */}
				<img
					src="https://wallpapers.com/images/high/dark-mountain-1920-x-1080-wallpaper-yndum713ekbn1v7d.webp"
					alt="Fondo de montañas oscuras"
					className="absolute w-full h-full object-cover opacity-70"
				/>
				<div className="absolute w-full h-full bg-black/40 backdrop-blur-sm z-[1]" />

				{/* Panel de login */}
				<form
					className="relative z-[2] w-full md:w-[60%] h-full flex justify-center items-center flex-col text-center px-5 md:px-0"
					onSubmit={(e) => {
						e.preventDefault(); // evita que la página se recargue
						tryLogin(); // llama a tu función de login
					}}
				>
					<h1 className="text-[45px] font-light text-white uppercase mb-[60px] font-sans">
						Bienvenido
					</h1>

					<p className="text-white text-[18px] font-sans">Usuario</p>
					<input
						className="w-[80%] max-w-[300px] mb-6 mt-2 outline-none border-2 border-red-900 bg-[rgba(255,255,255,0.2)] text-white text-center text-sm py-2 rounded-lg transition-all duration-500 focus:border-white focus:max-w-[350px] font-sans"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<p className="text-white text-[18px] font-sans">Contraseña</p>
					<input
						className="w-[80%] max-w-[300px] mb-6 mt-2 outline-none border-2 border-red-900 bg-[rgba(255,255,255,0.2)] text-white text-center text-sm py-2 rounded-lg transition-all duration-500 focus:border-white focus:max-w-[350px] font-sans"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						type="submit" // importante para que el form lo detecte
						className="uppercase text-white bg-black/60 border border-white py-2 px-8 rounded-full font-sans hover:bg-white hover:text-black transition"
					>
						Entrar
					</button>
				</form>


				{/* Panel lateral (solo en desktop) */}
				<AnimatePresence>
					{showInfo && (
						<motion.div
							ref={infoRef}
							initial={{ x: "100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "100%", opacity: 0 }}
							transition={{ duration: 0.4 }}
							className="hidden min1000:flex absolute right-0 top-0 w-[40%] h-full bg-black/90 text-white flex-col justify-center items-center p-10 z-[3]"
						>
							<p className="text-lg font-sans mb-6 text-center">
								Página diseñada para la administración del sitio web de{" "}
								<span className="font-bold">Iván Sánchez</span>, con la finalidad de mostrar todos los proyectos y participaciones realizadas en el ámbito profesional.
							</p>
							<p className="text-lg mb-6 font-sans text-center">
								Para ver la estructura del administrador sin ningún permiso para modificar la información mostrada en la web se puede entrar con las siguientes credenciales:
							</p>
							<p className="text-lg font-sans mb-2 text-center">
								User: <span className="font-bold font-sans">admin@admin.com</span>
							</p>
							<p className="text-lg font-sans mb-6 text-center">
								Password: <span className="font-bold font-sans">Admin@trial</span>
							</p>

							<button
								onClick={() => setShowInfo(true)}
								className="mt-4 text-white bg-gray-800 hover:bg-gray-600 transition px-6 py-2 rounded-lg"
							>
								Cerrar
							</button>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Modal móvil/tablet */}
			<AnimatePresence>
				{showInfo && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="min1000:hidden fixed inset-0 flex justify-center items-center bg-black/80 z-50 p-6"
					>
						{/* Zona clicable fuera del modal */}
						<div className="absolute inset-0" onClick={() => setShowInfo(false)}></div>

						{/* Contenedor del modal */}
						<motion.div
							ref={infoRef}
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="relative bg-gray-900 rounded-xl p-6 text-white max-w-[90%] z-10"
						>
							<p className="text-lg font-sans mb-4 text-center">
								Página diseñada para la administración del sitio web de{" "}
								<span className="font-bold">Iván Sánchez</span>.
							</p>
							<p className="text-md mb-4 font-sans text-center">
								Usuario demo: <span className="font-bold font-sans">admin@admin.com</span> <br />
								Contraseña: <span className="font-bold font-sans">Admin@trial</span>
							</p>
							<button
								onClick={() => setShowInfo(false)}
								className="w-full bg-gray-700 hover:bg-gray-600 transition py-2 rounded-lg mt-3"
							>
								Cerrar
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
