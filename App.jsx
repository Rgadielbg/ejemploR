import "./App.css"
import { useState } from "react";
import ContenedorTragetas from "./Tarjeta"
import Encabezado from "./Encabezado"
import PieComponente from "./PieComponente"
import PromosContenedor from "./PromosContenedor"
import { AuthProvider } from "./src/AuthContext";

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div>
      <AuthProvider>
      <Encabezado cambiarVista={setVista} />
      <ContenedorTragetas vista={vista}/>

      </AuthProvider>
      
      <PromosContenedor />
      <PieComponente/>
    </div>
  )
}

export default App