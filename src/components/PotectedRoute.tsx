import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth/useAuth';
import LoadingWrapper from './layouts/LoadingWrapper';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  const { user, loading } = useAuth();

  if(loading) return <LoadingWrapper />

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="main-wrapper">
      {children}
    </main>
  );
};

export default ProtectedRoute;
