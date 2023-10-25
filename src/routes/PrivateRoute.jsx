import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="flex justify-center mt-40">
        <progress className="progress w-56 bg-green-500"></progress>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
