import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import APIClient from "../api/API"; 

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 PROTECTED ROUTE COMPONENT - RUTA PROTEGIDA 🎨
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * 🔒 FUNCIONALIDAD:
 *    • Protege rutas verificando la autenticación y el rol del usuario.
 * 
 * 👨‍💻 Autor: Iván Sánchez
 * ═══════════════════════════════════════════════════════════════════════
*/
const ProtectedRoute = ({ requiredRole }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("auth_token");
      if (!token) return setAuthorized(false);

      try {
        const res = await APIClient.user.me({
          headers: { Authorization: `Bearer ${token}` },
        });
        const user = res.user;
        if (requiredRole && user.rol !== requiredRole) {
          setAuthorized(false);
        } else {
          setAuthorized(true);
        }
      } catch (err) {
        setAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, [requiredRole]);

  if (isLoading) return <p>Cargando...</p>;
  if (!authorized) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;