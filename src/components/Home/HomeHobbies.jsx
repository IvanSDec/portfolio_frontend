import { FaGamepad, FaMusic, FaRunning } from 'react-icons/fa';
import HobbieIndividual from '../Global/HobbiesIndividual';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 HOME HOBBIES COMPONENT - COMPONENTE DE HOBBIES 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Muestra una sección con los hobbies del desarrollador.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function HomeHobbies() {
  const hobbies = [
    {
      id: 1,
      title: "Gaming",
      description: "Desde clásicos de 8-bits a mundos abiertos. Los videojuegos son mi escape y mi campo de pruebas para la estrategia y la resolución de problemas.",
      icon: <FaGamepad className="w-8 h-8" />,
      color: "text-cyan-400",
    },
    {
      id: 2,
      title: "Música & DJing",
      description: "Explorando ritmos y creando atmósferas. La música electrónica es mi lienzo para la expresión y la energía.",
      icon: <FaMusic className="w-8 h-8" />,
      color: "text-purple-400",
    },
    {
      id: 3,
      title: "Calistenia",
      description: "Dominando el movimiento y la fuerza con el propio peso corporal. Es mi forma de meditación activa y superación física.",
      icon: <FaRunning className="w-8 h-8" />,
      color: "text-amber-400",
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-8 md:p-12 inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-widest mb-4">
              Mis Hobbies
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4"></div>
            <p className="text-lg text-slate-400 font-light">
              Pasiones que me definen fuera del código
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby) => (
            <HobbieIndividual key={hobby.id} hobby={hobby} />
          ))}
        </div>

      </div>
    </div>
  );
}