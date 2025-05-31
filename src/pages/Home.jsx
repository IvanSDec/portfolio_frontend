/**
 * @component Home
 * @description Componente principal que representa la página de inicio del portfolio.
 * Integra tres secciones principales: Banner, Información y Sección de Desarrollos.
 * Cada sección es un componente independiente que se combina para crear la experiencia
 * completa de la página de inicio.
 * 
 * @author Iván Sánchez
 * @returns {JSX.Element} Página de inicio con sus tres secciones principales
 */
import BannerHome from "../components/Home/BannerHome";
import InformationHome from "../components/Home/InformationHome";
import DevsHome from "../components/Home/DevsHome";

export default function Home() {

	/**
	 * @section Contenedor Principal
	 * @description Contenedor que engloba todas las secciones de la página de inicio
	 * - w-full: Ancho completo
	 * - h-auto: Altura automática basada en el contenido
	 * - overflow-hidden: Previene el scroll horizontal no deseado
	 * 
	 * @subsection Secciones
	 * 1. BannerHome: Banner principal con efecto parallax y presentación
	 * 2. InformationHome: Sección de información sobre el desarrollador
	 * 3. DevsHome: Sección de proyectos y desarrollos destacados
	 */
	return (
		
		<div className="w-full h-auto overflow-hidden">			
			<BannerHome />
			<InformationHome />
			<DevsHome />
		</div>

	);

};

