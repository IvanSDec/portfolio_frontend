import { useState, useEffect } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 MESKILLS COMPONENT - HABILIDADES TÉCNICAS 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
const levelToWidth = {
    'Básico': '35%',
    'Intermedio': '50%',
    'Avanzado': '75%',
    'Experto': '100%',
};

const levelToColor = {
    'Básico': 'from-sky-400 to-cyan-500',
    'Intermedio': 'from-cyan-500 to-blue-500',
    'Avanzado': 'from-blue-500 to-indigo-500',
    'Experto': 'from-indigo-500 to-purple-600',
};

const levelToTextColor = {
    'Básico': 'text-sky-400',
    'Intermedio': 'text-cyan-400',
    'Avanzado': 'text-blue-400',
    'Experto': 'text-indigo-400',
};

const SkillBar = ({ skill, level }) => (
    <div>
        <div className="flex justify-between items-center mb-1">
            <span className="text-base font-medium text-slate-300 font-mono">{skill}</span>
            <span className={`text-sm font-medium ${levelToTextColor[level] || 'text-gray-400'} font-mono`}>{level}</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2.5">
            <div className={`bg-gradient-to-r ${levelToColor[level] || 'from-gray-500 to-gray-600'} h-2.5 rounded-full`} style={{ width: levelToWidth[level] || '0%' }}></div>
        </div>
    </div>
);

export default function MeSkills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const mockSkills = [
            { nombre: 'React', level: 'Avanzado' },
            { nombre: 'Node.js', level: 'Avanzado' },
            { nombre: 'JavaScript & TypeScript', level: 'Experto' },
            { nombre: 'Tailwind CSS', level: 'Experto' },
            { nombre: 'SQL & NoSQL', level: 'Intermedio' },
            { nombre: 'Docker', level: 'Intermedio' },
            { nombre: 'Python', level: 'Básico' },
        ];
        setSkills(mockSkills);
    }, []);

    return (
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Habilidades Técnicas</h3>
            <div className="space-y-6">
                {skills.length > 0 ? (
                    skills.map(skill => (
                        <SkillBar key={skill.nombre} skill={skill.nombre} level={skill.level} />
                    ))
                ) : (
                    <p className="text-slate-400">Cargando habilidades...</p>
                )}
            </div>
        </div>
    );
}
