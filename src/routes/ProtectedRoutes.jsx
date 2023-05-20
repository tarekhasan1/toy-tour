import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('private route user: ', user);

    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return children;
    }
    else
    return <Navigate to="/login" state={{from: location}} replace={true}></Navigate>
}

export default ProtectedRoutes;