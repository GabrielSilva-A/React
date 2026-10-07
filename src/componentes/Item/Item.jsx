import { useState } from "react";
import "./Item.css";


export function Item({ nombre, autor, año, imagen }) {
    const [favorito, setFavorito] = useState(false);

    const marcarFavorito = () => {
        setFavorito(!favorito);
    };

    return (
        <div className="item" style={{width: '20rem', height: 'auto'}} >
            <div className="images">
                <img src={`${imagen}`} alt={nombre} style={{ width: '50rem', height: '30rem' }}/>
            </div>
            <div className="details">
            <h3>{nombre}</h3>
            <p>Autor: {autor}</p>
            <p>Año: {año}</p>
            <button onClick={marcarFavorito}>
                {favorito ? "★" : "☆"}
            </button>
            </div>
        </div>
);
}