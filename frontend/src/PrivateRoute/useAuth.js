import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = Cookies.get('status');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  

  return { isAuthenticated, setIsAuthenticated, loading, setLoading };
};

export default useAuth;