import "./App.css"
import { useState } from "react";
import ContenedorTragetas from "./Tarjeta"
import Encabezado from "./Encabezado"
import PieComponente from "./PieComponente"
import PromosContenedor from "./PromosContenedor"

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div>
      <Encabezado cambiarVista={setVista} />
      <ContenedorTragetas vista={vista}/>
      
      <PromosContenedor />
      <PieComponente/>
    </div>
  )
}

export default App