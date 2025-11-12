import { X, AlertTriangle } from "lucide-react";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 PROJECTS DELETE COMPONENT - ELIMINAR PROYECTO 🎨
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 🔒 FUNCIONALIDAD:
 * • Muestra un modal de confirmación para eliminar un proyecto.
 *
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
 */
export default function ProjectsDelete({ selectedProject, closeModal }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-start z-[99999] p-4 pt-24"
      onClick={closeModal}
    >
      <div
        className="bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-gray-900/95 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-red-500/20 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-700/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
          </div>
          <button
            onClick={closeModal}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
            <AlertTriangle size={32} className="text-red-400" />
          </div>
        </div>

        <h3 className="text-2xl font-mono font-light uppercase tracking-wider mb-4 text-red-400 text-center">
          Eliminar proyecto
        </h3>

        <p className="text-slate-300 mb-8 text-center font-mono text-sm leading-relaxed">
          ¿Seguro que deseas eliminar{" "}
          <span className="font-bold text-cyan-400">
            {selectedProject.nombre}
          </span>
          ? Esta acción no se puede deshacer.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={closeModal}
            className="px-6 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg hover:bg-slate-700/70 transition-all font-mono text-sm uppercase tracking-wider text-slate-300"
          >
            Cancelar
          </button>
          <button
            onClick={closeModal}
            className="px-6 py-2.5 bg-red-600/20 border border-red-500/30 rounded-lg hover:bg-red-600/30 hover:border-red-400/50 transition-all text-red-400 font-mono text-sm uppercase tracking-wider shadow-lg shadow-red-500/10 hover:shadow-red-500/20"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};