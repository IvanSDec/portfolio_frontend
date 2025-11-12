import { Eye, Trash2 } from "lucide-react";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 PROJECTS TABLE COMPONENT - TABLA DE PROYECTOS 🎨
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 🔒 FUNCIONALIDAD:
 * • Muestra una tabla con la lista de proyectos.
 * • Proporciona botones para ver/editar y eliminar cada proyecto.
 *
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
 */
export default function ProjectsTable({ projects, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-full border border-cyan-500/30 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/10">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-cyan-500/30">
            <tr>
              <th className="p-4 font-mono text-xs uppercase tracking-wider text-cyan-400">
                Imagen
              </th>
              <th className="p-4 font-mono text-xs uppercase tracking-wider text-cyan-400">
                Nombre
              </th>
              <th className="p-4 font-mono text-xs uppercase tracking-wider text-cyan-400">
                Empresa
              </th>
              <th className="p-4 font-mono text-xs uppercase tracking-wider text-cyan-400">
                Estatus
              </th>
              <th className="p-4 font-mono text-xs uppercase tracking-wider text-cyan-400">
                Fecha
              </th>
              <th className="p-4 font-mono text-xs uppercase tracking-wider text-cyan-400">
                Tiempo
              </th>
              <th className="p-4 font-mono text-xs uppercase tracking-wider text-cyan-400 text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-900/50">
            {projects.map((p) => (
              <tr
                key={p.id}
                className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group"
              >
                <td className="p-4">
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="w-16 h-16 object-cover rounded-lg border-2 border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300 shadow-lg"
                  />
                </td>
                <td className="p-4 font-mono text-sm text-slate-300">
                  {p.nombre}
                </td>
                <td className="p-4 font-mono text-sm text-slate-400">
                  {p.empresa}
                </td>
                <td className="p-4">
                  <span
                    className={`font-mono text-xs px-3 py-1 rounded-full ${
                      p.estatus === "Terminado"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}
                  >
                    {p.estatus}
                  </span>
                </td>
                <td className="p-4 font-mono text-sm text-slate-400">
                  {p.fecha}
                </td>
                <td className="p-4 font-mono text-sm text-slate-400">
                  {p.tiempo}
                </td>
                <td className="p-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 hover:border-blue-400/50 transition-all text-blue-400 font-mono text-xs uppercase tracking-wider shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20"
                      onClick={() => {
                        onEdit(p);
                      }}
                    >
                      <Eye size={14} /> Ver
                    </button>
                    <button
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600/20 border border-red-500/30 rounded-lg hover:bg-red-600/30 hover:border-red-400/50 transition-all text-red-400 font-mono text-xs uppercase tracking-wider shadow-lg shadow-red-500/10 hover:shadow-red-500/20"
                      onClick={() => {
                        onDelete(p);
                      }}
                    >
                      <Trash2 size={14} /> Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}