import { MdVerified } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setStateAdmin } from "../../../redux/principalSlice";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 RESPONSIVE WELCOME COMPONENT - BIENVENIDA RESPONSIVE 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Muestra enlaces rápidos para la vista responsive en el panel de admin.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function ResponsiveWelcome() {
  const principal = useSelector((state) => state.principal);
  const dispatch = useDispatch();

  const buttons = [
    { label: "Proyectos", icon: <MdVerified />, state: "projects", color: "sky-400" },
    { label: "Skills", icon: <MdVerified />, state: "skills", color: "pink-400" },
    { label: "Información", icon: <MdVerified />, state: "information", color: "amber-400" },
    { label: "Empresas", icon: <MdVerified />, state: "company", color: "emerald-400" },
  ];

  return (
    <div className="w-full mt-10 max-h-[320px] h-auto p-6 rounded-xl bg-[rgba(0,0,0,1)] border border-gray-700 shadow-lg text-white">
      
      <h2 className="text-2xl font-bold font-sans mb-6 text-center">Permisos y enlaces rápidos</h2>

      <div className="grid grid-cols-2 gap-4">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            onClick={() =>
              principal.stateAdmin === btn.state
                ? dispatch(setStateAdmin(""))
                : dispatch(setStateAdmin(btn.state))
            }
            className={`flex flex-col items-center justify-center gap-2 p-3 rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-lg bg-[rgba(0,0,0,0.4)] text-white`}
          >
            <div className={`text-3xl ${principal.stateAdmin === btn.state ? `text-${btn.color}` : "text-green-600"}`}>
              {btn.icon}
            </div>
            <span className="text-sm font-semibold font-sans">{btn.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
