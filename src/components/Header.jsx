import { useState } from "react";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-rose-400 h-16 px-6 md:px-12 flex justify-between items-center relative">
        <h1 className="font-bold text-2xl md:text-3xl">
          <Link to="/">Ecommerce</Link>
        </h1>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <ul className="hidden md:flex items-center space-x-8">
          <li className="cursor-pointer hover:text-white transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-white transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-white transition-colors">
            <Link to="/contact">Contact</Link>
          </li>
          
          <li className="cursor-pointer relative hover:text-white transition-colors">
            <Link to="/wishlist" className="relative flex items-center">
              <AiOutlineHeart title="Your Wishlist" className="text-2xl" />
              <span className="absolute -top-3 -right-3 bg-white text-rose-400 font-bold rounded-full w-5 h-5 flex justify-center items-center text-xs">
                0
              </span>
            </Link>
          </li>
          
          <li className="cursor-pointer relative hover:text-white transition-colors">
            <Link to="/cart" className="relative flex items-center">
              <MdOutlineShoppingCart title="Your Cart" className="text-2xl" />
              <span className="absolute -top-3 -right-3 bg-white text-rose-400 font-bold rounded-full w-5 h-5 flex justify-center items-center text-xs">
                0
              </span>
            </Link>
          </li>
          
          <li className="cursor-pointer hover:text-white transition-colors">
            <Link to="/login" className="bg-white text-rose-400 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Menu - Visible only on mobile */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-rose-400 shadow-lg z-50 md:hidden">
            <ul className="flex flex-col py-4">
              <li className="border-b border-rose-300 last:border-b-0">
                <a 
                  href="/about" 
                  className="block px-6 py-3 hover:bg-rose-300 transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li className="border-b border-rose-300 last:border-b-0">
                <a 
                  href="/contact" 
                  className="block px-6 py-3 hover:bg-rose-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
              <li className="border-b border-rose-300 last:border-b-0">
                <a 
                  href="/wishlist" 
                  className="flex items-center justify-between px-6 py-3 hover:bg-rose-300 transition-colors"
                  onClick={toggleMenu}
                >
                  <span className="flex items-center space-x-2">
                    <AiOutlineHeart className="text-xl" />
                    <span>Wishlist</span>
                  </span>
                  <span className="bg-white text-rose-400 font-bold rounded-full w-5 h-5 flex justify-center items-center text-xs">
                    0
                  </span>
                </a>
              </li>
              <li className="border-b border-rose-300 last:border-b-0">
                <a 
                  href="/cart" 
                  className="flex items-center justify-between px-6 py-3 hover:bg-rose-300 transition-colors"
                  onClick={toggleMenu}
                >
                  <span className="flex items-center space-x-2">
                    <MdOutlineShoppingCart className="text-xl" />
                    <span>Cart</span>
                  </span>
                  <span className="bg-white text-rose-400 font-bold rounded-full w-5 h-5 flex justify-center items-center text-xs">
                    0
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="/login" 
                  className="block px-6 py-3 hover:bg-rose-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;