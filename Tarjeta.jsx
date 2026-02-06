import imagen from './src/assets/imagenes/picture.png'
import Logo2 from './src/assets/imagenes/Logo2.png'
import Logo3 from './src/assets/imagenes/Logo3.png'
import coca from './src/assets/imagenes/coca.png'
import fanta from './src/assets/imagenes/fanta.png'
import sidral from './src/assets/imagenes/sidral.png'
import './Tarjeta.css'

function Tarjeta({vista}){
    const vistas={
        Inicio: <Inicio />,
        AcercaDe: <AcercaDe />,
        Productos: <Productos />,
        Galeria: <Galeria />,
        Sucursales: <Sucursales />,
        Contacto: <Contacto />
    }
    return (
        <div className='ContenedorDiv'>
            {vistas[vista] || <Inicio />}
        </div>
    )
}
function Inicio() {
  return (
    <>
      <TarjetaComponent />
      <TarjetaComponent />
      <TarjetaComponent />

    </>
  );
}

function AcercaDe() {
  return (
    <>
      <h1>Nostros somos la nueva empresa de bebidas</h1>
      <h2>aqui siempre los mejores</h2>
      <h2>Desde 1886</h2>
    </>
  );
}

function Productos() {
  return (
    <>
      <TarjetaComponent3 />  
      <TarjetaComponet4/>
      <TarjetaComponet5 />
    </>
  );
}

function Galeria() {
  return <h2>Galería</h2>;
}

function Sucursales() {
  return <h2>Sucursales</h2>;
}

function Contacto() {
  return(
<>

    <TarjetaComponent6 />
 </>
  );
}
function TarjetaComponent(){
    return(
        <div className='TarjetaDiv'>
            <img src={Logo2} alt='Logotipo'/>
            <h3>Coca-Cola</h3>
            <p>Hola, A ver si me quiere salir este </p>
           
        </div>
    )
}

function TarjetaComponent3(){
    return(
        <div className='TarjetaDiv2'>
            <img src={Logo3} alt='Logotipo'/>
            <h3>Sprite</h3>
            <p>este sabor esta feito</p>
        </div>
    )
}
function TarjetaComponet4(){
    return(
        <div className='TarjetaDiv4'>
            <img src={fanta} alt='Logotipo'/>
            <h3>Fanta</h3>
            <p>El mejor sabor de naranja</p>
        </div>
    );
}
function TarjetaComponet5(){
    return(
        <div className='TarjetaDiv5'>
            <img src={sidral} alt='Logotipo'/>
            <h3>Sidral Mundet</h3>
            <p>El mismo sabor sin calorias</p>
        </div>

    );
}
function TarjetaComponent6(){
    return(
        <div className='TarjetaDiv6'>
             <h2>Contacto: 7761037956</h2>
            <p>Ya  sabes donde encontarnos rgadielbg</p>
        </div>
    );
}

export default Tarjeta