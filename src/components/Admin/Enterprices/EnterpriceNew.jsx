import { X } from "lucide-react";

export default function EnterpriceNew({ closeModal }) {
  return (
    <div className="">
      <div className="font-sans fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
        <div className="bg-gray-800 rounded-lg w-full max-w-3xl p-6 relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-white font-sans"
          >
            <X size={24} />
          </button>
          <h3 className="text-2xl font-semibold mb-4 font-sans">Crear nueva empresa</h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 font-sans">Nombre</label>
              <input type="text" className="w-full bg-gray-700 rounded-md p-2 text-white font-sans" />
            </div>

            <div>
              <label className="block text-sm mb-1 font-sans">Industria</label>
              <select className="w-full bg-gray-700 rounded-md p-2 text-white font-sans">
                <option className="font-sans" value="">Selecciona una industria</option>
                <option className="font-sans">Software</option>
                <option className="font-sans">Finanzas</option>
                <option className="font-sans">Salud</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1 font-sans">Estatus</label>
              <select className="w-full bg-gray-700 rounded-md p-2 text-white font-sans">
                <option className="font-sans">Activa</option>
                <option className="font-sans">Inactiva</option>
                <option className="font-sans">En crecimiento</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1 font-sans">Fecha de fundación</label>
              <input type="date" className="w-full bg-gray-700 rounded-md p-2 text-white font-sans" />
            </div>

            <div>
              <label className="block text-sm mb-1 font-sans">Tamaño</label>
              <input type="text" className="w-full bg-gray-700 rounded-md p-2 text-white font-sans" placeholder="Ej: 10-50 empleados" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-sans">Descripción</label>
              <textarea className="w-full bg-gray-700 rounded-md p-2 text-white h-24 font-sans"></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-sans">Servicios / Productos</label>
              <input type="text" placeholder="Ej: Plataforma de pagos, Consultoría" className="w-full bg-gray-700 rounded-md p-2 text-white font-sans" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1 font-sans">Logo</label>
              <input type="file" className="w-full bg-gray-700 rounded-md p-2 font-sans" />
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <button type="button" onClick={closeModal} className="px-5 py-2 bg-green-600 rounded-md hover:bg-green-500 transition-all font-sans">
                Guardar empresa
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
