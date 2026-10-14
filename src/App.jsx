import './App.css';
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer';
import {Libros} from './componentes/Libros/Libros';
import {FormularioContainer} from './componentes/FormularioContainer/FormularioContainer';
import  ProductoDetalle  from './componentes/ProductoDetalle/ProductoDetalle';
import {Routes, Route} from 'react-router-dom';
import { Layout } from './componentes/Layout/Layout';
import Cart from './componentes/Cart/Cart';

function App() {

    return (
    
        <Routes >
          <Route element={<Layout />}>
            <Route path="/"  element={<ItemListContainer Mensaje="Libros Disponibles"/>}/>
            <Route path="/formulario" element={<FormularioContainer />}/>
            <Route path="/libros/:id" element={<ProductoDetalle Mensaje="Detalle del libro" />}/>
            <Route path="/carrito" element={<Cart />}/>
          </Route>
        </Routes>
    );
}

export default App;
