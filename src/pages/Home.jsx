import HomeHobbies from "../components/Home/HomeHobbies";
import HomePresentation from "../components/Home/HomePresentation";
import HomeWork from "../components/Home/HomeWork";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 HOME COMPONENT - PÁGINA DE INICIO 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Mostrar presentación y trabajos destacados
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function Home() {
	return (
		<div>
			<HomePresentation />
			<HomeWork />
			<HomeHobbies />
		</div>
	);
}