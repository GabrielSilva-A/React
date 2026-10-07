import styles from './FormularioProducto.module.css';

export function FormularioProducto({
    datosForm,
    manejarCambio,
    manejarEnvio,
    manejarCambioImagen
}) {

    return (
        <form
            className={styles.formulario}
            onSubmit={manejarEnvio}
        >
            <h3>Agregar Nuevo Producto</h3>

            <div className={styles.campo}>
                <label>Nombre del Producto:</label>

                <input
                    type="text"
                    name="nombre"
                    placeholder="Ej: Teclado Mecánico"
                    value={datosForm.nombre || ''}
                    onChange={manejarCambio}
                />
            </div>

            <div className={styles.campo}>
                <label>Precio:</label>

                <input
                    type="number"
                    name="precio"
                    placeholder="Ej: 95"
                    value={datosForm.precio || ''}
                    onChange={manejarCambio}
                />
            </div>

            <div className={styles.campo}>
                <label>Stock:</label>

                <input
                    type="number"
                    name="stock"
                    placeholder="Ej: 5"
                    value={datosForm.stock || ''}
                    onChange={manejarCambio}
                />
            </div>

            <div className={styles.campo}>
                <label>Imagen:</label>

                <input
                    type="file"
                    name="imagen"
                    onChange={manejarCambioImagen}
                />
            </div>

            <button
                className={styles.boton}
                type="submit"
            >
                Guardar Producto
            </button>
        </form>
    );
}