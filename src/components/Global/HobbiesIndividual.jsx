/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 HOBBIE INDIVIDUAL COMPONENT - COMPONENTE DE HOBBIE INDIVIDUAL 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Muestra una tarjeta individual para un hobbie con estilo de cassette.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function HobbieIndividual({ hobby }) {
  return (

    <div key={hobby.id} className="bg-slate-800/70 backdrop-blur-lg rounded-lg border border-slate-700 p-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
      
      <div className="bg-gray-900/80 rounded-md p-4 h-full flex flex-col">
        
        <div className="flex justify-between items-center mb-3">
          <div className={`font-mono text-xs uppercase ${hobby.color} opacity-80`}>Side A</div>
          <div className="w-16 h-5 border-2 border-slate-600 rounded-sm flex items-center justify-center">
            <p className="text-[10px] text-slate-400 font-mono">C-90</p>
          </div>
        </div>

        <div className="bg-black/50 border border-slate-700 rounded-md p-4 flex-grow flex flex-col justify-center items-center text-center mb-3">
          <div className={`${hobby.color} mb-3`}>
            {hobby.icon}
          </div>
          <h3 className={`text-xl font-light uppercase tracking-wider text-white mb-2`}>
            {hobby.title}
          </h3>
        </div>

        <div className="bg-slate-200/90 p-3 rounded-md mb-3">
          <p className="text-gray-800 text-sm font-mono leading-tight" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
            {hobby.description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-8 h-8 bg-black rounded-full border-2 border-slate-600 flex items-center justify-center">
            <div className="w-3 h-3 bg-slate-700 rounded-sm transform rotate-45"></div>
          </div>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
            <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
            <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
          </div>
          <div className="w-8 h-8 bg-black rounded-full border-2 border-slate-600 flex items-center justify-center">
            <div className="w-3 h-3 bg-slate-700 rounded-sm transform rotate-45"></div>
          </div>
        </div>
      </div>
    </div>

  );

}