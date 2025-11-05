import { useState, useRef } from "react";

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
        border: "border-cyan-400",
        shadow: "shadow-cyan-500/30",
        bg: "from-cyan-900 via-blue-900 to-slate-900",
        text: "text-cyan-400",
        button: "from-cyan-500 to-cyan-700 border-cyan-300 shadow-cyan-500/50 hover:shadow-cyan-400/70",
        led1: "bg-red-500 shadow-red-500/50",
        led2: "bg-green-500 shadow-green-500/50"
      },
      amber: {
        border: "border-amber-400",
        shadow: "shadow-amber-500/30",
        bg: "from-amber-900 via-orange-900 to-slate-900",
        text: "text-amber-400",
        button: "from-amber-500 to-amber-700 border-amber-300 shadow-amber-500/50 hover:shadow-amber-400/70",
        led1: "bg-emerald-500 shadow-emerald-500/50",
        led2: "bg-orange-500 shadow-orange-500/50"
      },
      purple: {
        border: "border-purple-400",
        shadow: "shadow-purple-500/30",
        bg: "from-purple-900 via-indigo-900 to-slate-900",
        text: "text-purple-400",
        button: "from-purple-500 to-purple-700 border-purple-300 shadow-purple-500/50 hover:shadow-purple-400/70",
        led1: "bg-blue-500 shadow-blue-500/50",
        led2: "bg-pink-500 shadow-pink-500/50"
      }
    };

    return colors[color];

  };

  return (

    <div className="w-full min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold uppercase tracking-wider text-white mb-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 inline-block">
            <span className="relative z-10 drop-shadow-xl">Mis Proyectos</span>
          </h2>
          <p className="text-xl text-cyan-400 mt-4">Desarrollos destacados con tecnologías modernas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const colors = getColorClasses(project.color);
            
            return (
              <div
                key={project.id}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                
                 <div className={`relative bg-gradient-to-b ${colors.bg} rounded-t-3xl rounded-b-lg border-4 ${colors.border} shadow-2xl ${colors.shadow} overflow-hidden transform hover:scale-105 transition-all duration-300`}>
                  
                  <div className="relative h-48 bg-black/80 m-4 rounded-lg border-2 border-gray-600 overflow-hidden">
                    <div className="absolute inset-2 rounded border border-gray-500 overflow-hidden">

                      {hovered.id === project.id && hovered.src && (
                        <img
                          src={hovered.src}
                          alt="arcade-gif"
                          className="absolute inset-0 w-full h-full object-cover opacity-95 pointer-events-none z-0"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-black/60 pointer-events-none z-0"></div>
                      
                      <div className="absolute top-2 left-2 flex gap-2 z-10">
                        <div className={`w-3 h-3 rounded-full ${colors.led1} animate-pulse`}></div>
                        <div className={`w-3 h-3 rounded-full ${colors.led2} animate-pulse`}></div>
                      </div>
                      
                      <div className="p-4 h-full flex flex-col justify-center relative z-10">
                        <h3 className={`${colors.text} text-xl font-bold uppercase tracking-wide mb-2 text-center`}>
                          {project.title}
                        </h3>
                        <div className="text-green-400 text-xs font-mono text-center">
                          [{project.status}]
                        </div>
                      </div>

                    </div>

                  </div>

                  <div className="p-6">

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className={`${colors.text} text-sm font-bold uppercase tracking-wide mb-2`}>
                        Tecnologías:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-black/50 text-gray-300 text-xs rounded border border-gray-600 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className={`w-full relative bg-gradient-to-b ${colors.button} text-white py-3 px-6 rounded-full text-sm font-bold uppercase tracking-wide border-4 shadow-lg active:scale-95 transition-all duration-200 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-t before:from-transparent before:to-white/20 before:pointer-events-none after:absolute after:inset-2 after:rounded-full after:border after:border-white/30 after:pointer-events-none`}>
                      🎮 Ver Proyecto 🎮
                    </button>

                  </div>

                  <div className={`h-4 bg-gradient-to-b from-gray-700 to-gray-900 border-t-2 ${colors.border}`}></div>
                </div>

              </div>

            );

          })}

        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            ¿Interesado en colaborar? 
            <span className="text-cyan-400 ml-2 hover:text-cyan-300 cursor-pointer transition-colors">
              ¡Hablemos!
            </span>
          </p>
        </div>

      </div>

    </div>
    
  );

};