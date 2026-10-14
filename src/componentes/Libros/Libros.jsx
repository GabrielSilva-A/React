import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export function Libros({Mensaje}) {
    console.log('Libros component rendered with Mensaje:', Mensaje);
    const [libros, setLibros] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
    fetch('/data/Libros.json')
    
        .then((respuesta) => {
        if (!respuesta.ok) {
        throw new Error('No se pudo cargar la información de los productos');}
        return respuesta.json();
        })

        .then((datos) => {
        setLibros(datos);
        })

        .catch((error) => {
        setError(error.message);
        })

        .finally(() => {
        setCargando(false);
        });

        }, []);

        if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
        }
        if (error) {
        return <p>Error: {error}</p>;
        }

    return (
        <div>
            <h1>{Mensaje}</h1>
                <ul>
                {libros.map((libro) => (
                    <li key={libro.id}>
                        <h2>{libro.nombre}</h2>
                        <img src={libro.imagen} alt={libro.nombre} width="150" />
                        <p>Precio: ${libro.precio}</p>
                        <Link to={`/libros/${libro.id}`}>Ver detalle</Link>
                    </li>
                    ))}
                </ul>
        </div>
        );
    }

