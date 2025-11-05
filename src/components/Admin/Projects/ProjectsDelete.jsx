export default function ProjectsDelete({selectedProject, closeModal}) {
  return(
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full text-center">
        <h3 className="text-2xl font-semibold mb-4 text-red-400 font-sans">
          Eliminar proyecto
        </h3>
        <p className="text-gray-300 mb-6 font-sans">
          ¿Seguro que deseas eliminar{" "}
          <span className="font-bold text-white font-sans">
            {selectedProject.nombre}
          </span>
          ? Esta acción no se puede deshacer.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500 font-sans"
          >
            Cancelar
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-500 font-sans"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};