import './Promos.css'
import Mapa from './Mapa';
import Logotipo from './assets/imagenes/Logotipo.png'
import MapaLocalizacion from './MapaLocalizacion';


function Promos(){
  return (
    <>
    <div className='TarjetaDiv1'>
      <img src={Logotipo} alt='Logotipo' />
       <MapaLocalizacion/>
      

    </div>

    </>
  );
}

export default Promos;