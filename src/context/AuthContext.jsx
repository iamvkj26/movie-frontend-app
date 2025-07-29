import { createContext, useState, useContext } from "react";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuthState] = useState({
        token: secureLocalStorage.getItem("token"), role: JSON.parse(secureLocalStorage.getItem("role"))
    });

    const setAuth = (token, role) => {
        secureLocalStorage.setItem("token", token);
        secureLocalStorage.setItem("role", JSON.stringify(role));
        setAuthState({ token, role });
    };

    const clearAuth = () => {
        secureLocalStorage.removeItem("token");
        secureLocalStorage.removeItem("role");
        setAuthState({ token: null, role: "" });
        toast.success("Logged out successfully.");
    };

    return (
        <AuthContext.Provider value={{ ...auth, setAuth, clearAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);