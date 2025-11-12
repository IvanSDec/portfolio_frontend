import MePresentation from "../components/Me/MePresentation";
import MeHobbies from "../components/Me/MeHobbies";
import MeSkills from "../components/Me/MeSkills";
import MeInfo from "../components/Me/MeInfo";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 ME COMPONENT - PÁGINA SOBRE MÍ 🎨
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 🔒 FUNCIONALIDAD:
 *    • Mostrar presentación, información, habilidades y hobbies
 *
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
 */
export default function Me() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <MePresentation />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 sm:pb-32 space-y-12">
        <MeInfo />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <MeSkills />
          </div>
          <div>
            <MeHobbies />
          </div>
        </div>
      </div>
    </div>
  );
}
