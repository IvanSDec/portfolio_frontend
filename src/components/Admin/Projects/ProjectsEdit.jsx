import { X } from "lucide-react";

export default function ProjectsEdit({ closeModal, selectedProject }) {
  return(
    <div className="">
       <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-gray-800 rounded-lg w-full max-w-3xl p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white font-sans"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-semibold mb-4 font-sans">
              Ver / Editar Proyecto
            </h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 font-sans">Nombre</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-md p-2 font-sans"
                  defaultValue={selectedProject.nombre}
                />
              </div>

              <div>
                <label className="block text-sm mb-1 font-sans">Empresa</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-md p-2 font-sans"
                  defaultValue={selectedProject.empresa}
                />
              </div>

              <div>
                <label className="block text-sm mb-1 font-sans">Estatus</label>
                <select
                  className="w-full bg-gray-700 rounded-md p-2 font-sans" 
                  defaultValue={selectedProject.estatus}
                >
                  <option className="font-sans">En proceso</option>
                  <option className="font-sans">Terminado</option>
                  <option className="font-sans">Descontinuado</option>
                  <option className="font-sans">Primeras fases</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1 font-sans">Fecha</label>
                <input
                  type="date"
                  className="w-full bg-gray-700 rounded-md p-2 font-sans"
                  defaultValue={selectedProject.fecha}
                />
              </div>

              <div>
                <label className="block text-sm mb-1 font-sans">Tiempo</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-md p-2 font-sans"
                  defaultValue={selectedProject.tiempo}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-1 font-sans">Descripción</label>
                <textarea
                  className="w-full bg-gray-700 rounded-md p-2 h-24 font-sans"
                  defaultValue={selectedProject.descripcion}
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-1 font-sans">Tecnologías</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-md p-2 font-sans"
                  defaultValue={selectedProject.tecnologias.join(", ")}
                />
              </div>

              <div className="md:col-span-2 flex justify-end mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2 bg-green-600 rounded-md hover:bg-green-500 transition-all font-sans"
                >
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};