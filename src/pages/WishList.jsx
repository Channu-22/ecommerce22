import React, { useContext, useState } from 'react'
import { cartContext } from '../Contexts/CartContext';
import { MdDelete, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Toast from "../messages/Cartmsg";

function WishList() {
    const { wishlist, removeFromWishlist, handleAddToCart } = useContext(cartContext);
    
    // Toast message states
    const [addToCartMessage, setAddToCartMessage] = useState('');
    const [removeMessage, setRemoveMessage] = useState('');

    // Handle add to cart with toast message
    const handleAddToCartWithMessage = (item) => {
        handleAddToCart(item);
        setAddToCartMessage(`item added to cart!`);
        setTimeout(() => setAddToCartMessage(''), 3000);
    };

    // Handle remove from wishlist with toast message
    const handleRemoveWithMessage = (itemId) => {
        const item = wishlist.find(item => item.id === itemId);
        removeFromWishlist(itemId);
        setRemoveMessage(`item removed from wishlist!`);
        setTimeout(() => setRemoveMessage(''), 3000);
    };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 mb-8">
          ❤️ Your Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center">
            <div className="mb-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                alt="Empty Wishlist"
                className="w-40 h-40 mx-auto mb-4 opacity-60 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-500 mb-4 text-lg font-medium">
              Your wishlist is currently empty.
            </p>
            <Link
              to="/"
              className="text-white bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-md inline-block"
            >
              🛍️ Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all duration-300 p-5 flex flex-col hover:scale-[1.02] transform"
              >
                <Link to={`/products/${item.id}`} className="block mb-4">
                  <div className="w-full h-48 flex items-center justify-center bg-white rounded-xl overflow-hidden">
                    <img
                      title="Open product"
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>

                <div className="flex-1 mb-4 space-y-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    📝 {item.description || "No description available."}
                  </p>
                  <p className="text-sm text-gray-600">
                    🗂️ Category: {item.category || "General"}
                  </p>
                  {item.rating && (
                    <p className="text-sm text-yellow-600">
                      ⭐ {item.rating.rate} / 5 ({item.rating.count} reviews)
                    </p>
                  )}
                  <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                    💰 ${item.price}
                  </p>
                </div>

                <div className="flex gap-3 mt-auto flex-wrap flex-col min-[360px]:flex-row">
                  <button
                    title="Add to Cart"
                    onClick={() => handleAddToCartWithMessage(item)}
                    className="flex-1 flex items-center justify-center gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 px-4 py-3 rounded-xl text-sm font-semibold cursor-pointer shadow-md hover:shadow-lg hover:scale-105 transform"
                  >
                    <MdShoppingCart className="text-lg" />
                    Add to Cart
                  </button>

                  <button
                    title="Remove from Wishlist"
                    onClick={() => handleRemoveWithMessage(item.id)}
                    className="flex-1 flex items-center justify-center gap-2 text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-200 px-4 py-3 rounded-xl text-sm font-semibold cursor-pointer shadow-md hover:shadow-lg hover:scale-105 transform"
                  >
                    <MdDelete className="text-lg" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Toast Messages */}
        {addToCartMessage && <Toast message={addToCartMessage} />}
        {removeMessage && <Toast message={removeMessage} />}
      </div>
    </div>
  );
}

export default WishList;