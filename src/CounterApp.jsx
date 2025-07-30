// import { useState } from "react"

// function CounterApp(){
//   const[counter, setCounter]=useState(0);

//   const handleIncrease=() => {
//     counter > 0 ? setCounter(counter-1) : 0

    
//   }
//   const handleDecrease=() => {
//     setCounter(counter+1)
//   }

//   return(
//     <>
//     <button onClick={handleIncrease}>Increase Counter</button>
//     <p>Counter: {counter}</p>
//     <button onClick={handleDecrease}>Decrease Counter</button>
//     </>
//   )
// }
// // export default CounterApp;


// // import { useContext, useState } from "react";

// import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { MdLogout } from "react-icons/md";
// import { RiLogoutBoxRFill } from "react-icons/ri";
// import { AiOutlineHeart } from "react-icons/ai";
// import { FaChevronDown } from "react-icons/fa";

// import { LogOut, UserRound, CircleUserRound } from "lucide-react";

// import { Link, useNavigate } from "react-router-dom";
// import { cartContext } from "../Contexts/CartContext";
// import { useAuth } from "../Contexts/AuthProvider";
// import app from "../firebase";
// import { getAuth } from "firebase/auth";

// const Auth = getAuth(app);
// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const { cart, wishlist } = useContext(cartContext);

//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   function HandleLoggedOut() {
//     Auth.signOut();
//     setTimeout(() => {
//       navigate("/login");
//     }, 1000);
//   }

//   return (
//     <>
//       <header className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 h-16 px-6 md:px-12 flex justify-between items-center relative shadow-xl backdrop-blur-sm border-b-2 border-white/20">
//         <h1 className="font-extrabold text-2xl md:text-3xl text-white drop-shadow-lg hover:scale-105 transition-transform duration-300">
//           <Link to="/" className="flex items-center gap-2">
//             <span className="text-3xl animate-bounce">🛍️</span>
//             <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
//               Ecommerce
//             </span>
//           </Link>
//         </h1>

//         {/* Desktop Navigation - Hidden on mobile */}
//         <ul className="hidden md:flex items-center space-x-8">
//           <li className="cursor-pointer hover:text-yellow-200 transition-all duration-300 hover:scale-110 font-semibold">
//             <Link to="/" className="px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
//               🏠 Home
//             </Link>
//           </li>
//           <li className="cursor-pointer hover:text-yellow-200 transition-all duration-300 hover:scale-110 font-semibold">
//             <Link to="/about" className="px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
//               ℹ️ About
//             </Link>
//           </li>
//           <li className="cursor-pointer hover:text-yellow-200 transition-all duration-300 hover:scale-110 font-semibold">
//             <Link to="/contact" className="px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
//               📞 Contact
//             </Link>
//           </li>

//           <li className="cursor-pointer relative hover:text-yellow-200 transition-all duration-300 hover:scale-110">
//             <Link to="/wishlist" className="relative flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
//               <AiOutlineHeart title="Your Wishlist" className="text-2xl animate-pulse" />
//               <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full w-6 h-6 flex justify-center items-center text-xs shadow-lg animate-bounce">
//                 {wishlist.length}
//               </span>
//             </Link>
//           </li>

//           <li className="cursor-pointer relative hover:text-yellow-200 transition-all duration-300 hover:scale-110">
//             <Link to="/cart" className="relative flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
//               <MdOutlineShoppingCart title="Your Cart" className="text-2xl animate-pulse" />
//               <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full w-6 h-6 flex justify-center items-center text-xs shadow-lg animate-bounce">
//                 {cart.length}
//               </span>
//             </Link>
//           </li>

//           <li className="cursor-pointer transition-all duration-300">
//             {user ? (
//               <li className="mr-5 cursor-pointer relative">
//                 <div onClick={toggleDropdown} className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
//                   <span className="text-xl text-white hover:text-yellow-200 transition-colors duration-300">
//                     <CircleUserRound size={24} />
//                   </span>
//                   <FaChevronDown
//                     className={`text-lg ml-1 transition-all duration-300 text-white hover:text-yellow-200 ${
//                       isDropdownOpen ? "rotate-180" : "rotate-0"
//                     }`}
//                   />
//                 </div>
//                 {isDropdownOpen && (
//                   <ul className="absolute z-50 right-0 mt-2 bg-gradient-to-b from-rose-400 to-pink-500 shadow-2xl rounded-xl w-40 border-2 border-white/20 backdrop-blur-sm">
//                     <li className="p-3 hover:bg-white/20 transition-all duration-300 rounded-t-xl font-semibold">
//                       <Link to={user ? "/profile" : "/login"} className="flex items-center gap-2 text-white">
//                         👤 {user ? "Profile" : "Login"}
//                       </Link>
//                     </li>
//                     <li className="p-3 hover:bg-white/20 transition-all duration-300 font-semibold">
//                       <Link to={user ? "/orders" : "/login"} className="flex items-center gap-2 text-white">
//                         📦 {user ? "MyOrders" : "Login"}
//                       </Link>
//                     </li>
//                     <li
//                       className="p-3 hover:bg-red-500/20 transition-all duration-300 rounded-b-xl flex items-center gap-2 font-semibold text-white cursor-pointer"
//                       onClick={HandleLoggedOut}
//                     >
//                       🚪 LogOut
//                       <button onClick={HandleLoggedOut}>
//                         <MdLogout title="Logout" className="hover:scale-110 transition-transform duration-300" />
//                       </button>
//                     </li>
//                   </ul>
//                 )}
//               </li>
//             ) : (
//               <li className="bg-gradient-to-r from-white to-yellow-100 text-rose-500 px-6 py-2 rounded-xl font-bold hover:from-yellow-100 hover:to-white hover:scale-105 hover:shadow-lg transition-all duration-300 border-2 border-white/30">
//                 <Link to="/login" className="flex items-center gap-2">
//                   🔐 Login
//                 </Link>
//               </li>
//             )}
//           </li>
//         </ul>

//         {/* Mobile Hamburger Menu - Visible only on mobile */}
//         <button
//           className="md:hidden text-2xl focus:outline-none text-white hover:text-yellow-200 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
//           onClick={toggleMenu}
//         >
//           {isMenuOpen ? <MdClose className="animate-spin" /> : <MdMenu className="hover:rotate-90 transition-transform duration-300" />}
//         </button>

//         {/* Mobile Navigation Menu */}
//         {isMenuOpen && (
//           <div className="absolute top-16 right-0 bg-gradient-to-b from-rose-400 via-pink-500 to-purple-500 shadow-2xl z-50 md:hidden w-[180px] h-[400px] overflow-y-auto rounded-bl-2xl border-l-2 border-b-2 border-white/20 backdrop-blur-sm">
//             <ul className="flex flex-col py-4">
//               <li className="border-b border-white/20 last:border-b-0">
//                 <Link
//                   to="/"
//                   className="block px-6 py-4 hover:bg-white/20 transition-all duration-300 text-white font-semibold hover:text-yellow-200 hover:scale-105 transform"
//                   onClick={toggleMenu}
//                 >
//                   🏠 Home
//                 </Link>
//               </li>
//               <li className="border-b border-white/20 last:border-b-0">
//                 <Link
//                   to="/about"
//                   className="block px-6 py-4 hover:bg-white/20 transition-all duration-300 text-white font-semibold hover:text-yellow-200 hover:scale-105 transform"
//                   onClick={toggleMenu}
//                 >
//                   ℹ️ About
//                 </Link>
//               </li>
//               <li className="border-b border-white/20 last:border-b-0">
//                 <Link
//                   to="/contact"
//                   className="block px-6 py-4 hover:bg-white/20 transition-all duration-300 text-white font-semibold hover:text-yellow-200 hover:scale-105 transform"
//                   onClick={toggleMenu}
//                 >
//                   📞 Contact
//                 </Link>
//               </li>
//               <li className="relative border-b border-white/20 last:border-b-0">
//                 <Link
//                   to="/wishlist"
//                   className="flex items-center justify-between px-6 py-4 hover:bg-white/20 transition-all duration-300 text-white font-semibold hover:text-yellow-200"
//                   onClick={toggleMenu}
//                 >
//                   <span className="flex items-center space-x-2">
//                     <AiOutlineHeart className="text-xl animate-pulse" />
//                     <span>Wishlist</span>
//                   </span>
//                   <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full w-6 h-6 flex justify-center items-center text-xs shadow-lg animate-bounce">
//                     {wishlist.length}
//                   </span>
//                 </Link>
//               </li>
//               <li className="relative border-b border-white/20 last:border-b-0">
//                 <Link
//                   to="/cart"
//                   className="flex items-center justify-between px-6 py-4 hover:bg-white/20 transition-all duration-300 text-white font-semibold hover:text-yellow-200"
//                   onClick={toggleMenu}
//                 >
//                   <span className="flex items-center space-x-2">
//                     <MdOutlineShoppingCart className="text-xl animate-pulse" />
//                     <span>Cart</span>
//                   </span>
//                   <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full w-6 h-6 flex justify-center items-center text-xs shadow-lg animate-bounce">
//                     {cart.length}
//                   </span>
//                 </Link>
//               </li>
//               <li className="border-b border-white/20 last:border-b-0">
//                 {user ? (
//                   <li className="mr-5 cursor-pointer relative">
//                     <div onClick={toggleDropdown} className="flex items-center px-6 py-4 hover:bg-white/20 transition-all duration-300">
//                       <span className="text-xl text-white hover:text-yellow-200 transition-colors duration-300">
//                         <CircleUserRound size={24} />
//                       </span>
//                       <span className="ml-2 text-white font-semibold">Account</span>
//                       <FaChevronDown
//                         className={`text-lg ml-auto transition-all duration-300 text-white ${
//                           isDropdownOpen ? "rotate-180" : "rotate-0"
//                         }`}
//                       />
//                     </div>
//                     {isDropdownOpen && (
//                       <ul className="bg-gradient-to-b from-rose-500 to-pink-600 shadow-xl rounded-lg mx-2 mb-2 border border-white/20">
//                         <li className="p-3 hover:bg-white/20 transition-all duration-300 rounded-t-lg">
//                           <Link to={user ? "/profile" : "/login"} className="text-white font-semibold flex items-center gap-2">
//                             👤 {user ? "Profile" : "Login"}
//                           </Link>
//                         </li>
//                         <li className="p-3 hover:bg-white/20 transition-all duration-300">
//                           <Link to={user ? "/orders" : "/login"} className="text-white font-semibold flex items-center gap-2">
//                             📦 {user ? "MyOrders" : "Login"}
//                           </Link>
//                         </li>
//                         <li
//                           className="p-3 hover:bg-red-500/30 transition-all duration-300 rounded-b-lg flex items-center gap-2 text-white font-semibold cursor-pointer"
//                           onClick={HandleLoggedOut}
//                         >
//                           🚪 LogOut
//                           <button onClick={HandleLoggedOut}>
//                             <MdLogout title="Logout" className="hover:scale-110 transition-transform duration-300" />
//                           </button>
//                         </li>
//                       </ul>
//                     )}
//                   </li>
//                 ) : (
//                   <li className="px-4 py-4">
//                     <Link to="/login" className="bg-gradient-to-r from-white to-yellow-100 text-rose-500 px-4 py-2 rounded-xl font-bold hover:from-yellow-100 hover:to-white hover:scale-105 hover:shadow-lg transition-all duration-300 border border-white/30 flex items-center gap-2 justify-center">
//                       🔐 Login
//                     </Link>
//                   </li>
//                 )}
//               </li>
//             </ul>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

// export default Header;