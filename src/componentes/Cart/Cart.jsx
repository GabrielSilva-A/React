import React from 'react';
import { useCart } from '../../context/CartContext'; // 1. Importamos el hook

const Cart = () => {
    const { cart, clearCart, getCartTotal } = useCart();

    if (cart.length === 0) {
      return (
        <div>
        <h1>El carrito está vacío</h1>
        <p>Agrega productos para continuar la compra.</p>
        </div>
        );
    }

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.nombre}</h4>
          <img src={item.imagen} alt={item.nombre} style={{ width: '100px', height: '100px' }} />
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.precio}</p>
          <p>Subtotal: ${item.precio * item.quantity}</p>
        </div>
      ))}
        <hr />
        <h6>Total a pagar: ${getCartTotal()}</h6>
        <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
    );
};
export default Cart;