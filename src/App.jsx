import { useState } from "react";
import Tarjeta from "./Tarjeta"
import Encabezado from "../Encabezado"
import Pie from "../Pie"


function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div className="app-container">
      <Encabezado cambiarVista={setVista} />
      <Tarjeta vista={vista}/>
      <Pie/>
    </div>
  )
}

export default App