import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuthState] = useState({
        token: localStorage.getItem("token"), role: JSON.parse(localStorage.getItem("role"))
    });

    const setAuth = (token, role) => {
        localStorage.setItem("token", token);
        localStorage.setItem("role", JSON.stringify(role));
        setAuthState({ token, role });
    };

    const clearAuth = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setAuthState({ token: null, role: "" });
    };

    return (
        <AuthContext.Provider value={{ ...auth, setAuth, clearAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);