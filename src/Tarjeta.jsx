
import Logo2 from './assets/imagenes/Logo2.png'
import Logo3 from './assets/imagenes/Logo3.png'
import fanta from './assets/imagenes/fanta.png'
import sidral from './assets/imagenes/sidral.png'
import '../Tarjeta.css'
import coca from './assets/imagenes/coca.png'
import Promos from './Promos'
import  api  from './services/api';
import { useEffect, useState } from "react";

function Tarjeta({ vista }) {
  const vistas = {
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
      <TarjetaComponent8 />
    </>
  );
}

function Productos() {
   const [productos, setProductos] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        const obtenerProductos = async () => {
            try{
                const response = await api.get("products");
                setProductos(response.data);
            } catch (error){
                console.error('Error al obtener los productos:', error);
            } finally{
                setLoading(false);
            }
        };
        obtenerProductos();
    }, [])
    if (loading) {
        return <p>Cargando productos...</p>
    } 
    return (
        <div>
            <main className='classmain'>
                <header>
                    <h1>Nuestro catalogo</h1>
                </header>
                {productos.map((producto)=>(
                   <article key ={producto.id} className='classArticle'>
                    <p>{producto.title}</p>
                    <p>{producto.description}</p>
                    <img src={producto.image} alt={producto.title} className='classImg'/>
                    <p>${producto.price}</p>
                    </article>
                ))}
            </main>
        </div>
    );
}

function Galeria() {
    return<Galerias />
}

function Sucursales() {
  return( 
  <>
  <TarjetaComponent9 />
  <Promos/>
  
   
  </>
  )
}

function Contacto() {
  return (
    <>


      <TarjetaComponent7 />
    </>
  );
}
function TarjetaComponent() {
  return (
    <>
   
    <div className='TarjetaDiv'>
      <img src={Logo2} alt='Logotipo' />
      <h3>Coca-Cola</h3>
      <p>Hola, A ver si me quiere salir este </p>

    </div>
    </>
  );
}

function TarjetaComponent3() {
  return (
    <div className='TarjetaDiv2'>
      <img src={Logo3} alt='Logotipo' />
      <h3>Sprite</h3>
      <p>este sabor esta feito</p>
    </div>
  );
}
function TarjetaComponet4() {
  return (
    <div className='TarjetaDiv4'>
      <img src={fanta} alt='Logotipo' />
      <h3>Fanta</h3>
      <p>El mejor sabor de naranja</p>
    </div>
  );
}
function TarjetaComponet5() {
  return (
    <div className='TarjetaDiv5'>
      <img src={sidral} alt='Logotipo' />
      <h3>Sidral Mundet</h3>
      <p>El mismo sabor sin calorias</p>
    </div>

  );
}


function TarjetaComponent7() {
  return (
    <div className='contacto'>
      <h2>Contacto</h2>
      <form className='contactoForm'>
        <div className='formGroup'>
          <label>Nombre:</label>
          <input type="text" placeholder="Tu nombre" />
        </div>

        <div className='formGroup'>
          <label>Apellidos:</label>
          <input type="text" placeholder="Apellidos" />
        </div>

        <div className='formGroup'>
          <label>Email:</label>
          <input type="email" placeholder="tu@email.com" />
        </div>
        <div className='formGroup'>
          <label>Teléfono:</label>
          <input type="tel" placeholder="+52 746 130 1397" />
        </div>

        <button type="submit" className='submitBtn'>Enviar</button>
      </form>
    </div>
  );
}
function TarjetaComponent8() {
  return (
    <div className='acercade'>
      <h2>Acerca de</h2>
      <p>SOMOS UNA EMPRESA QUE MEJORA TU SALUD Y TU VIDA</p>
      <img src={coca} alt='Logotipo' />
    </div>
  );
}
function Galerias() {
    return (

        <div className='GaleriaDiv'>
            <h2>Galería</h2>
            <img src={coca} alt='Logotipo' />
           
        </div>
    );
}
function TarjetaComponent9() {   
    return (
      <>
      
        <div className='sucursalesDiv'>
          <TarjetaComponent/>
        
            <h2>Sucursales</h2>
            <p>dkjbc-ñcvnbsda-c</p>   
            <p>dvdvcdvdvecv</p>
        </div>
        </>
    );
} 


export default Tarjeta