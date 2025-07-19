import { createContext, useState } from "react";

export const cartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  function handleAddToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        setToastMessage(`${product.category} added to cart`);
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        setToastMessage(`${product.category} added to cart`);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // Auto-hide toast after 2 seconds
    setTimeout(() => setToastMessage(""), 2000);
  }
  function Toast({ message }) {
    return (
      <div className="fixed top-6 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
        {message}
      </div>
    );
  }

  const handleQuantityChange = (productId, type) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        if (type === "increment") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (type === "decrement" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCart(updatedCart);
  };

  const handleDeleteItem = (itemToDelete) => {
    const updatedCart = cart.filter((item) => {
      // setToastMessage(`${item.category} deleted from cart`);
      return itemToDelete !== item.id;
    });
    // setTimeout(() => setToastMessage(""), 2000);
    setCart(updatedCart);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        toastMessage,
        handleQuantityChange,
        handleDeleteItem,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
