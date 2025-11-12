import { useState, useRef, useEffect } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 HOME PRESENTATION COMPONENT - COMPONENTE DE PRESENTACIÓN DEL HOGAR 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *   • Mostrar presentación del desarrollador con efectos interactivos
 *   • Efecto de tarjeta giratoria para más información y descarga de CV
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function HomePresentation() {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  const handleDownloadCV = () => {
    console.info('Descargando CV...');
  };

  const handleFlipBack = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlipped(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isFlipped && cardRef.current && !cardRef.current.contains(event.target)) {
        setIsFlipped(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFlipped]);

  return (
    <div className="w-full min-h-screen relative parallax-container overflow-x-hidden">
      
      <div className="absolute inset-0 parallax-bg"></div>
      
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      <div className="relative z-20 w-full min-h-screen pt-5 md:pt-[120px] pb-20 px-4">
        
        <div className="max-w-4xl mx-auto text-center mb-5 md:mb-16">
          <div className="bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-8 md:p-12">

            <h1 className="text-4xl md:text-6xl font-light text-white uppercase tracking-widest mb-4">
              Iván Sánchez
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6"></div>
            <h3 className="text-2xl md:text-3xl text-cyan-400 font-light uppercase tracking-wide">
              Desarrollador Fullstack
            </h3>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          
          <div className="flex justify-center px-2">
            <div className="relative w-full max-w-[400px] aspect-square group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-2xl">
                <img 
                  src="/img/ivan.jpg" 
                  alt="Iván Sánchez" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center px-2">
            <div className="w-full max-w-[450px] min-h-[360px] md:h-[400px] perspective-1000" ref={cardRef}>
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
                    
                    <div className="flex justify-between items-center p-4 border-b border-slate-700/50 bg-black/20">
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                      </div>
                      <div className="text-cyan-400/60 font-mono text-[10px] uppercase tracking-wider">
                        About
                      </div>
                    </div>

                    <div className="p-8 flex flex-col justify-center items-center h-[calc(100%-60px)]">
                      <p className="text-slate-300 text-lg text-center mb-8 leading-relaxed">
                        Apasionado por la <span className="text-cyan-400 font-medium">programación</span>, la <span className="text-cyan-400 font-medium">arquitectura de software</span> y el <span className="text-cyan-400 font-medium">mantenimiento de hardware</span>.
                      </p>
                      
                      <button 
                        onClick={() => setIsFlipped(true)}
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
                      >
                        Más información →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="relative h-full bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
                    
                    <div className="flex justify-between items-center p-4 border-b border-slate-700/50 bg-black/20">
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                      </div>
                      <div className="text-cyan-400/60 font-mono text-[10px] uppercase tracking-wider">
                        Contact
                      </div>
                    </div>

                    <div className="p-8 flex flex-col justify-center items-center h-[calc(100%-60px)]">
                      <h3 className="text-cyan-400 text-2xl text-center mb-8 font-light uppercase tracking-wide">
                        ¿Quieres saber más de mí?
                      </h3>
                      
                      <div className="flex flex-col gap-4 w-full">
                        <button 
                          onClick={handleDownloadCV}
                          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
                        >
                          Descargar CV
                        </button>
                        
                        <button 
                          onClick={handleFlipBack}
                          className="w-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 text-slate-300 py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300"
                        >
                          ← Volver
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
