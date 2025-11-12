import { useState } from "react";
import { PlusCircle } from "lucide-react";
import ProjectsDelete from "./Projects/ProjectsDelete";
import ProjectsNew from "./Projects/ProjectsNew";
import ProjectsEdit from "./Projects/ProjectsEdit";
import ProjectsTable from "./Projects/ProjectsTable";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 PROJECTS ADMIN COMPONENT - GESTIÓN DE PROYECTOS 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Permite la gestión (CRUD) de los proyectos.
 *    • Muestra una tabla con los proyectos y opciones para interactuar.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function Projects() {
  const [modalType, setModalType] = useState(null); 
  const [selectedProject, setSelectedProject] = useState(null);

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
    <>
      <div className="font-sans mx-4 md:mx-12 lg:mx-20 w-auto bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-6 md:p-10 h-auto min-h-[96vh] relative text-white">
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-700/50 bg-black/20 rounded-lg p-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
          </div>
          <div className="text-cyan-400/60 font-mono text-xs uppercase tracking-wider">
            Projects Manager
          </div>
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-widest mb-3 font-mono">
            Proyectos
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
        </div>

        <div className="mb-8">
          <button
            onClick={() => setModalType("crear")}
            className="flex font-mono items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 text-white uppercase tracking-wider text-sm border border-cyan-400/30"
          >
            <PlusCircle size={20} />
            Crear nuevo proyecto
          </button>
        </div>

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

        <div className="mt-8 pt-4 border-t border-slate-700/50 bg-black/20 rounded-lg p-4">
          <p className="text-slate-500 font-mono text-xs text-center uppercase tracking-wider">
            Total de proyectos: {proyectos.length}
          </p>
        </div>
      </div>

      {modalType === "crear" && (
        <ProjectsNew
          selectedProject={selectedProject}
          closeModal={closeModal}
        />
      )}

      {modalType === "ver" && selectedProject && (
        <ProjectsEdit 
          selectedProject={selectedProject}
          closeModal={closeModal}
        />
      )}

      {modalType === "borrar" && selectedProject && (
        <ProjectsDelete 
          selectedProject={selectedProject}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
