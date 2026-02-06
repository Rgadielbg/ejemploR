import coca from './assets/coca.png';
import fanta from './assets/fanta.png';
import sidral from './assets/sidral.png';

import './Galeria.css'
function Galeria() {
    return (

        <div className='GaleriaDiv'>
            <h2>Galería</h2>
            <img src={coca} alt='Logotipo' />
            <img src={fanta} alt='Logotipo' />
            <img src={sidral} alt='Logotipo' />
        </div>
    );
}

export default Galeria