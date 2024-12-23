import { MdDoNotDisturbOn } from "react-icons/md"
import { MdVerified } from "react-icons/md"

export default function Permissions () {

    return(

        <div className="mt-[50px] w-[350px] h-auto border-solid border-2 border-gray-400 rounded-md p-[25px]">

            <h2 className="text-xl mb-[40px]">Permisos del perfil</h2>
            
            <div className="flex justify-between items-center gap-5 mt-[10px] w-[280px]">
                Edicion de Proyectos
                <MdDoNotDisturbOn className="text-red-600 text-2xl" />
            </div>
            
            <div className="flex justify-between items-center gap-5 mt-[10px] w-[280px]">
                Edicion de Skills
                <MdDoNotDisturbOn className="text-red-600 text-2xl" />
            </div>
            
            <div className="flex justify-between items-center gap-5 mt-[10px] w-[280px]">
                Edicion de Información
                <MdDoNotDisturbOn className="text-red-600 text-2xl" />
            </div>

            <div className="flex justify-between items-center gap-5 mt-[10px] w-[280px]">
                Acceso a todos los modulos
                <MdVerified className="text-green-600 text-2xl" />
            </div>
        </div>

    )

}