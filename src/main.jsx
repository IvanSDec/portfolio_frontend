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
import Admin from './pages/Admin';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import Menu from './components/layout/menu';
import Footer from './components/layout/footer';
import NotFound from './pages/NotFound';
import Work from './pages/Work';

const Layout = () => (
	<div className="w-full h-auto">
		<Menu />
		<Outlet />
		<Footer />
	</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

	<Provider store={store}>

		<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>

			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>

				<Route path="/work" element={<Layout />}>
					<Route index element={<Work />} />
				</Route>

				<Route path="/notFound" element={<NotFound />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);