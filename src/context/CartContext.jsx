import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  // NEW: clear all items in cart (after checkout)
  const clearCart = () => {
    setCart([]); // reset cart to empty array
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart // <-- Make sure this is exported
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
