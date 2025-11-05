import { Eye, Trash2 } from "lucide-react";

export default function EnterpriceTable({ enterprices, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse border border-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-3 border border-gray-700 font-sans">Logo</th>
            <th className="p-3 border border-gray-700 font-sans">Nombre</th>
            <th className="p-3 border border-gray-700 font-sans">Industria</th>
            <th className="p-3 border border-gray-700 font-sans">Estatus</th>
            <th className="p-3 border border-gray-700 font-sans">Fundada</th>
            <th className="p-3 border border-gray-700 font-sans">Tamaño</th>
            <th className="p-3 border border-gray-700 text-center font-sans">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {enterprices.map((e) => (
            <tr key={e.id} className="hover:bg-gray-800">
              <td className="p-3 border border-gray-700">
                <img
                  src={e.logo}
                  alt={e.nombre}
                  className="w-16 h-16 object-cover rounded-md font-sans"
                />
              </td>
              <td className="p-3 border border-gray-700 font-sans">{e.nombre}</td>
              <td className="p-3 border border-gray-700 font-sans">{e.industria}</td>
              <td className="p-3 border border-gray-700 font-sans">{e.estatus}</td>
              <td className="p-3 border border-gray-700 font-sans">{e.fundada}</td>
              <td className="p-3 border border-gray-700 font-sans">{e.tamaño}</td>
              <td className="p-3 border border-gray-700 text-center font-sans">
                <button
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 rounded-md hover:bg-blue-500 transition-all mr-2 font-sans"
                  onClick={() => onEdit(e)}
                >
                  <Eye size={16} /> Ver
                </button>
                <button
                  className="font-sans inline-flex items-center gap-1 px-3 py-1 bg-red-600 rounded-md hover:bg-red-500 transition-all"
                  onClick={() => onDelete(e)}
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
