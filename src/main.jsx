import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Admin from './pages/admin/index';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import Menu from './components/layout/menu';
import Footer from './components/layout/footer';
import Devs from './pages/Devs';
import Art from './pages/Art';
import Cv from './pages/Cv';

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

		<BrowserRouter future={{ v7_startTransition: true }}>

			<Routes>

				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/devs" element={<Devs />} />
					<Route path="/art" element={<Art />} />
					<Route path="/cv" element={<Cv />} />
				</Route>

				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/admin" element={<Admin />} />

			</Routes>

		</BrowserRouter>

	</Provider>

);