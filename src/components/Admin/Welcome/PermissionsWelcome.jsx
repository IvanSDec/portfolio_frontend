// import { MdDoNotDisturbOn } from "react-icons/md";
import { MdVerified } from "react-icons/md";

export default function PermissionsWelcome () {

    return(

        <div className="text-white mt-[50px] w-full max-h-[280px] h-auto border-solid border-2 border-gray-300 rounded-md p-[25px] bg-[rgba(0,0,0,0.6)]">

            <h2 className="text-xl mb-[40px] font-bold font-sans">Permisos del perfil</h2>
            
            <div className="flex justify-between items-center gap-1 mt-[10px] w-full">
                <h2 className="font-sans">Edicion de Proyectos</h2>
                <MdVerified className="text-green-600 text-2xl" />
                {/* <MdDoNotDisturbOn className="text-red-600 text-2xl" /> */}
            </div>
            
            <div className="flex justify-between items-center gap-1 mt-[10px] w-full font-sans">
                <h2 className="font-sans">Edicion de Skills</h2>
                <MdVerified className="text-green-600 text-2xl" />
            </div>
            
            <div className="flex justify-between items-center gap-1 mt-[10px] w-full font-sans">
                <h2 className="font-sans">Edicion de Información</h2>
                <MdVerified className="text-green-600 text-2xl" />
            </div>

            <div className="flex justify-between items-center gap-1 mt-[10px] w-full font-sans">
                <h2 className="font-sans">Acceso a todos los modulos</h2>
                <MdVerified className="text-green-600 text-2xl" />
            </div>
            
        </div>

    );

};