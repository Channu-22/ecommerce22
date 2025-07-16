import { Children, createContext, useState } from "react";

export const cartContext=createContext();

function CartProvider({children}) {
    const [cart,setCart] =useState([]);

    function handleAddToCart(product){
    // CHECK WETHER PRODUCT EXIST 
    // IF EXIST UPDATE THE QUANTITY
    // IF NOT ADD IT TO CART
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) =>  item.id === product.id);

      if(existingProduct){
        // PRODUCT EXIST INCREASE THE QUANTITY
        return prevCart.map((item) => item.id === product.id 
         ? {...item, quantity: item.quantity + 1} 
         : item
        )
      }
      else{
        // PRODUCT DOES NOT EXIST ADD TO CART WITH QUATITY 1
        return [...prevCart, { ...product, quantity:1 } ];
      }
    })
    console.log(cart);
  }

  return (
    <cartContext.Provider value={{cart,setCart,handleAddToCart}}>
        {children}
    </cartContext.Provider>
  );


  
}

export default CartProvider;