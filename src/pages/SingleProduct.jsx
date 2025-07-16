import  { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axiosConfig";
import { cartContext } from "../Contexts/CartContext";

function SingleProduct() {
  // useParams give dynamic part of url
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const {handleAddToCart} = useContext(cartContext)
  
  // console.log(id)
  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  // GETTING SINGLE PRODUCT INFORMATION
  async function getSingleProduct(id) {
    try {
      setLoading(true);
      const response = await instance.get(`/products/${id}`);
      setProduct(response.data);
    } catch (err) {
      console.log("error fetching singleProduct" + err);
    } finally {
      setLoading(false);
    }
  }
 


  

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-30 h-30 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Loading product...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="single-product-container  flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
       

        {/* Left: Product Image */}
        <div className="product-image w-full md:w-1/2 flex justify-center items-center p-4">
          <div className="relative w-full max-w-md h-full flex justify-center items-center group">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[80vh] object-contain transition-transform duration-700 group-hover:scale-110 p-4"
            />

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

            {/* Discount Badge */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
              20% OFF
            </div>

            {/* Wishlist Heart Button */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-red-50 cursor-pointer">
              <span className="text-red-700 hover:text-red-800 transition-colors">
                ♡
              </span>
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="product-details w-full md:w-1/2 p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
            {product.title}
          </h1>

          <ul className="text-gray-600 space-y-1">
            <li>
              <strong>Brand:</strong> {product.brand || "N/A"}
            </li>
            <li>
              <strong>Category:</strong> {product.category || "N/A"}
            </li>
            <li>
              <strong>Color:</strong> {product.color || "N/A"}
            </li>
            <li className="flex items-center text-sm">
              <strong className="mr-1">Rating:</strong>
              <span className="text-yellow-500 mr-1">
                ⭐ {product.rating?.rate || "0.0"}
              </span>
              <span className="text-gray-500">
                ({product.rating?.count || 0} reviews)
              </span>
            </li>
          </ul>

          <p className="text-gray-700">{product.description}</p>

          <div className="flex items-center space-x-2">
            <p className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              ${product.price}
            </p>
            <span className="text-gray-400 line-through text-lg">
              ${(product.price * 1.25).toFixed(2)}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="cursor-pointer bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>

            <button className="cursor-pointer bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
