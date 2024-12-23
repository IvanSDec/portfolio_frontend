import NavBar from "../../components/Admin/NavBar"
import WelcomeAdmin from "../../components/Admin/Welcome"

export default function Admin () {

    return(

        <div className="w-full h-full bg-gray-400 min-h-[100vh] pt-[10px]">

            <NavBar />

            <WelcomeAdmin />

        </div>

    )

}