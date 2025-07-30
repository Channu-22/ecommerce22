import { useContext, useState } from "react";

import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

import { LogOut, UserRound, CircleUserRound } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../Contexts/CartContext";
import { useAuth } from "../Contexts/AuthProvider";
import app from "../firebase";
import { getAuth } from "firebase/auth";

const Auth = getAuth(app);
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { cart } = useContext(cartContext);

  const { user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  function HandleLoggedOut() {
    Auth.signOut();
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  return (
    <>
      <header className="bg-rose-400 h-16 px-6 md:px-12 flex justify-between items-center relative">
        <h1 className="font-bold text-2xl md:text-3xl">
          <Link to="/">🛍️Ecommerce</Link>
        </h1>

        {/* Desktop Navigation - Hidden on mobile */}
        <ul className="hidden md:flex items-center space-x-8">
          {/* <li className="cursor-pointer hover:text-white transition-colors">
            <Link to="/">Home</Link>
          </li> */}
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
                {cart.length}
              </span>
            </Link>
          </li>

          <li className="cursor-pointer  transition-colors">
            {/* <Link to="/login" className="bg-white text-rose-400 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Login
            </Link> */}
            {/* import { LogOut, UserRound } from "lucide-react"; */}

            {/* {user ? (
              <button
                onClick={HandleLoggedOut}
                title="Logout"
                className="text-xl text-black hover:text-red-500 transition-colors duration-300"
              >
                <LogOut size={24} />
              </button>
            ) : (
              <Link
                to="/login"
                title="Your Account"
                className="text-xl text-black hover:text-blue-500 transition-colors duration-300"
              >
                <CircleUserRound size={24} />
              </Link>
            )} */}
            {user ? (
              <li className="mr-5 cursor-pointer relative">
                <div onClick={toggleDropdown} className="flex items-center">
                  <span className="text-xl text-black hover:text-blue-500 transition-colors duration-300">
                    <CircleUserRound size={24} />
                  </span>
                  <FaChevronDown
                    className={`text-xl transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {isDropdownOpen && (
                  <ul className="absolute z-50 right-0 mt-2 bg-rose-400 shadow-md rounded w-25">
                    <li className="p-2 hover:bg-blue-500">
                      <Link to={user ? "/profile" : "/login"}>
                        {user ? "Profile" : "Login"}
                      </Link>
                    </li>
                    <li
                      className="p-2 hover:bg-blue-500 relative flex items-center gap-2"
                      onClick={HandleLoggedOut}
                    >
                      LogOut{" "}
                      <button onClick={HandleLoggedOut}>
                        <MdLogout title="Logout" className="" />
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <li className="bg-white text-rose-400   px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                <Link to="/login">Login</Link>
              </li>
            )}
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
          <div className="absolute top-16  right-0 bg-rose-400 shadow-lg z-50 md:hidden w-[130px] h-[330px] overflow-y-auto">
            <ul className="flex flex-col py-4">
              <li className="border-b border-rose-300 last:border-b-0">
                <Link
                  to="/about"
                  className="block px-6 py-3 hover:bg-rose-300 transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li className="border-b border-rose-300 last:border-b-0">
                <Link
                  to="/contact"
                  className="block px-6 py-3 hover:bg-rose-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="relative border-b border-rose-300 last:border-b-0">
                <Link
                  to="/wishlist"
                  className="flex items-center justify-between px-6 py-3 hover:bg-rose-300 transition-colors"
                  onClick={toggleMenu}
                >
                  <span className="flex items-center space-x-2">
                    <AiOutlineHeart className="text-xl" />
                  </span>
                  <span className="absolute -top-0 left-10 bg-white text-rose-400 font-bold rounded-full w-5 h-5 flex justify-center items-center text-xs">
                    0
                  </span>
                </Link>
              </li>
              <li className="relative border-b border-rose-300 last:border-b-0">
                <Link
                  to="/cart"
                  className="flex items-center justify-between px-6 py-3 hover:bg-rose-300 transition-colors"
                  onClick={toggleMenu}
                >
                  <span className="flex items-center space-x-2">
                    <MdOutlineShoppingCart className="text-xl"  />
                  </span>
                  <span className="absolute -top-0 left-10 bg-white text-rose-400 font-bold rounded-full w-5 h-5 flex justify-center items-center text-xs">
                    {cart.length}
                  </span>
                </Link>
              </li>
              <li className="border-b border-rose-300 last:border-b-0">
                {user ? (
                  <li className="mr-5 cursor-pointer relative">
                    <div onClick={toggleDropdown} className="flex items-center">
                      <span className="text-xl text-black hover:text-blue-500 transition-colors duration-300 px-6 py-3">
                        <CircleUserRound size={24} />
                      </span>
                      <FaChevronDown
                        className={`text-xl transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                    {isDropdownOpen && (
                      <ul className="absolute z-50 right-0 mt-2 bg-rose-400 shadow-md rounded w-25">
                        <li className="p-2 hover:bg-blue-500">
                          <Link to={user ? "/profile" : "/login"}>
                            {user ? "Profile" : "Login"}
                          </Link>
                        </li>
                        <li
                          className="p-2 hover:bg-rose-400 relative flex items-center gap-2"
                          onClick={HandleLoggedOut}
                        >
                          LogOut{" "}
                          <button onClick={HandleLoggedOut}>
                            <MdLogout title="Logout" className="" />
                          </button>
                        </li>
                      </ul>
                    )}
                  </li>
                ) : (
                  <li className="bg-white text-rose-400 px-4 py-2 mt-4 ml-4 w-[70px] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
