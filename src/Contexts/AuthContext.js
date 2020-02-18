import React, {createContext, useContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({isLoggedIn: isLoggedInProp, children}) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInProp);
    
    const Login = async(token, keepLogin) => {
        try {
            if (keepLogin) {
                await localStorage.setItem("isLoggedIn", "true");
                await localStorage.setItem("jwt", token);
            }
            setIsLoggedIn(true);
        } catch(e){
            console.log(e)
        }
      }
    
    const Logout = async() => {
        try {
            await localStorage.setItem("isLoggedIn", "false")
            setIsLoggedIn(false);
        } catch(e) {
            console.log(e)
      }
    }
    return <AuthContext.Provider value={{isLoggedIn, Login, Logout}}>{children}</AuthContext.Provider>
};

export const useIsLoggedIn = () => {
    const {isLoggedIn} = useContext(AuthContext);
    return isLoggedIn;
};

export const useLogin = () => {
    const {Login} = useContext(AuthContext);
    return Login;
};

export const useLogout = () => {
    const {Logout} = useContext(AuthContext);
    return Logout;
};
