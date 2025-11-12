import { useState, useRef } from "react";
import ProjectIndividual from "../Global/ProjectIndividual.jsx";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 PROJECT CARDS COMPONENT - TARJETAS DE PROYECTOS 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Muestra una cuadrícula de proyectos con paginación.
 *    • Abre un modal con los detalles del proyecto seleccionado.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function ProjectCards() {
  const gifs = [
    "/gif/autos.gif", "/gif/luchas.gif", "/gif/space.gif", "/gif/carreras.gif",
    "/gif/contra.gif", "/gif/luchas2.gif", "/gif/pacman.gif",
  ];

  const lastUsed = useRef({});
  const [hovered, setHovered] = useState({ id: null, src: null });
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    description: "Descripción detallada del proyecto, mostrando su propósito y funcionalidades clave.",
    tech: ["React", "Node.js", "MongoDB"],
    status: i % 3 === 0 ? "Completado" : (i % 3 === 1 ? "En desarrollo" : "Primeras fases"),
    color: ["cyan", "amber", "purple"][i % 3],
    company: ["TechCorp", "FinanciaMX", "SoftPlus"][i % 3],
    devTime: `${i+2} meses`,
    creationDate: `2023-0${(i%9)+1}-15`,
    mainImage: `/img/project-placeholder.png`,
    gallery: [`/img/gallery1.png`, `/img/gallery2.png`]
  }));

  const pickNonRepeating = (id) => {
    if (!gifs.length) return null;
    let attempt = 0;
    let src = gifs[Math.floor(Math.random() * gifs.length)];
    while (src === lastUsed.current[id] && attempt < 6) {
      src = gifs[Math.floor(Math.random() * gifs.length)];
      attempt++;
    }
    lastUsed.current[id] = src;
    return src;
  };

  const handleMouseEnter = (id) => {
    const src = pickNonRepeating(id);
    if (src) setHovered({ id, src });
  };

  const handleMouseLeave = () => setHovered({ id: null, src: null });

  const handleViewProject = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const getColorClasses = (color) => {
    const colors = {
      cyan: { border: "border-cyan-500/50", shadow: "shadow-cyan-500/20", bg: "from-slate-800/90 via-slate-900/90 to-gray-900/90", text: "text-cyan-400", button: "from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-cyan-500/20 hover:shadow-cyan-500/30", led1: "bg-cyan-500/70", led2: "bg-blue-500/70", screen: "border-slate-700" },
      amber: { border: "border-amber-500/50", shadow: "shadow-amber-500/20", bg: "from-slate-800/90 via-slate-900/90 to-gray-900/90", text: "text-amber-400", button: "from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 shadow-amber-500/20 hover:shadow-amber-500/30", led1: "bg-amber-500/70", led2: "bg-orange-500/70", screen: "border-slate-700" },
      purple: { border: "border-purple-500/50", shadow: "shadow-purple-500/20", bg: "from-slate-800/90 via-slate-900/90 to-gray-900/90", text: "text-purple-400", button: "from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-purple-500/20 hover:shadow-purple-500/30", led1: "bg-purple-500/70", led2: "bg-indigo-500/70", screen: "border-slate-700" }
    };
    return colors[color];
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full relative overflow-hidden pb-24 sm:pb-32 px-4">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => {
            const colors = getColorClasses(project.color);
            return (
              <ProjectIndividual 
                key={project.id}
                project={project} 
                colors={colors} 
                handleMouseEnter={() => handleMouseEnter(project.id)}
                handleMouseLeave={handleMouseLeave}
                hovered={hovered}
                onViewProject={() => handleViewProject(project)}
              />
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 space-x-4">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="p-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700/70 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <span className="font-mono text-slate-400">Página {currentPage} de {totalPages}</span>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700/70 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-start z-[999] p-4 pt-16 overflow-y-auto" onClick={handleCloseModal}>
          <div className="bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-gray-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl w-full max-w-4xl mb-8 shadow-2xl shadow-cyan-500/20 relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 border-b border-slate-700/50 bg-black/20 rounded-t-2xl">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <div className="text-cyan-400/60 font-mono text-xs uppercase tracking-wider">
                Project_Details
              </div>
              <button onClick={handleCloseModal} className="text-slate-400 hover:text-white transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-light uppercase tracking-wider text-white mb-2">{selectedProject.title}</h3>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-6"></div>
                  <p className="text-slate-300 mb-6">{selectedProject.description}</p>
                  
                  <div className="space-y-4 text-sm font-mono">
                    <div className="flex"><strong className="text-cyan-400/80 w-36 uppercase tracking-wider">Estatus:</strong> <span className="text-slate-300">{selectedProject.status}</span></div>
                    <div className="flex"><strong className="text-cyan-400/80 w-36 uppercase tracking-wider">Empresa:</strong> <span className="text-slate-300">{selectedProject.company}</span></div>
                    <div className="flex"><strong className="text-cyan-400/80 w-36 uppercase tracking-wider">Fecha:</strong> <span className="text-slate-300">{selectedProject.creationDate}</span></div>
                    <div className="flex"><strong className="text-cyan-400/80 w-36 uppercase tracking-wider">Duración:</strong> <span className="text-slate-300">{selectedProject.devTime}</span></div>
                  </div>

                  <h4 className="text-cyan-400 text-sm font-mono uppercase tracking-wider mt-8 mb-4">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => <span key={t} className="bg-cyan-600/30 text-cyan-300 text-xs font-mono px-2 py-1 rounded-full">{t}</span>)}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-cyan-400 text-sm font-mono uppercase tracking-wider mb-3">Imagen Principal</h4>
                    <img src={selectedProject.mainImage} alt={selectedProject.title} className="rounded-lg border-2 border-slate-700 w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-cyan-400 text-sm font-mono uppercase tracking-wider mb-3">Galería</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.gallery.map((img, i) => <img key={i} src={img} alt={`gallery ${i}`} className="rounded-md border border-slate-700 w-full object-cover" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-slate-700/50 bg-black/20 rounded-b-2xl text-center">
              <p className="text-slate-500 font-mono text-xs uppercase tracking-wider">Iván Sánchez Portfolio</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
