import { useState, useRef } from "react";
import ProjectIndividual from "../Global/ProjectIndividual.jsx";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 HOMEWORK COMPONENT - COMPONENTE DE TAREA 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Mostrar proyectos destacados con efectos interactivos
 *    • Efecto de cambio de imagen al pasar el ratón
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function HomeWork() {
  const gifs = [
    "/gif/autos.gif",
    "/gif/luchas.gif",
    "/gif/space.gif",
    "/gif/carreras.gif",
    "/gif/contra.gif",
    "/gif/luchas2.gif",
    "/gif/pacman.gif",
  ];

  const lastUsed = useRef({});
  const [hovered, setHovered] = useState({ id: null, src: null });

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

  const handleMouseLeave = () => {
    setHovered({ id: null, src: null });
  };
 
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma completa de comercio electrónico con React, Node.js y MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Completado",
      color: "cyan"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con autenticación y tiempo real",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      status: "En desarrollo",
      color: "amber"
    },
    {
      id: 3,
      title: "Portfolio Web",
      description: "Sitio web personal con diseño arcade y efectos interactivos",
      tech: ["React", "Tailwind", "Framer Motion", "Vite"],
      status: "Completado",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        border: "border-cyan-500/50",
        shadow: "shadow-cyan-500/20",
        bg: "from-slate-800/90 via-slate-900/90 to-gray-900/90",
        text: "text-cyan-400",
        button: "from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-cyan-500/20 hover:shadow-cyan-500/30",
        led1: "bg-cyan-500/70",
        led2: "bg-blue-500/70",
        screen: "border-slate-700"
      },
      amber: {
        border: "border-amber-500/50",
        shadow: "shadow-amber-500/20",
        bg: "from-slate-800/90 via-slate-900/90 to-gray-900/90",
        text: "text-amber-400",
        button: "from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 shadow-amber-500/20 hover:shadow-amber-500/30",
        led1: "bg-amber-500/70",
        led2: "bg-orange-500/70",
        screen: "border-slate-700"
      },
      purple: {
        border: "border-purple-500/50",
        shadow: "shadow-purple-500/20",
        bg: "from-slate-800/90 via-slate-900/90 to-gray-900/90",
        text: "text-purple-400",
        button: "from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-purple-500/20 hover:shadow-purple-500/30",
        led1: "bg-purple-500/70",
        led2: "bg-indigo-500/70",
        screen: "border-slate-700"
      }
    };
    return colors[color];
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 px-4 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-8 md:p-12 inline-block">

            <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-widest mb-4">
              Mis Proyectos
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-4"></div>
            <p className="text-lg text-slate-400 font-light">
              Desarrollos destacados con tecnologías modernas
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const colors = getColorClasses(project.color);
            const pro = project;
            
            return (
              <ProjectIndividual 
                key={pro.id}
                project={pro} 
                colors={colors} 
                handleMouseEnter={() => handleMouseEnter(pro.id)}
                handleMouseLeave={handleMouseLeave}
                hovered={hovered}
              />
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-gray-900/40 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-xl p-6 inline-block">
            <p className="text-slate-400 text-lg font-light">
              ¿Interesado en colaborar?{" "}
              <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors font-medium">
                ¡Hablemos!
              </span>
            </p>
          </div>
        </div>

      </div>
      
    </div>
  );
};