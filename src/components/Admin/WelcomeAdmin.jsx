import CompanysWelcome from "./Welcome/CompanysWelcome";
import InformationWelcome from "./Welcome/InformationWelcome";
import PermissionsWelcome from "./Welcome/PermissionsWelcome";
import ProjectsWelcome from "./Welcome/ProjectsWelcome";
import ResponsiveWelcome from "./Welcome/ResponsiveWelcome";
import SkillsWelcome from "./Welcome/SkillsWelcome";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 WELCOME ADMIN COMPONENT - PÁGINA DE BIENVENIDA 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Pantalla de bienvenida para el panel de administración
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function WelcomeAdmin() {
  return (
    <div className="relative min-h-[96vh] flex items-center justify-center py-0 px-2">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-gray-900/90 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-2xl p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl text-white font-mono font-light tracking-wider mb-1">
              Hola de nuevo, <span className="font-bold text-cyan-400">Iván Sánchez.</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-2"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono uppercase tracking-widest bg-black/30 px-3 py-1 rounded-lg border border-cyan-500/30 shadow shadow-cyan-500/10">
              Admin Panel
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PermissionsWelcome />
          <ProjectsWelcome />
          <SkillsWelcome />
          <InformationWelcome />
          <CompanysWelcome />
        </div>

        <div className="flex lg:hidden mt-8">
          <ResponsiveWelcome />
        </div>
      </div>
    </div>
  );
}
