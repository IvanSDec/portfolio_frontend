/**
 * @file main.jsx
 * @description Punto de entrada principal de la aplicación React.
 * Configura el enrutamiento, el store de Redux y la estructura base de la aplicación.
 * Define las rutas principales y el layout compartido.
 * 
 * @author Iván Sánchez
 */
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Admin from './pages/admin/index';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import Menu from './components/layout/menu';
import Footer from './components/layout/footer';
import Devs from './pages/Devs';
import Experience from './pages/Experience';
import Me from './pages/Me';
import NotFound from './pages/NotFound';

/**
 * @component Layout
 * @description Componente de layout compartido que envuelve las páginas principales.
 * Incluye el menú de navegación y el pie de página.
 * Utiliza Outlet de React Router para renderizar el contenido de las rutas anidadas.
 * 
 * @returns {JSX.Element} Layout base con menú, contenido dinámico y footer
 */
const Layout = () => (
	<div className="w-full h-auto">
		<Menu />
		<Outlet />
		<Footer />
	</div>
);

// Inicialización del root de React
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * @section Renderizado Principal
 * @description Renderiza la aplicación con las siguientes configuraciones:
 * - Provider de Redux para el manejo del estado global
 * - BrowserRouter con soporte para transiciones v7
 * - Sistema de rutas con layout compartido y rutas independientes
 */
root.render(
	// Proveedor del store de Redux
	<Provider store={store}>
		{/* 
		 * @section Router Principal
		 * @description Configuración del router con soporte para transiciones
		 * future={{ v7_startTransition: true }} habilita las transiciones de React Router v7
		 */}
		<BrowserRouter future={{ v7_startTransition: true }}>
			{/* 
			 * @section Sistema de Rutas
			 * @description Define las rutas de la aplicación:
			 * 
			 * Rutas con Layout Compartido:
			 * - /: Página principal (Home)
			 * - /devs: Página de desarrolladores
			 * 
			 * Rutas Independientes:
			 * - /about: Página Acerca de
			 * - /login: Página de inicio de sesión
			 * - /contact: Página de contacto
			 * - /admin: Panel de administración
			 */}
			<Routes>
				{/* Rutas que utilizan el layout compartido */}
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/devs" element={<Devs />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/me" element={<Me />} />
					<Route path="/contact" element={<Contact />} />
				</Route>

				{/* Rutas independientes sin layout compartido */}
				<Route path="/notFound" element={<NotFound />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);