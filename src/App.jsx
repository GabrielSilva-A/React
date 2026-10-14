import './App.css';
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer';
import {Libros} from './componentes/Libros/Libros';
import {FormularioContainer} from './componentes/FormularioContainer/FormularioContainer';
import  ProductoDetalle  from './componentes/ProductoDetalle/ProductoDetalle';
import {Routes, Route} from 'react-router-dom';
import { Layout } from './componentes/Layout/Layout';

function App() {
    return (
    
        <Routes >
          <Route element={<Layout />}>
            <Route path="/"  element={<ItemListContainer Mensaje="Destacados del mes"/>}/>
            <Route path="/productos" element={<ItemListContainer Mensaje="Nuestros productos destacados" />}/>
            <Route path="/destacados" element={<Libros Mensaje="Productos destacados" />}/>
            <Route path="/formulario" element={<FormularioContainer />}/>
            <Route path="/libros/:id" element={<ProductoDetalle Mensaje="Detalle del libro" />}/>
          </Route>
        </Routes>
    );
}

export default App;
