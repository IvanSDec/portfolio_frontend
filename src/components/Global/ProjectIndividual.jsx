/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 PROJECT INDIVIDUAL COMPONENT - COMPONENTE INDIVIDUAL DEL PROYECTO 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *   • Mostrar detalles individuales del proyecto con efectos interactivos
 *   • Efecto de cambio de imagen al pasar el ratón
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function ProjectIndividual({ project, colors, handleMouseEnter, handleMouseLeave, hovered, onViewProject }) {
  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-xl rounded-2xl border ${colors.border} shadow-2xl ${colors.shadow} overflow-hidden transform hover:scale-105 transition-all duration-300`}>
        <div className="flex justify-between items-center p-4 border-b border-slate-700/50 bg-black/20">
          <div className="flex gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${colors.led1}`}></div>
            <div className={`w-2.5 h-2.5 rounded-full ${colors.led2}`}></div>
          </div>
          <div className={`${colors.text} font-mono text-[10px] uppercase tracking-wider opacity-60`}>
            Project_{project.id.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="relative h-48 bg-black/90 m-4 rounded-lg border-2 ${colors.screen} overflow-hidden">
          <div className="absolute inset-2 rounded border border-slate-600/50 overflow-hidden">

            {hovered.id === project.id && hovered.src && (
              <img
                src={hovered.src}
                alt="arcade-gif"
                className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none z-0"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-black/70 pointer-events-none z-0"></div>

            <div className="p-4 h-full flex flex-col justify-center relative z-10">
              <h3 className={`${colors.text} text-xl font-light uppercase tracking-wide mb-2 text-center`}>
                {project.title}
              </h3>
              <div className="text-emerald-400 text-xs font-mono text-center opacity-80">
                [{project.status}]
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-30 animate-pulse"></div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className={`${colors.text} text-xs font-mono uppercase tracking-wide mb-3 opacity-80`}>
              Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-900/60 border border-slate-700/50 text-slate-300 text-xs rounded-lg font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button 
            onClick={onViewProject}
            className={`w-full bg-gradient-to-r ${colors.button} text-white py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 shadow-lg`}>
            Ver Proyecto →
          </button>
        </div>
      </div>
    </div>
  );
};