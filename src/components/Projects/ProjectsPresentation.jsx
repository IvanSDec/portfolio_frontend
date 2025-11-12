/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 PROJECTS PRESENTATION COMPONENT - PRESENTACIÓN DE PROYECTOS 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Muestra el título y la descripción de la sección de proyectos.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function ProjectsPresentation() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Mis Proyectos</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Aquí puedes encontrar una selección de los proyectos en los que he trabajado. Cada uno representa un desafío único y una oportunidad de aprendizaje.
                    </p>
                </div>
            </div>
        </div>
    );
}
