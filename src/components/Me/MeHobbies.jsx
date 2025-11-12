import HobbieIndividual from "../Global/HobbiesIndividual";
import { Code, Music, Gamepad2 } from "lucide-react";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 ME HOBBIES COMPONENT - HOBBIES Y PASATIEMPOS 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Muestra una lista de hobbies e intereses del desarrollador.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
const hobbies = [
    {
        id: 1,
        title: "Programar",
        description: "Explorar nuevas tecnologías y construir proyectos personales es mi principal pasatiempo.",
        icon: <Code size={48} />,
        color: "text-cyan-400"
    },
    {
        id: 2,
        title: "Música",
        description: "Tocar la guitarra y producir música son mi escape creativo. Disfruto de géneros que van desde el rock hasta la electrónica.",
        icon: <Music size={48} />,
        color: "text-purple-400"
    },
    {
        id: 3,
        title: "Videojuegos",
        description: "Los videojuegos, especialmente los RPG y de estrategia, me fascinan por sus narrativas y mecánicas complejas.",
        icon: <Gamepad2 size={48} />,
        color: "text-amber-400"
    }
];

export default function MeHobbies() {
    return (
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-6 h-full">
            <h3 className="text-2xl font-bold text-white mb-6">Hobbies & Intereses</h3>
            <div className="space-y-6">
                {hobbies.map(hobby => (
                    <HobbieIndividual key={hobby.id} hobby={hobby} />
                ))}
            </div>
        </div>
    );
}
