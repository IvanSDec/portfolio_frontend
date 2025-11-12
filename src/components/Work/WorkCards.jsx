/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 WORK CARDS COMPONENT - TARJETAS DE TRABAJO 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Muestra tarjetas con la experiencia laboral del desarrollador.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
const jobs = [
    {
        id: 1,
        title: 'Desarrollador Frontend',
        company: 'Tech Solutions Inc.',
        date: 'Ene 2021 - Presente',
        description: 'Desarrollo y mantenimiento de aplicaciones web utilizando React y Next.js. Colaboración en equipos ágiles para entregar productos de alta calidad.',
        stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
    },
    {
        id: 2,
        title: 'Desarrollador Web Junior',
        company: 'Innovate Web Co.',
        date: 'Jun 2019 - Dic 2020',
        description: 'Creación de sitios web responsivos y optimizados para clientes de diversas industrias. Soporte técnico y resolución de incidencias.',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'WordPress'],
    },
];

export default function WorkCards() {
    return (
        <div className="pb-24 sm:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {jobs.map((job) => (
                        <div key={job.id} className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
                            <div className="flex justify-between items-center p-4 border-b border-slate-700/50 bg-black/20">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                                </div>
                                <div className="text-slate-400 font-mono text-[10px] uppercase tracking-wider opacity-60">
                                    Work_Experience_{job.id.toString().padStart(2, '0')}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                        <p className="text-md text-emerald-400">{job.company}</p>
                                    </div>
                                    <div className="text-xs font-mono text-slate-400 bg-slate-800/70 px-2 py-1 rounded border border-slate-700">
                                        {job.date}
                                    </div>
                                </div>

                                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                    {job.description}
                                </p>

                                <div>
                                    <h4 className="text-slate-300 text-xs font-mono uppercase tracking-wide mb-3 opacity-80">
                                        Tecnologías:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {job.stack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-slate-900/60 border border-slate-700/50 text-slate-300 text-xs rounded-lg font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}