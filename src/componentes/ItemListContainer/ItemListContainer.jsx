import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import { useState, useEffect } from "react";


export function ItemListContainer({ Mensaje }) {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetch('/data/Libros.json')
        .then(respuesta => {
        console.log('Respuesta cruda del servidor:', respuesta);
        return respuesta.json();
        })
        .then(datos => {
        console.log('¡Productos cargados!', datos);
        setDatos(datos);
        })
        .catch(error => {
        console.error('¡Ups! Hubo un error:', error);
        })
        .finally(() => {
        });
    }, []);

    return (
            <div>
            <h2 className={styles.subtitulo}>{Mensaje}</h2>
            <div className={styles.productos}>
                <ItemList libros={datos} />
            </div>
            </div>
        );
}