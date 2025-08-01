import { useContext, useState } from "react";
import { cartContext } from "../Contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import Toast from "../messages/Cartmsg";
import { useAuth } from "../Contexts/AuthProvider";


function Cart() {
  const {
    cart,
    handleDeleteItem,
    handleQuantityChange,
    toastMessage,
    handlePlaceOrder,
  } = useContext(cartContext);

  const navigate = useNavigate();
  const { user } = useAuth();

  // Toast message 
  const [increaseMessage, setIncreaseMessage] = useState("");
  const [decreaseMessage, setDecreaseMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  
  // Handle quantity increase with toast message
  const handleIncreaseWithMessage = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    handleQuantityChange(itemId, "increment");
    setIncreaseMessage(`📈  quantity increased!`);
    setTimeout(() => setIncreaseMessage(""), 3000);
  };

  // Handle quantity decrease with toast message
  const handleDecreaseWithMessage = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    handleQuantityChange(itemId, "decrement");
    setDecreaseMessage(`📉  quantity decreased!`);
    setTimeout(() => setDecreaseMessage(""), 3000);
  };

  // Handle delete with toast message
  const handleDeleteWithMessage = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    handleDeleteItem(itemId);
    setDeleteMessage(`🗑️ removed from cart!`);
    setTimeout(() => setDeleteMessage(""), 3000);
  };

  // Calculate total
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // PLACE ORDERS
  function placeOrder() {
    if (!user) {
      navigate("/login");
      return;
    }

    handlePlaceOrder();

    setTimeout(() => {
      navigate("/orders");
    }, 2000);
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 mb-8">
          🛒 Your Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500 mb-4 text-lg">
              Your cart is currently empty.
            </p>
            <Link
              to="/"
              className="text-white bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition-transform shadow-md"
            >
              🛍️ Explore Products
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-center bg-gray-50 border border-gray-200 p-5 rounded-2xl shadow hover:shadow-lg transition-shadow duration-200"
                >
                  {/* 🧾 LEFT: Image + Details */}
                  <div className="flex flex-col md:flex-row items-center gap-4 flex-1">
                    {/* IMAGE */}
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="text-gray-700 space-y-2">
                      <h2 className="text-xl font-bold">{item.name}</h2>
                      <p className="text-sm">
                        🗂️ Category: {item.category || "General"}
                      </p>
                      <p className="text-sm">
                        📝 {item.description || "No description available."}
                      </p>
                      <p className="text-sm">
                        💰 Price: ${item.price} × {item.quantity} =
                        <span className="font-bold text-rose-500 ml-1">
                          ${item.price * item.quantity}
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* 🎛️ RIGHT: Quantity Control Delete button */}

                  <div className="mt-4 md:mt-0 md:ml-6 flex items-center gap-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 border border-gray-400 rounded text-lg font-semibold hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleDecreaseWithMessage(item.id)}
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-base font-medium">
                        {item.quantity}
                      </span>
                      <button
                        className="w-8 h-8 border border-gray-400 rounded text-lg font-semibold hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleIncreaseWithMessage(item.id)}
                      >
                        +
                      </button>
                    </div>

                    {/* 🗑️ Delete Button */}
                    <button
                      className="w-8 h-8 border border-gray-400 rounded text-lg font-semibold flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition duration-200 cursor-pointer"
                      title="Remove item"
                      onClick={() => handleDeleteWithMessage(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    {toastMessage && <Toast message={toastMessage} />}
                  </div>
                </div>
              ))}
            </div>

            {/* Total Summary */}
            <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                💰 Total: ${totalAmount.toFixed(2)}
              </h3>

              <button
                className="group relative overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 hover:from-green-600 hover:via-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 ease-in-out transform hover:scale-110 focus:scale-95 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-green-500/30 focus:outline-none focus:ring-4 focus:ring-green-400/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-2 border-transparent hover:border-white/30"
                onClick={placeOrder}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Button content with emojis */}
                <div className="relative flex items-center justify-center gap-2">
                  <span className="text-xl animate-bounce text-red-600">🛒</span>
                  <span className="tracking-wide font-extrabold">
                    Place Order
                  </span>
                  <span className="text-xl group-hover:rotate-45 group-hover:scale-125 transition-all duration-300">
                    🚀
                  </span>
                </div>

                {/* Pulse effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:animate-pulse bg-white/20"></div>
              </button>
            </div>
          </>
        )}

        {/* Toast Messages */}
        {increaseMessage && <Toast message={increaseMessage} />}
        {decreaseMessage && <Toast message={decreaseMessage} />}
        {deleteMessage && <Toast message={deleteMessage} />}
      </div>
    </div>
  );
}

export default Cart;
