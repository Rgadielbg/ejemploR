import { useState } from "react";
import Tarjeta from "../Tarjeta"
import Encabezado from "../Encabezado"
import Pie from "../Pie"
import './App.css'

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div>
      <Encabezado cambiarVista={setVista} />
      <Tarjeta vista={vista}/>
      <Pie/>
    </div>
  )
}

export default App