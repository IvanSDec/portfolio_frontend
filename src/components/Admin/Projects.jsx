import { useState } from "react";
import { PlusCircle } from "lucide-react";
import ProjectsDelete from "./Projects/ProjectsDelete";
import ProjectsNew from "./Projects/ProjectsNew";
import ProjectsEdit from "./Projects/ProjectsEdit";
import ProjectsTable from "./Projects/ProjectsTable";

export default function Projects() {
  const [modalType, setModalType] = useState(null); 
  const [selectedProject, setSelectedProject] = useState(null);

  // Datos simulados
  const proyectos = [
    {
      id: 1,
      nombre: "Sistema de Inventarios",
      empresa: "TechCorp",
      estatus: "En proceso",
      fecha: "2025-03-15",
      tiempo: "3 meses",
      descripcion:
        "Aplicación web para control de inventarios con panel administrativo.",
      tecnologias: ["React", "Node.js", "MySQL"],
      imagen: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      nombre: "Landing Page Financiera",
      empresa: "FinanciaMX",
      estatus: "Terminado",
      fecha: "2025-01-10",
      tiempo: "2 semanas",
      descripcion: "Sitio responsivo con SEO optimizado.",
      tecnologias: ["Next.js", "Tailwind", "Vercel"],
      imagen: "https://via.placeholder.com/100",
    },
  ];

  const closeModal = () => {
    setModalType(null);
    setSelectedProject(null);
  };

  return (
    <div className="font-sans mx-4 md:mx-12 lg:mx-20 w-auto bg-gray-900 rounded-md p-6 md:p-10 h-auto min-h-[96vh] relative text-white">
      <h2 className="text-3xl md:text-4xl font-sans mb-6 ">Proyectos</h2>

      {/* Botón crear */}
      <div className="mb-6">
        <button
          onClick={() => setModalType("crear")}
          className="flex font-sans items-center gap-2 border-2 border-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 transition-all"
        >
          <PlusCircle size={22} />
          Crear nuevo proyecto
        </button>
      </div>

      {/* Tabla */}
      <ProjectsTable
        projects={proyectos}
        onEdit={(project) => {
          setSelectedProject(project);
          setModalType("ver");
        }}
        onDelete={(project) => {
          setSelectedProject(project);
          setModalType("borrar");
        }}
      />

      {/* === MODAL CREAR === */}
      {modalType === "crear" && (
        <ProjectsNew
					selectedProject={selectedProject}
					closeModal={closeModal}
				/>
      )}

      {/* === MODAL VER / EDITAR === */}
      {modalType === "ver" && selectedProject && (
       <ProjectsEdit 
					selectedProject={selectedProject}
					closeModal={closeModal}
			 />
      )}

      {/* === MODAL ELIMINAR === */}
      {modalType === "borrar" && selectedProject && (
        <ProjectsDelete 
					selectedProject={selectedProject}
					closeModal={closeModal}
				/>
      )}
    </div>
  );
}
