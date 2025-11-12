import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 PROJECTS NEW COMPONENT - NUEVO PROYECTO 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Muestra un modal con un formulario para crear un nuevo proyecto.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function ProjectsNew({ closeModal, selectedProject }) {
  const [isTechSelectorOpen, setIsTechSelectorOpen] = useState(false);
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [availableTechs, setAvailableTechs] = useState([]);

  useEffect(() => {
    const mockTechs = [
      "React",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "MongoDB",
      "Express",
      "Vue.js",
    ];
    setAvailableTechs(mockTechs);
  }, []);

  const toggleTech = (tech) => {
    setSelectedTechs((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-start z-[99999] p-4 pt-16 overflow-y-auto"
      onClick={closeModal}
    >
      <div
        className="bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-gray-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl w-full max-w-3xl mb-8 shadow-2xl shadow-cyan-500/20 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-700/50 bg-black/20 rounded-t-2xl">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
          </div>
          <div className="text-cyan-400/60 font-mono text-xs uppercase tracking-wider">
            New Project
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
              Crear nuevo proyecto
            </h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Nombre del proyecto
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300 placeholder-slate-600"
                placeholder="Ej: Sistema de Inventarios"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Empresa ligada
              </label>
              <select className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300">
                <option value="">Selecciona una empresa</option>
                <option>TechCorp</option>
                <option>FinanciaMX</option>
                <option>SoftPlus</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Estatus
              </label>
              <select className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300">
                <option>En proceso</option>
                <option>Terminado</option>
                <option>Descontinuado</option>
                <option>Primeras fases</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Fecha de creación
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Tiempo de desarrollo
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300 placeholder-slate-600"
                placeholder="Ej: 3 meses"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Descripción
              </label>
              <textarea
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300 h-24 resize-none placeholder-slate-600"
                placeholder="Describe el proyecto..."
              ></textarea>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Tecnologías
              </label>
              <div className="w-full p-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-mono text-sm">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedTechs.length > 0 ? (
                    selectedTechs.map((tech) => (
                      <span
                        key={tech}
                        className="bg-cyan-600/30 text-cyan-300 text-xs font-mono px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-500">
                      Ninguna tecnología seleccionada
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setIsTechSelectorOpen(!isTechSelectorOpen)}
                  className="w-full flex justify-between items-center px-4 py-2 bg-slate-800/60 hover:bg-slate-800/90 border border-slate-600 rounded-md text-slate-300 transition-all duration-300 focus:outline-none focus:border-cyan-500/50"
                >
                  <span>Administrar Tecnologías</span>
                  {isTechSelectorOpen ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                {isTechSelectorOpen && (
                  <div className="mt-3 p-3 bg-black/30 border border-slate-700 rounded-lg max-h-48 overflow-y-auto">
                    <div className="flex flex-wrap gap-2">
                      {availableTechs.map((tech) => (
                        <button
                          type="button"
                          key={tech}
                          onClick={() => toggleTech(tech)}
                          className={`text-xs font-mono px-3 py-1.5 rounded-full transition-all duration-200 border ${
                            selectedTechs.includes(tech)
                              ? "bg-cyan-500 text-white border-cyan-400"
                              : "bg-slate-700/50 hover:bg-slate-600/70 text-slate-300 border-slate-600"
                          }`}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Imagen principal
              </label>
              <input
                type="file"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-400 font-mono text-sm outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-mono file:bg-cyan-600/20 file:text-cyan-400 hover:file:bg-cyan-600/30 file:cursor-pointer"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider ml-1">
                Galería (hasta 5 imágenes)
              </label>
              <input
                type="file"
                multiple
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-400 font-mono text-sm outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-mono file:bg-cyan-600/20 file:text-cyan-400 hover:file:bg-cyan-600/30 file:cursor-pointer"
              />
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                type="button"
                onClick={closeModal}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 text-white font-mono text-sm uppercase tracking-wider border border-cyan-400/30"
              >
                Guardar proyecto
              </button>
            </div>
          </form>
        </div>

        <div className="p-4 border-t border-slate-700/50 bg-black/20 rounded-b-2xl">
          <p className="text-slate-500 font-mono text-xs text-center uppercase tracking-wider">
            Complete all fields
          </p>
        </div>
      </div>
    </div>
  );
}