import BannerHome from "../components/Home/BannerHome"
import InformationHome from "../components/Home/InformationHome"
import DevsHome from "../components/Home/DevsHome"
import ModelHome from "../components/Home/ModelHome"

export default function Home() {

	return (
		
		<div className="w-full h-auto overflow-hidden">			
			<BannerHome />
			<InformationHome />
			<DevsHome />
			<ModelHome />
		</div>

	)

}

