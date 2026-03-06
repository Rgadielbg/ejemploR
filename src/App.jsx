import { useState } from "react";
import Tarjeta from "./Tarjeta"
import Encabezado from "../Encabezado"
import Pie from "../Pie"
import { AuthProvider } from "./AuthContext";


function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div className="app-container">
      <AuthProvider>
      <Encabezado cambiarVista={setVista} />
      <Tarjeta vista={vista}/>
      </AuthProvider>
      <Pie/>
    </div>
  )
}

export default App