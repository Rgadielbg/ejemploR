import miImagen from './src/assets/imagenes/Logotipo.png';
import facebook from './src/assets/imagenes/facebook.png';
import instagram from './src/assets/imagenes/instagram.png';
import x from './src/assets/imagenes/x.png';
import youtube from './src/assets/imagenes/youtube.png';
import linkedin from './src/assets/imagenes/linkedin.png';
import './Encabezado.css'
import Clima from './src/Clima';



function Encabezado({cambiarVista}){
    return (
        <div className='encabezadoDiv'>
            <Logotipo />
            <Menu cambiarVista={cambiarVista}/>
            <Redes />
        </div>
    )
}

function Logotipo(){
    return (
        <div className='logoDiv'>
            <img src={miImagen} alt='Logotipo'/>
        </div>
    )
}

function Menu({cambiarVista}){
    return (
        <div className='menuDiv'>
            <ul>
                <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
                <li onClick={() => cambiarVista("Productos")}>Productos</li>
                <li onClick={() => cambiarVista("Galeria")}>Galería</li>
                <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
                <li onClick={() => cambiarVista("Contacto")}>Contacto</li>
            </ul>
        </div>
    )
}

function Redes(){
    return (
        <div className='redesDiv'>
            <ul>
                <li><a href=''><img src={facebook} alt='Logotipo'/></a></li>
                <li><a href=''><img src={instagram} alt='Logotipo'/></a></li>
                <li><a href=''><img src={x} alt='Logotipo'/></a></li>
                <li><a href=''><img src={youtube} alt='Logotipo'/></a></li>
                <li><a href=''><img src={linkedin} alt='Logotipo'/></a></li>
            </ul>
            <Clima/>
        </div>
    )
}

export default Encabezado