import ProjectsPresentation from "../components/Projects/ProjectsPresentation";
import ProjectCards from "../components/Projects/ProjectCards";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 PROJECTS COMPONENT - PÁGINA DE PROYECTOS 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Mostrar presentación y tarjetas de proyectos
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <ProjectsPresentation />
      <ProjectCards />
    </div>
  );
}