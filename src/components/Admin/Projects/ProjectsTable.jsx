import { Eye, Trash2 } from "lucide-react";

export default function ProjectsTable({ projects, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse border border-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-3 border border-gray-700 font-sans">Imagen</th>
            <th className="p-3 border border-gray-700 font-sans">Nombre</th>
            <th className="p-3 border border-gray-700 font-sans">Empresa</th>
            <th className="p-3 border border-gray-700 font-sans">Estatus</th>
            <th className="p-3 border border-gray-700 font-sans">Fecha</th>
            <th className="p-3 border border-gray-700 font-sans">Tiempo</th>
            <th className="p-3 border border-gray-700 text-center font-sans">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id} className="hover:bg-gray-800">
              <td className="p-3 border border-gray-700">
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="w-16 h-16 object-cover rounded-md font-sans"
                />
              </td>
              <td className="p-3 border border-gray-700 font-sans">{p.nombre}</td>
              <td className="p-3 border border-gray-700 font-sans">{p.empresa}</td>
              <td className="p-3 border border-gray-700 font-sans">{p.estatus}</td>
              <td className="p-3 border border-gray-700 font-sans">{p.fecha}</td>
              <td className="p-3 border border-gray-700 font-sans">{p.tiempo}</td>
              <td className="p-3 border border-gray-700 text-center font-sans">
                <button
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 rounded-md hover:bg-blue-500 transition-all mr-2 font-sans"
                  onClick={() => {
                    onEdit(p);
                  }}
                >
                  <Eye size={16} /> Ver
                </button>
                <button
                  className="font-sans inline-flex items-center gap-1 px-3 py-1 bg-red-600 rounded-md hover:bg-red-500 transition-all"
                  onClick={() => {
                    onDelete(p);
                  }}
                >
                  <Trash2 size={16} /> Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );  
}