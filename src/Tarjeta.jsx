
import Logo2 from './assets/imagenes/Logo2.png'
import Logo3 from './assets/imagenes/Logo3.png'
import fanta from './assets/imagenes/fanta.png'
import sidral from './assets/imagenes/sidral.png'
import '../Tarjeta.css'
import api from './Services/api'
import coca from './assets/imagenes/coca.png'
import Promos from './Promos'

import { useEffect, useState } from "react";
import RegistrarProducto from './RegistrarProducto.JSX'

import RegistrarUsuario from './RegistrarUsuario.jsx'
import RegistrarCarrito from './RegistrarCarrito.jsx'
import IniciarSesion from './IniciarSesion.jsx'

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await api.get("users");
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        setError(error.message || 'Error al cargar los usuarios');
      } finally {
        setLoading(false);
      }
    };
    obtenerUsuarios();
  }, []);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  const handleEditar = (usuario) => {
    console.log('Editar usuario:', usuario);
  };

  const handleEliminar = (id) => {
    console.log('Eliminar usuario con ID:', id);
  };

  return (
    <div>
      <RegistrarUsuario />
      <h1>Gestión de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.name.firstname}</td>
              <td>{usuario.name.lastname}</td>
              <td>{usuario.email}</td>
              <td>{usuario.phone}</td>
              <td>{usuario.address.street}, {usuario.address.city}</td>
              <td>
                <button
                  onClick={() => handleEditar(usuario)}
                  title="Editar"
                >
                  <h6>Editar</h6>
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleEliminar(usuario.id)}
                  title="Eliminar"
                >
                  <h6>Eliminar</h6>
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


<IniciarSesion />




function Tarjeta({ vista }) {
  const vistas = {
    Inicio: <Inicio />,
    AcercaDe: <AcercaDe />,
    Productos: <Productos />,
    Galeria: <Galeria />,
    Sucursales: <Sucursales />,
    Contacto: <Contacto />,
    Usuarios: <Usuarios />,
    Carrito: <Carrito />,
    Iniciar: <IniciarSesion />
  };

  return (
    <div className='ContenedorDiv'>
      {vistas[vista] || <Inicio />}
    </div>
  );
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await api.get("products");
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        setError(error.message || 'Error al cargar productos');
      } finally {
        setLoading(false);
      }
    };
    obtenerProductos();
  }, [])

  if (loading) {
    return <p>Cargando productos...</p>
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>
  }

  return (
    <div>
      <RegistrarProducto />
      <main className='classmain'>
        <header>
          <h1>Nuestro catálogo</h1>
        </header>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {productos.map((producto) => (
            <div key={producto.id} className='TarjetaDiv'>
              <img src={producto.image} alt={producto.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
              <h3>{producto.title}</h3>
              <p>{producto.description}</p>
              <p><strong>${producto.price}</strong></p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function Galeria() {
  return <Galerias />
}

function Sucursales() {
  return (
    <>
      <TarjetaComponent9 />
      <Promos />


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

function TarjetaComponentI() {
  return (
    <div className='TarjetaDivI'>
      <img src={fanta} alt='Logotipo' />
      <h3>Fanta</h3>
      <p>El mejor sabor de naranja</p>
    </div>

  )
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
        <TarjetaComponent />
        <h2>Sucursales</h2>
        <p>dkjbc-ñcvnbsda-c</p>
        <p>dvdvcdvdvecv</p>
      </div>
    </>
  );
}
function Carrito() {

  const [ordenes, setOrdenes] = useState([]);
  const [loading, setLoading] = useState(true);


  const handleRemove = (ordenId, productId) => {
    console.log(`Quitar producto ${productId} del pedido ${ordenId}`);

  };

  useEffect(() => {
    const obtenerOrdenes = async () => {
      try {
        const response = await api.get("carts");
        setOrdenes(response.data);
      } catch (error) {
        console.error('Error al obtener las órdenes:', error);
      } finally {
        setLoading(false);
      }
    };
    obtenerOrdenes();
  }, []);

  if (loading) {
    return <p>Cargando Pedidos...</p>
  }

  return (

    <div className="carrito-container">


      <h2>Carrito de Compras</h2>


      <div className="carrito-grid">
        {ordenes.map((orden) => (
          <div key={orden.id} className='orden-card'>
            <h3>Pedido #{orden.id}</h3>
            <p><strong>Usuario:</strong> {orden.userId}</p>
            <p><strong>Fecha:</strong> {new Date(orden.date).toLocaleDateString()}</p>

            <h4>Productos:</h4>
            <ul className="productos-list">
              {orden.products.map((producto) => (
                <li key={producto.productId}>
                  <span>Producto ID: {producto.productId} - Cantidad: {producto.quantity}</span>
                  <button
                    className="btn-eliminar"
                    onClick={() => handleRemove(orden.id, producto.productId)}
                    title="Eliminar producto"
                  >

                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <RegistrarCarrito />
      </div>

    </div>
  );
};


export default Tarjeta