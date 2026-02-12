import './Promos.css'
import Mapa from './Mapa';
import Logotipo from './assets/imagenes/Logotipo.png'


function Promos(){
  return (
    <div className='TarjetaDiv1'>
      <img src={Logotipo} alt='Logotipo' />
    <Mapa
    lat={20.276630146830644}
    lng={-97.95845980964982}
    nombre={"Sucursal centro"}/>
    </div>
  );
}

export default Promos;