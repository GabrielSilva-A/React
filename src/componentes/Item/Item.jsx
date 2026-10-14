import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState } from "react";
import "./Item.css";


export function Item({ id, nombre, autor, año, precio, stock, imagen }) {
    const producto = { id, nombre, autor, año, precio, stock, imagen };

    const { addToCart } = useCart();
    const [cantidad, setCantidad] = useState(1);

    const handleAddToCart = () => {
        addToCart(producto, cantidad);
        alert(`Se han agregado ${cantidad} unidades de ${nombre} al carrito`);
    };

    const [favorito, setFavorito] = useState(false);

    const marcarFavorito = () => {
        setFavorito(!favorito);
    };

    return (
        <div className="item" style={{width: '20rem', height: 'auto'}} >
            <div className="images">
                <img src={`${imagen}`}
                alt={nombre}
                style={{ width: '50rem', height: '30rem'
                }}/>
            </div>
            <div className="details">
            <h3>{nombre}</h3>
            <p>Autor: {autor}</p>
            <p>Año: {año}</p>
            <p>Precio: ${precio}</p>
            <p>Stock: {stock}</p>
            <Link to={`/libros/${id}`}>Ver detalle</Link><br />
            <div>
                <button onClick={marcarFavorito}>
                    {favorito ? "★" : "☆"}
                </button><br />

                <button onClick={handleAddToCart}>
                    +🛒
                </button>
            </div>
            </div>
        </div>
);
}