/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 ME PRESENTATION COMPONENT - PRESENTACIÓN SOBRE MÍ 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Muestra el título y la descripción de la sección "Sobre Mí".
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function MePresentation() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sobre Mí</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Un vistazo a mi perfil profesional, mis habilidades técnicas y las pasiones que me impulsan fuera del mundo del código.
                    </p>
                </div>
            </div>
        </div>
    );
}
