import { useSelector, useDispatch } from "react-redux";
import { setStateAdmin } from "../../../redux/principalSlice";
import { FaFolderOpen } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { IoIosInformationCircle } from "react-icons/io";
import { FaBuildingUser } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { ImExit } from "react-icons/im";

export default function MenuResponsive() {
  const principal = useSelector((state) => state.principal);
  const dispatch = useDispatch();

  const buttons = [
    { label: "Home", icon: <IoIosHome />, state: "" },
    { label: "Proyectos", icon: <FaFolderOpen />, state: "projects" },
    { label: "Skills", icon: <GiSkills />, state: "skills" },
    { label: "Información", icon: <IoIosInformationCircle />, state: "information" },
    { label: "Empresas", icon: <FaBuildingUser />, state: "company" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-md rounded-full px-4 py-2 shadow-lg z-50 flex justify-center items-center gap-4 lg:hidden animate-fadeIn">
      
      {buttons.map((btn) => (
        <button
          key={btn.label}
          onClick={() =>
            principal.stateAdmin === btn.state
              ? dispatch(setStateAdmin(""))
              : dispatch(setStateAdmin(btn.state))
          }
          className={`flex flex-col items-center justify-center text-white text-sm transition-transform transform hover:scale-110 ${
            principal.stateAdmin === btn.state ? "text-sky-400" : "text-white/80"
          }`}
        >
          <div className="text-xl">{btn.icon}</div>
          <span className="text-[10px]">{btn.label}</span>
        </button>
      ))}

      <button
        onClick={() => console.log("end-session")}
        className="flex flex-col items-center justify-center text-white text-sm transition-transform transform hover:scale-110"
      >
        <div className="text-xl">
          <ImExit className="text-red-500" />
        </div>
        <span className="text-[10px] text-red-500">Salir</span>
      </button>
    </div>
  );
}
