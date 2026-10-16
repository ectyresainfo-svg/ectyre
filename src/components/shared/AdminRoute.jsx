import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import AppLoader from './AppLoader';

/**
 * Guard de ruta para el panel de administración.
 *
 * 🔒 Antes devolvía `children` sin comprobar nada (estaba "deshabilitado
 * temporalmente para desarrollo"): cualquiera podía abrir /admin en el
 * navegador y ver la interfaz completa. El backend seguía rechazando las
 * peticiones (401/403), pero la UI no debía mostrarse en absoluto.
 *
 * Reglas:
 *  - Sin token → /login.
 *  - Con token pero sin perfil cargado aún → cargarlo (loader mientras tanto).
 *  - Con perfil y role !== "admin" → /.
 *  - Con perfil y role === "admin" → renderiza el panel.
 */
const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated, user, loadProfile } = useAuth();

  useEffect(() => {
    if (isAuthenticated && !user) {
      loadProfile();
    }
  }, [isAuthenticated, user, loadProfile]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user) {
    // Token presente pero perfil aún no cargado (recién recargó la página,
    // o loadProfile sigue en curso). Nunca mostrar el panel sin saber el rol.
    return <AppLoader />;
  }

  if (user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
