import Permissions from "./Welcome/Permissions"
import ProyectsWelcome from "./Welcome/Proyects"

export default function WelcomeAdmin () {

    return(

        <div className="mx-[120px] w-[calc(100%-200px)] bg-white rounded-md p-[40px] h-[96vh] relative overflow-auto">

            <div className="welcome_admin w-full h-full absolute top-0 left-0 opacity-[0.15] z-0"></div>
            
            <h2 className="text-2xl ">Hola de nuevo, <span className="font-bold">Admin.</span> </h2>
            
            <div className="w-full h-full relative flex gap-[15px]">

                <Permissions />

                <ProyectsWelcome />

            </div>

        </div>

    );

};