import { useState } from "react";
import Swal from "sweetalert2";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * ✉️ PÁGINA DE CONTACTO - FORMULARIO Y ENLACES ✉️
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 🔧 FUNCIONALIDAD:
 *    • Botones para WhatsApp y LinkedIn.
 *    • Formulario que intenta enviar vía API (/api/contact).
 *    • Fallback a mailto: si el envío por API falla.
 *    • Validaciones básicas y feedback con SweetAlert2.
 *
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
 */

export default function Contact() {
	const phoneNumber = "+34123456789"; 
	const linkedInUrl = "https://www.linkedin.com/in/tu-perfil"; 
	const whatsappMessage = encodeURIComponent("Hola Iván, te contacto desde tu portafolio.");
	const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleOpenLinkedIn = () => {
		window.open(linkedInUrl, "_blank", "noopener,noreferrer");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name || !email || !message) {
			Swal.fire({
				icon: "warning",
				title: "Campos incompletos",
				text: "Por favor completa nombre, email y mensaje.",
				background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
				confirmButtonColor: "#0891b2"
			});
			return;
		}

		setLoading(true);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, message })
			});

			if (res.ok) {
				Swal.fire({
					icon: "success",
					title: "Mensaje enviado",
					text: "Gracias, te responderé pronto.",
					background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
					confirmButtonColor: "#0891b2"
				});
				setName("");
				setEmail("");
				setMessage("");
			} else {
				throw new Error("Error en servidor");
			}
		} catch (err) {
			const subject = encodeURIComponent("Contacto desde Portafolio");
			const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
			const mailto = `mailto:tu-email@ejemplo.com?subject=${subject}&body=${body}`; // reemplaza tu-email@ejemplo.com
			window.location.href = mailto;
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center p-6">
			<div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="relative bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-8 text-white">
					<h2 className="text-2xl font-light text-cyan-400 uppercase tracking-wider mb-2">Contacto</h2>
					<p className="text-slate-300 mb-6">
						Si deseas colaborar o tienes alguna consulta puedes enviarme un mensaje por WhatsApp,
						contactarme en LinkedIn o usar el formulario para enviarme un correo.
					</p>
					<div className="flex flex-col gap-3">
						<a
							href={whatsappUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 transition-colors text-white py-3 rounded-lg font-mono uppercase tracking-wider shadow-lg"
							aria-label="Enviar mensaje por WhatsApp"
						>
							<span className="font-medium">WhatsApp</span>
						</a>
						<button
							onClick={handleOpenLinkedIn}
							className="flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-600 transition-colors text-white py-3 rounded-lg font-mono uppercase tracking-wider shadow-lg"
							aria-label="Abrir LinkedIn"
						>
							<span className="font-medium">LinkedIn</span>
						</button>
					</div>
				</div>

				<div className="relative bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-8 text-white">
					<h3 className="text-xl font-light text-white uppercase tracking-wider mb-4">Envíame un mensaje</h3>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-1">Nombre</label>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-cyan-500/50 transition-all"
								placeholder="Tu nombre"
							/>
						</div>
						<div>
							<label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-1">Email</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-cyan-500/50 transition-all"
								placeholder="tu@ejemplo.com"
							/>
						</div>
						<div>
							<label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-1">Mensaje</label>
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="w-full px-4 py-3 min-h-[120px] bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-cyan-500/50 transition-all"
								placeholder="Escribe tu mensaje..."
							/>
						</div>
						<button
							type="submit"
							disabled={loading}
							className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 shadow-lg"
						>
							{loading ? "Enviando..." : "Enviar Mensaje"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}