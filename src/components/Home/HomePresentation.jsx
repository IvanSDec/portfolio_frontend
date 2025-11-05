import { useState, useRef, useEffect } from 'react';

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

    <div className="w-full min-h-screen relative parallax-container">
     
      <div className="absolute inset-0 parallax-bg"></div>
      
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      <div className="relative z-20 w-full min-h-screen pt-[100px] pb-10 text-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h1 className="text-white text-6xl font-bold uppercase tracking-wider mb-2">
              <span className="relative z-10 drop-shadow-xl">Iván Sánchez</span>
            </h1>
            <h3 className="text-5xl text-cyan-400 font-bold uppercase tracking-wide">
              <span className="relative z-10 drop-shadow-lg">Desarrollador Fullstack</span>
            </h3>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 relative z-10">
          <div className="w-[500px] h-[500px] relative z-10 mx-auto mt-10 rounded-full overflow-hidden border-8 border-cyan-400 shadow-2xl shadow-cyan-500/30">
            <img src="/public/img/ivan.jpg" alt="Iván Sánchez" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="w-[500px] h-[400px] relative z-10 mx-auto mt-10 perspective-1000" ref={cardRef}>
            <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              
              <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 rounded-xl border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30 p-8 flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 rounded-xl"></div>
                <div className="absolute top-4 left-4 w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                
                <p className="text-cyan-400 text-3xl text-center mb-8 font-bold relative z-10">
                  Apasionado por la programación, la arquitectura de software y el mantenimiento de hardware.
                </p>
                
                <button 
                  onClick={() => setIsFlipped(true)}
                  className="relative bg-gradient-to-b from-cyan-500 to-cyan-700 text-white py-4 px-8 rounded-full text-xl font-bold uppercase tracking-wide border-4 border-cyan-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/70 hover:from-cyan-400 hover:to-cyan-600 active:scale-95 transition-all duration-200 hover:border-cyan-200 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-t before:from-transparent before:to-white/20 before:pointer-events-none after:absolute after:inset-2 after:rounded-full after:border after:border-white/30 after:pointer-events-none"
                >
                  ➤ CONTINUAR
                </button>
              </div>

              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900 rounded-xl border-4 border-amber-400 shadow-2xl shadow-amber-500/30 p-8 flex flex-col justify-center items-center z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-orange-500/10 rounded-xl"></div>
                <div className="absolute top-4 left-4 w-4 h-4 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"></div>
                
                <h3 className="text-amber-400 text-4xl text-center mb-8 font-bold relative z-10">¿Quieres saber más de mí?</h3>
                
                <div className="flex flex-col gap-4 relative z-20">
                  <button 
                    onClick={handleDownloadCV}
                    className="relative bg-gradient-to-b from-amber-500 to-amber-700 text-white py-4 px-8 rounded-full text-xl font-bold uppercase tracking-wide border-4 border-amber-300 shadow-lg shadow-amber-500/50 hover:shadow-amber-400/70 hover:from-amber-400 hover:to-amber-600 active:scale-95 transition-all duration-200 hover:border-amber-200 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-t before:from-transparent before:to-white/20 before:pointer-events-none after:absolute after:inset-2 after:rounded-full after:border after:border-white/30 after:pointer-events-none"
                  >
                    🎮 Descargar CV 🎮
                  </button>
                  
                  <button 
                    onClick={handleFlipBack}
                    className="text-amber-400 hover:text-amber-300 transition-colors duration-200 underline relative z-20 cursor-pointer bg-transparent border-none outline-none p-2"
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

  );

}
