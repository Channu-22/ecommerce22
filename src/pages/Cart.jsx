import { useContext } from "react";
import { cartContext } from "../Contexts/CartContext";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import Toast from "../messages/Cartmsg";
// import DeleteToast from "../messages/Deletemsg";

function Cart() {
  const { cart,handleDeleteItem,handleQuantityChange, toastMessage} = useContext(cartContext);

  // Calculate total
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  

  
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
                        onClick={() =>
                          handleQuantityChange(item.id, "decrement")
                        }
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-base font-medium">
                        {item.quantity}
                      </span>
                      <button
                        className="w-8 h-8 border border-gray-400 rounded text-lg font-semibold hover:bg-gray-200 cursor-pointer"
                        onClick={() =>
                          handleQuantityChange(item.id, "increment")
                        }
                      >
                        +
                      </button>
                    </div>

                    {/* 🗑️ Delete Button - No onClick */}
                    <button
                      className="w-8 h-8 border border-gray-400 rounded text-lg font-semibold flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition duration-200 cursor-pointer"
                      title="Remove item"
                      onClick={() => {
                        handleDeleteItem(item.id)
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                      
                    </button>
                    {toastMessage && <Toast message={toastMessage} />}
                  </div>
                </div>
              ))}
            </div>

            {/* Total Summary */}
            <div className="mt-10 text-right">
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                Total: ${totalAmount.toFixed(2)}
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
