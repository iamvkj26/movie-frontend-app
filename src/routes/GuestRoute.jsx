import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const GuestRoute = ({ children }) => {

    const { token } = useAuth();

    if (token) return <Navigate to="/" replace />;

    return children;
};

export default GuestRoute;