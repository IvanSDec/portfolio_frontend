import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Work from './pages/Work';
import Trial from './pages/Trial';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Menu from './components/layout/menu';
import Footer from './components/layout/footer';
import ProtectedRoute from './config/ProtectedRoute';
import MenuMobile from './components/layout/menuMobile';
import Contact from './pages/Contact';
import Me from './pages/Me';
import './index.css';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 MAIN COMPONENT - PUNTO DE ENTRADA 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Configuración de rutas y renderizado principal de la aplicación.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
const Layout = () => (
  <div className="w-full h-auto">
    <Menu />
    <MenuMobile/>
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
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="me" element={<Me />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/notFound" element={<NotFound />} />

        <Route element={<ProtectedRoute requiredRole={1} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route element={<ProtectedRoute requiredRole={2 && 1} />}>
          <Route path="/trial" element={<Trial />} />
        </Route>

        <Route path="*" element={<Navigate to="/notFound" replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
