import { createContext,useState,useContext, use } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //Funcion para facilitar el login/logout


  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);


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


