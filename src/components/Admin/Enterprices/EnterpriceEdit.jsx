import { X } from "lucide-react";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 ENTERPRICE EDIT COMPONENT - EDITAR EMPRESA 🎨
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 🔒 FUNCIONALIDAD:
 *    • Muestra un modal para ver y editar los datos de una empresa.
 *
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
 */
export default function EnterpriceEdit({ closeModal, selectedEnterprice }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-start z-[99999] p-4 pt-16 overflow-y-auto"
      onClick={closeModal}
    >
      <div
        className="bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-gray-900/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl w-full max-w-3xl mb-8 shadow-2xl shadow-blue-500/20 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-700/50 bg-black/20 rounded-t-2xl">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
          </div>
          <div className="text-blue-400/60 font-mono text-xs uppercase tracking-wider">
            Edit Enterprice
          </div>
          <button
            onClick={closeModal}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-mono font-light uppercase tracking-wider text-white mb-2">
              Ver / Editar Empresa
            </h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Nombre
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all duration-300"
                defaultValue={selectedEnterprice.nombre}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Industria
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all duration-300"
                defaultValue={selectedEnterprice.industria}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Estatus
              </label>
              <select
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all duration-300"
                defaultValue={selectedEnterprice.estatus}
              >
                <option>Activa</option>
                <option>Inactiva</option>
                <option>En crecimiento</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Fundada
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all duration-300"
                defaultValue={selectedEnterprice.fundada}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Tamaño
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all duration-300"
                defaultValue={selectedEnterprice.tamaño}
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Descripción
              </label>
              <textarea
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all duration-300 h-24 resize-none"
                defaultValue={selectedEnterprice.descripcion}
              ></textarea>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Servicios / Productos
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all duration-300"
                defaultValue={selectedEnterprice.servicios.join(", ")}
              />
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                type="button"
                onClick={closeModal}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 text-white font-mono text-sm uppercase tracking-wider border border-blue-400/30"
              >
                Guardar cambios
              </button>
            </div>
          </form>
        </div>

        <div className="p-4 border-t border-slate-700/50 bg-black/20 rounded-b-2xl">
          <p className="text-slate-500 font-mono text-xs text-center uppercase tracking-wider">
            Editing: {selectedEnterprice.nombre}
          </p>
        </div>
      </div>
    </div>
  );
};
