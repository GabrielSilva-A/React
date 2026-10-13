import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
return (
<header className="header">
<nav>
    <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/destacados">Destacados</Link></li>
        <li><Link to="/formulario">Alta de producto</Link></li>
    </ul>
</nav>
</header>
);
}

export default Header;