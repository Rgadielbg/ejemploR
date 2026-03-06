import { createContext,useState,useContext, use } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  //Funcion para facilitar el login/logout

const InicarSesion =(token)=>{
  localStorage.setItem('token', token);
  set

}

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
        </AuthContext.Provider>
  );
};

export const useAuth = () =>{
    const context =useContext(AuthContext);
    if(!context){
        throw new Error("useAuth debe usarse dentro de un AuthProvider")
    }
    return context;
};


