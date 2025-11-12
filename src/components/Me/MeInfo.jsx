import { User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 ME INFO COMPONENT - INFORMACIÓN PERSONAL 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Muestra la información personal del desarrollador.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
const personalInfo = {
    nombre: "Iván Sánchez",
    titulo: "Desarrollador Full-Stack",
    edad: 28,
    direccion: "Madrid, España",
    email: "ivan.sanchez.dev@email.com",
    telefono: "+34 612 345 678"
};

const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-4">
        <div className="bg-slate-700/50 p-2 rounded-full border border-slate-600">
            {icon}
        </div>
        <div>
            <p className="text-xs text-slate-400 uppercase font-mono tracking-wider">{label}</p>
            <p className="text-base text-white">{value}</p>
        </div>
    </div>
);

export default function MeInfo() {
    return (
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Información Personal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <InfoItem icon={<User className="text-cyan-400" />} label="Nombre" value={personalInfo.nombre} />
                <InfoItem icon={<Briefcase className="text-cyan-400" />} label="Título" value={personalInfo.titulo} />
                <InfoItem icon={<User className="text-cyan-400" />} label="Edad" value={`${personalInfo.edad} años`} />
                <InfoItem icon={<MapPin className="text-cyan-400" />} label="Dirección" value={personalInfo.direccion} />
                <InfoItem icon={<Mail className="text-cyan-400" />} label="Email" value={personalInfo.email} />
                <InfoItem icon={<Phone className="text-cyan-400" />} label="Teléfono" value={personalInfo.telefono} />
            </div>
        </div>
    );
}
