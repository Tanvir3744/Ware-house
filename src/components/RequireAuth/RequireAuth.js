import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

function RequireAuth({ Children }) {
    let [user] = useAuthState(auth);
    let location = useLocation();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return Children;

}
export default RequireAuth;