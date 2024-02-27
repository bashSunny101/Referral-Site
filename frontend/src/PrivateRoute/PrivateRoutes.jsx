import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const PrivateRoutes = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!isAuthenticated && !loading) {
      navigate('/refree/refreelogin');
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    // You might want to render a loading spinner or message here
    return null;
  }

  return isAuthenticated ? <Outlet /> : null;
};

export default PrivateRoutes;
