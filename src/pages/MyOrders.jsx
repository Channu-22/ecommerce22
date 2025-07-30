import { useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "../Contexts/AuthProvider";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

function MyOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      const db = getFirestore();
      const q = query(collection(db, "orders"), where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      const userOrders = querySnapshot.docs.map((doc) => ({ 
        id: doc.id,
        ...doc.data(),
      })).sort((a, b) => {
        const dateA = a.createdAt?.toDate?.() ?? new Date(0);
        const dateB = b.createdAt?.toDate?.() ?? new Date(0);
        return dateB - dateA; // Descending
      });;
      setOrders(userOrders);
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 mb-8">
          📦 My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="text-center">
            <div className="mb-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png"
                alt="No Orders"
                className="w-40 h-40 mx-auto mb-4 opacity-60 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-500 mb-4 text-lg font-medium">
              You have no orders yet.
            </p>
            <Link
              to="/"
              className="text-white bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-md inline-block"
            >
              🛍️ Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div 
                key={order.id} 
                className="bg-gray-50 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all duration-300 p-6 hover:scale-[1.01] transform"
              >
                {/* Order Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 pb-4 border-b border-gray-200">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">
                      🆔 <span className="font-semibold">Order ID:</span>{" "}
                      <span className="font-mono bg-gray-200 px-2 py-1 rounded text-xs">
                        {order.id}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      📅 <span className="font-semibold">Date:</span>{" "}
                      <span className="font-medium">
                        {order.createdAt?.toDate().toLocaleString() || "Unknown"}
                      </span>
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      📊 Processing
                    </span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200"
                    >
                      {/* Item Image */}
                      <div className="w-20 h-20 flex-shrink-0">
                        <img
                          src={item.image || "https://via.placeholder.com/60"}
                          alt={item.name}
                          className="w-full h-full object-contain rounded-lg hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 text-center md:text-left space-y-1">
                        <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          📦 <span className="font-medium">Quantity:</span> {item.quantity}
                        </p>
                        <p className="text-sm text-gray-600">
                          💰 <span className="font-medium">Unit Price:</span> ${item.price.toFixed(2)}
                        </p>
                      </div>

                      {/* Item Total */}
                      <div className="text-center md:text-right">
                        <p className="text-sm text-gray-500 mb-1">
                          ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                        <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                        📊 Total Items: {order.items.reduce((acc, item) => acc + item.quantity, 0)}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                        Total: ${order.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyOrders;