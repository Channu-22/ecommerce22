import { useEffect, useState } from "react";
import instance from "../axiosConfig"
import { Link } from "react-router-dom";



function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getdata()
    }, [])

    async function getdata() {
        try {
            setLoading(true);
            const response = await instance.get("/products?limit=25");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
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
                        Loading amazing products...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
        {/* <Header/> */}
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
            </div>

            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6 shadow-lg">
                        <span className="text-3xl">🛍️</span>
                    </div>
                    <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        Our Products
                    </h1>
                    <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                        Discover amazing products at unbeatable prices with premium quality and fast delivery
                    </p>
                   
                </div>

                {/* Enhanced Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.length > 0 ? (
                        products.map((product, index) => {
                            return (
                                <div 
                                    key={product.id} 
                                    className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 cursor-pointer border border-white/50 hover:border-purple-200 relative"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Discount Badge */}
                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                                        20% OFF
                                    </div>

                                    {/* Wishlist Heart */}
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-red-50 cursor-pointer">
                                        <span className="text-red-500 hover:text-red-600 transition-colors">♡</span>
                                    </div>

                                    {/* Product Image */}
                                    <Link to={`/product/${product.id}`}> 
                                     <div className="productImage h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
                                       
                                          <img 
                                            src={product.image} 
                                            alt={product.title || "Product Image"} 
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 p-4"
                                           />
                                        
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                     </div>
                                    </Link>

                                    {/* Product Content */}
                                    <div className="productContent p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="text-yellow-400 text-sm">★</span>
                                                ))}
                                                <span className="text-gray-500 text-sm ml-1">(4.8)</span>
                                            </div>
                                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                                In Stock
                                            </span>
                                        </div>

                                        <h1 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-700 transition-colors duration-300 leading-tight">
                                            {product.title}
                                        </h1>

                                        <div className="flex items-center space-x-2 mb-4">
                                            <p className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                                                ${product.price}
                                            </p>
                                            <span className="text-gray-400 line-through text-lg">
                                                ${(product.price * 1.25).toFixed(2)}
                                            </span>
                                        </div>

                                        <button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 transform hover:scale-105 shadow-lg hover:shadow-xl group relative overflow-hidden">
                                            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            <span className="relative flex items-center justify-center space-x-3">
                                                <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                                                    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.44C5.04 14.29 5 14.63 5 15c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25L7.27 14H15.55c.75 0 1.42-.41 1.75-1.03L21.7 4H5.21L4.27 2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                                </svg>
                                                <span className="font-semibold tracking-wide">Add to Cart</span>
                                                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24">
                                                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="col-span-full text-center py-24">
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-16 mx-auto max-w-md border border-white/50">
                                <div className="text-8xl mb-6 animate-bounce">🛍️</div>
                                <p className="text-gray-600 text-2xl font-bold mb-2">No products available</p>
                                <p className="text-gray-500 text-lg mb-6">Check back later for amazing deals!</p>
                                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                                    Notify Me
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Additional Features Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg">
                        <div className="text-4xl mb-4">🚚</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Free Shipping</h3>
                        <p className="text-gray-600">Free shipping on orders over $50</p>
                    </div>
                    <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg">
                        <div className="text-4xl mb-4">🔄</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Returns</h3>
                        <p className="text-gray-600">30-day hassle-free returns</p>
                    </div>
                    <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg">
                        <div className="text-4xl mb-4">🏆</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
                        <p className="text-gray-600">Only the best products for you</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer/> */}
    </>
    )
}

export default Products;