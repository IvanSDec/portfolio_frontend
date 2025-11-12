import { useState } from "react";
import { PlusCircle } from "lucide-react";
import EnterpriceTable from "./Enterprices/EnterpriceTable";
import EnterpriceNew from "./Enterprices/EnterpriceNew";
import EnterpriceEdit from "./Enterprices/EnterpriceEdit";
import EnterpriceDelete from "./Enterprices/EnterpricesDelete";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 ENTERPRISES COMPONENT - COMPONENTE DE EMPRESAS 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Mostrar información de las empresas
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
export default function Enterprices() {
	const [modalType, setModalType] = useState(null);
	const [selectedEnterprice, setSelectedEnterprice] = useState(null);

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
		<>
			<div className="font-sans mx-4 md:mx-12 lg:mx-20 w-auto bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-6 md:p-10 h-auto min-h-[96vh] relative text-white">

				<div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-700/50 bg-black/20 rounded-lg p-4">
					<div className="flex gap-2">
						<div className="w-3 h-3 rounded-full bg-red-500/70"></div>
						<div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
						<div className="w-3 h-3 rounded-full bg-green-500/70"></div>
					</div>
					<div className="text-cyan-400/60 font-mono text-xs uppercase tracking-wider">
						Enterprices Manager
					</div>
				</div>

				<div className="mb-8 text-center">
					<h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-widest mb-3 font-mono">
						Empresas
					</h2>
					<div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
				</div>

				<div className="mb-8">
					<button
						onClick={() => setModalType("crear")}
						className="flex font-mono items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 text-white uppercase tracking-wider text-sm border border-cyan-400/30"
					>
						<PlusCircle size={20} />
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

				<div className="mt-8 pt-4 border-t border-slate-700/50 bg-black/20 rounded-lg p-4">
					<p className="text-slate-500 font-mono text-xs text-center uppercase tracking-wider">
						Total de empresas: {empresas.length}
					</p>
				</div>
			</div>

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
		</>
	);
}