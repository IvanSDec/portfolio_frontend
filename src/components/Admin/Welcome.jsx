import CompanysWelcome from "./Welcome/CompanysWelcome";
import InformationWelcome from "./Welcome/InformationWelcome";
import PermissionsWelcome from "./Welcome/PermissionsWelcome";
import ProjectsWelcome from "./Welcome/ProjectsWelcome";
import ResponsiveWelcome from "./Welcome/ResponsiveWelcome";
import SkillsWelcome from "./Welcome/SkillsWelcome";

export default function WelcomeAdmin() {
  return (
    <div className="mx-4 md:mx-12 lg:mx-20 w-auto bg-gray-900 rounded-md p-6 md:p-10 h-auto min-h-[96vh] relative ">
      
      {/* Fondo con baja opacidad */}
      <div className="welcome_admin absolute inset-0 opacity-15 z-0"></div>

      <h2 className="text-3xl md:text-4xl text-white font-sans mb-6">
        Hola de nuevo, <span className="font-bold">Admin.</span>
      </h2>

      {/* Grid responsive */}
      <div className="gap-4 sm:grid-cols-2 lg:grid-cols-3 hidden lg:grid">
        <PermissionsWelcome />
        <ProjectsWelcome />
        <SkillsWelcome />
        <InformationWelcome />
        <CompanysWelcome />
      </div>    

      <div className="flex lg:hidden">
        <ResponsiveWelcome />
      </div>

    </div>
  );
}
