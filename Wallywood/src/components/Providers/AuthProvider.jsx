import { createContext, useContext, useState, useEffect } from "react";
import propTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [loginData, setLoginData] = useState({});

    useEffect(() => {
        if (sessionStorage.getItem('access-token')) {
            setLoginData(JSON.parse(sessionStorage.getItem('access-token')))
        }
    }, [children])



    return (
        <AuthContext.Provider value={{ loginData, setLoginData }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: propTypes.node.isRequired
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
