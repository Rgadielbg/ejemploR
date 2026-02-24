import React, { useState } from "react";
import axios from 'axios';
import './RegistrarProductos.css';

function RegistrarProducto() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();{title,price,description,category,image}
        try{
            const respuesta = await  useJsApiLoader.post('/products', nuevoProducto);
        console .log('Producto registrado:', respuesta.data);
        alert('¡Producto guardado con exito!');
        }catch (error){
            console.error('Error al registrar :', error);
    }
}
return (
    <div className="RegistrarProductoDiv">
        <h2>Registrar Producto</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <input
            type="number"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />
            <input
            type="text"
            placeholder="Imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            <input
            type="number"
            placeholder="Precio"    
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            
            <button type="submit">Registrar</button>

        </form>
    </div>
);
}


    export default RegistrarProducto