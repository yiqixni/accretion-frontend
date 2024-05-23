import { createContext, useContext, useState } from "react"; 

const AuthContext = createContext(undefined); 

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLogedIn] = useState(false); 

    const login = () => { setLogedIn(true) }; 
    const logout = () => { setLogedIn(false) }; 

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}; 

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within AuthProvider')
    }
    
    return context; 
}