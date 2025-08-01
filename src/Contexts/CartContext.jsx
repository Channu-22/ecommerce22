import { createContext, useState } from "react";
import { useAuth } from "./AuthProvider";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";


export const cartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  const [toastMessage, setToastMessage] = useState("");
  // const [messageWishList, setMessageWishList] = useState("");

  

  const { user } = useAuth();

  // ADDING ITEM TO CART
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

  // SHOWING POP UP MESSAGE 
  function Toast({ message }) {
    return (
      <div className="fixed top-6 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
        {message}
      </div>
    );
  }
  
  //  ADDING QUANTITY 
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
  // DELETING ITEM FOR CART
  const handleDeleteItem = (itemToDelete) => {
    const updatedCart = cart.filter((item) => {
      // setToastMessage(`${item.category} deleted from cart`);
      return itemToDelete !== item.id;
    });
    // setTimeout(() => setToastMessage(""), 2000);
    setCart(updatedCart);
  };


    const removeFromWishlist = (productId) => {
    if (!user) return;

    setWishlist((prev) => {
      const updated = prev.filter((item) => item.id !== productId);
      // deleteItemFromFirestore("wishlist", user, productId);
      // showTemporaryMessage("❌ Removed from wishlist.");
      return updated;
    });
  };

  // ✅ Add to wishlist and Firestore
  const addToWishlist = (product) => {
    if (!user) return;

    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        setToastMessage(`${product.category} added to WishList`);
        // showTemporaryMessage("✅ Item already in wishlist.");
        return prev;
      }

      // addItemToFirestore("wishlist", user, product);
      // showTemporaryMessage("✅ Added to wishlist.");
      setToastMessage(`${product.category} added to WishList`);
      return [...prev, product];
    });
    setTimeout(() => setToastMessage(""), 2000);
  };
  

   const handlePlaceOrder = async () => {
    if (!user) return;
  
    try {
      const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

      const orderData = {
        items: cart,
        userId: user.uid,
        createdAt: serverTimestamp(),
        total: totalCost,
      };
      const db = getFirestore();
  
      await addDoc(collection(db, "orders"), orderData);
  
      // reducer({ type: "CLEAR_CART" });
      // showTemporaryMessage("✅ Order placed successfully!");
    } catch (error) {
      console.error("Order placement failed:", error);
      // showTemporaryMessage("❌ Failed to place order.");
    }
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
        removeFromWishlist,
        wishlist,
        setWishlist,
        addToWishlist,
        handlePlaceOrder
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
