import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Header.css';

function Header() {
    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();
return (
<header className="header">
<nav>
    <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/formulario">Alta de producto</Link></li>
        <li><Link to="/carrito">Carrito 🛒 {totalItems > 0 && <span>{totalItems}</span>}</Link></li>
    </ul>
</nav>
</header>
);
}

export default Header;