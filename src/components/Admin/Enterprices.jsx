import { useState } from "react";
import { PlusCircle } from "lucide-react";
import EnterpriceTable from "./Enterprices/EnterpriceTable";
import EnterpriceNew from "./Enterprices/EnterpriceNew";
import EnterpriceEdit from "./Enterprices/EnterpriceEdit";
import EnterpriceDelete from "./Enterprices/EnterpricesDelete";

export default function Enterprices() {
	const [modalType, setModalType] = useState(null);
	const [selectedEnterprice, setSelectedEnterprice] = useState(null);

	// Datos simulados de empresas
	const empresas = [
		{
			id: 1,
			nombre: "TechCorp",
			industria: "Software",
			estatus: "Activa",
			fundada: "2018-06-12",
			tamaño: "50-100 empleados",
			descripcion: "Desarrollo de soluciones empresariales SaaS.",
			servicios: ["Desarrollo web", "Consultoría"],
			logo: "https://via.placeholder.com/100",
		},
		{
			id: 2,
			nombre: "FinanciaMX",
			industria: "Finanzas",
			estatus: "Activa",
			fundada: "2015-02-20",
			tamaño: "20-50 empleados",
			descripcion: "Servicios financieros y soluciones de pago.",
			servicios: ["Plataforma de pagos", "API financiera"],
			logo: "https://via.placeholder.com/100",
		},
	];

	const closeModal = () => {
		setModalType(null);
		setSelectedEnterprice(null);
	};

	return (
		<div className="font-sans mx-4 md:mx-12 lg:mx-20 w-auto bg-gray-900 rounded-md p-6 md:p-10 h-auto min-h-[96vh] relative text-white">
			<h2 className="text-3xl md:text-4xl font-sans mb-6 ">Empresas</h2>

			<div className="mb-6">
				<button
					onClick={() => setModalType("crear")}
					className="flex font-sans items-center gap-2 border-2 border-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 transition-all"
				>
					<PlusCircle size={22} />
					Criar nova empresa
				</button>
			</div>

			<EnterpriceTable
				enterprices={empresas}
				onEdit={(ent) => {
					setSelectedEnterprice(ent);
					setModalType("ver");
				}}
				onDelete={(ent) => {
					setSelectedEnterprice(ent);
					setModalType("borrar");
				}}
			/>

			{modalType === "crear" && (
				<EnterpriceNew
					selectedEnterprice={selectedEnterprice}
					closeModal={closeModal}
				/>
			)}

			{modalType === "ver" && selectedEnterprice && (
				<EnterpriceEdit
					selectedEnterprice={selectedEnterprice}
					closeModal={closeModal}
				/>
			)}

			{modalType === "borrar" && selectedEnterprice && (
				<EnterpriceDelete
					selectedEnterprice={selectedEnterprice}
					closeModal={closeModal}
				/>
			)}
		</div>
	);
}