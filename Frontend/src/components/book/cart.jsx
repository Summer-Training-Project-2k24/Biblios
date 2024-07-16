import React, { useState, useEffect } from 'react';
import { getCart, removeFromCart, changeQuantity } from '../pages/cartFunction'; // Assume these functions are defined in cartService.js

const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      const cartData = await getCart();
      setCart(cartData);
    };

    fetchCart();
  }, []);

  const handleRemove = (cartItem) => {
    removeFromCart(cartItem.book.id);
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.filter(item => item.book.id !== cartItem.book.id),
    }));
  };

  const handleChangeQuantity = (cartItem, quantity) => {
    changeQuantity(cartItem.book.id, parseInt(quantity));
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map(item => 
        item.book.id === cartItem.book.id ? { ...item, quantity: parseInt(quantity) } : item
      ),
    }));
  };

  if (!cart || !cart.items.length) {
    return (
      <div className="not-found">
        <h2>Cart Page Is Empty!</h2>
        <a href="/">Go To Homepage</a>
      </div>
    );
  }

  return (
    <div className="container">
      <ul>
        {cart.items.map((cartItem, index) => (
          <li key={index}>
            <div>
              <img src={cartItem.book.imageUrl} alt={cartItem.book.name} />
            </div>
            <div>
              <a href={`/book/${cartItem.book.id}`}>
                {cartItem.book.name}
              </a>
            </div>
            <div>
              <select
                value={cartItem.quantity}
                onChange={(e) => handleChangeQuantity(cartItem, e.target.value)}
              >
                {[...Array(5).keys()].map(num => (
                  <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
              </select>
            </div>
            <div>
              {cartItem.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </div>
            <div>
              <button className="remove-button" onClick={() => handleRemove(cartItem)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="checkout">
        <div>
          <div className="foods-count">{cart.totalCount}</div>
          <div className="total-price">{cart.totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
        </div>
        <a href="/checkout">Proceed to Checkout</a>
      </div>
    </div>
  );
};

export default Cart;