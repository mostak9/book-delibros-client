import { useContext } from "react";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthContext)
    const location = useLocation();
    
    if(isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if(!user) {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute;