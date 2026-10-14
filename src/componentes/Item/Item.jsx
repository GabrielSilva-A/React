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
  <div className="item">

    <div className="images">
      <img src={imagen} alt={nombre} />
    </div>

    <div className="details">

      <div className="informacion-libro">
        <h3>{nombre}</h3>
        <p>Autor: {autor}</p>
        <p>Año: {año}</p>
        <p>Precio: ${precio}</p>
        <p>Stock: {stock}</p>
      </div>

      <div className="acciones-libro">

        <Link
          className="btn-detalle"
          to={`/libros/${id}`}
        >
          Ver detalle
        </Link>

        <div className="botones-libro">

          <button
            className="btn-favorito"
            onClick={marcarFavorito}
          >
            {favorito ? "★" : "☆"}
          </button>

          <button
            className="btn-carrito"
            onClick={handleAddToCart}
          >
            + 🛒 Agregar
          </button>

        </div>
      </div>

    </div>
  </div>
);
}