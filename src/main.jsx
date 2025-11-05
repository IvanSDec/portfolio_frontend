/**
 * @component main.jsx
 * @description Punto de entrada principal de la aplicación React.
 * @author Iván Sánchez
*/
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Work from './pages/Work';
import Trial from './pages/Trial';
import NotFound from './pages/NotFound';
import Menu from './components/layout/menu';
import Footer from './components/layout/footer';
import ProtectedRoute from './config/ProtectedRoute';
import './index.css';

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

        {/* 🏠 Rutas abiertas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
        </Route>

        {/* 🔐 Login y errores */}
        <Route path="/login" element={<Login />} />
        <Route path="/notFound" element={<NotFound />} />

        {/* 🔒 Admin - solo rol 1 */}
        <Route element={<ProtectedRoute requiredRole={1} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        {/* 🔒 Trial - solo rol 2 */}
        <Route element={<ProtectedRoute requiredRole={2 && 1} />}>
          <Route path="/trial" element={<Trial />} />
        </Route>

        {/* Redirección si no coincide ninguna ruta */}
        <Route path="*" element={<Navigate to="/notFound" replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
