import './App.css';
import { Layout } from './componentes/Layout/Layout';
import { Libros } from './componentes/Libros/Libros';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { FormularioContainer } from './componentes/FormularioContainer/FormularioContainer';

function App() {
return (
<Layout>
{/* Todo lo que pongamos acá adentro irá donde estaba {children} */}
<h1>¡Bienvenidos a mi página!</h1>
<p>Este es el contenido principal.</p>
<ItemListContainer Mensaje="Nuestros productos destacados" />
<FormularioContainer />
</Layout>
);
}

export default App;
