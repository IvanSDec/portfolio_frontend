import { useSelector, useDispatch } from 'react-redux';
import { setOpen, setStateAdmin } from '../../redux/principalSlice';
import { useRef, useEffect } from 'react';
import { FaFolderOpen } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { IoIosInformationCircle } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";

export default function NavBar() {
	const principal = useSelector((state) => state.principal);
	const dispatch = useDispatch();
	const navRef = useRef(null);

	useEffect(() => {

		const handleClickOutside = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				dispatch(setOpen(true));
			};
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};

	}, [dispatch]);

	return (

		<div
			ref={navRef}
			className={`navbar ${principal.open ? "w-[70px]" : "w-[200px]"
				} h-[100vh] bg-gray-200 px-[20px] py-[40px] overflow-hidden flex justify-between items-start flex-col fixed top-0 left-0`}
		>

			<button
				className="flex justify-center items-center gap-3"
				onClick={() => dispatch(setOpen(!principal.open))}
			>
				<IoMenu className="text-[25px]" />
				{!principal.open && <h1 className="text-2xl text-pretty">Admin</h1>}
			</button>

			<div className="navbar-content flex justify-start items-start flex-col gap-[20px]">

				<button
					onClick={() => principal.stateAdmin === '' ? dispatch(setStateAdmin('')) : dispatch(setStateAdmin('')) }
					className="text-xl flex justify-center items-center gap-2 hover:text-sky-600"
				>
					<IoIosHome className="text-xl" />
					{!principal.open && "Home"}
				</button>

				<button
					onClick={() => principal.stateAdmin === 'proyects' ? dispatch(setStateAdmin('')) : dispatch(setStateAdmin('proyects')) }
					className="text-xl flex justify-center items-center gap-2 hover:text-sky-600"
				>
					<FaFolderOpen className="text-xl" />
					{!principal.open && "Proyectos"}
				</button>

				<button
					onClick={() => principal.stateAdmin === 'skills' ? dispatch(setStateAdmin('')) : dispatch(setStateAdmin('skills')) }
					className="text-xl flex justify-center items-center gap-2 hover:text-sky-600"
				>
					<GiSkills className="text-xl" />
					{!principal.open && "Skills"}
				</button>

				<button
					onClick={() => principal.stateAdmin === 'information' ? dispatch(setStateAdmin('')) : dispatch(setStateAdmin('information')) }
					className="text-xl flex justify-center items-center gap-2 hover:text-sky-600"
				>
					<IoIosInformationCircle className="text-xl" />
					{!principal.open && "Información"}
				</button>

				<button
					onClick={() => principal.stateAdmin === 'company' ? dispatch(setStateAdmin('')) : dispatch(setStateAdmin('company')) }
					className="text-xl flex justify-center items-center gap-2 hover:text-sky-600"
				>
					<FaBuildingUser className="text-xl" />
					{!principal.open && "Empresas"}
				</button>

			</div>

			<div className="navbar-content flex justify-start items-start flex-col gap-5">
				<button
					onClick={() => principal.stateAdmin === 'faqs' ? dispatch(setStateAdmin('')) : dispatch(setStateAdmin('faqs')) }
					className="text-xl flex justify-center items-center gap-2 hover:text-sky-600"
				>
					<FaQuestionCircle />
					{!principal.open && "FAQs"}
				</button>
			</div>

		</div>

	);

};