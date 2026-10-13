import  { useState } from 'react';
import { FormularioProducto } from '../FormularioProducto/FormularioProducto';


export function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        precio: '',
        stock: ''
        });
    const [imagenFile, setImagenFile] = useState(null);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
            setDatosForm({
            ...datosForm,
            [name]: value
            });
    };

    const manejarCambioImagen = (e) => {
    setImagenFile(e.target.files[0]);
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        if (!imagenFile) {
            alert('No se ha seleccionado ninguna imagen.');
        return;
        }

    const apiKey = import.meta.env.VITE_API_KEY;
    const formData = new FormData();
    formData.append('image', imagenFile);

    try{
        console.log("Subiendo imagen a Imgbb...");
        const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, 
        {
            method: 'POST',
            body: formData
        });

        const datosImgbb = await respuestaImgbb.json();

        if (datosImgbb.success) {
            console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);  

            const productoCompleto = {
                ...datosForm,
                urlImagen: datosImgbb.data.url
            };

            console.log("Producto completo:", productoCompleto);

        } else {
                throw new Error('Error al subir la imagen a Imgbb.');
        }
        } catch (error) {
            console.error('Error al subir la imagen:', error);
            alert('Error al subir la imagen. Por favor, inténtelo de nuevo.');
        }
        };

    return (
    
    <FormularioProducto
    datosForm={datosForm}
    manejarCambio={manejarCambio}
    manejarEnvio={manejarEnvio}
    manejarCambioImagen={manejarCambioImagen}
    />
    
    );
}