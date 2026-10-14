import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductoDetalle = () => {

        const { id } = useParams();
        const [libros, setLibros] = useState(null);

        useEffect(() => {
            fetch('/data/Libros.json')
            .then(response => response.json())
            .then(data => {
                const libroEncontrado = data.find(p => p.id === id);
                setLibros(libroEncontrado);
                })
            .catch(error => console.error("Error al cargar el producto:", error));
        }, [id]);

        if (!libros) {
            return <h2>Cargando detalle del producto...</h2>;
        }
        if (!libros.id) {
        return <h2>Producto no encontrado.</h2>;
        }
        
    return (
        <div>
            <h2>Detalle del Producto: {libros.nombre}</h2>
            <img src={libros.imagen} alt={libros.nombre} style={{ maxWidth:
            '400px' }} />
            <h3>${libros.precio}</h3>
            <p>{libros.descripcion}</p>
        </div>
    );
};
export default ProductoDetalle;