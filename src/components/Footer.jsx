import { FaHeart, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-rose-400 text-white py-8 px-4 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4 transform transition-transform duration-300 hover:scale-105">
            Ecommerce
          </h3>
          <p className="text-sm mb-4">
            Your one-stop shop for quality products and seamless shopping experiences.
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about" 
                className="hover:text-rose-200 transition-colors duration-200 hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/" 
                className="hover:text-rose-200 transition-colors duration-200 hover:underline"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="hover:text-rose-200 transition-colors duration-200 hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <a 
                href="/faq" 
                className="hover:text-rose-200 transition-colors duration-200 hover:underline"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
          <div className="flex justify-center md:justify-end gap-4 mt-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="instagram"
              className="transform transition-transform duration-200 hover:scale-125 hover:text-rose-200"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="linkedn"
              className="transform transition-transform duration-200 hover:scale-125 hover:text-rose-200"
            >
              <FaLinkedin size={24} />
            </a>
            <div className="relative group">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="github"
                className="transform transition-transform duration-200 hover:scale-125 hover:text-rose-200"
              >
                <FaGithub size={24} />
              </a>
              <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="mt-8 text-center border-t border-rose-300 pt-4">
        <p className="text-sm">
          Made with <FaHeart className="inline-block text-rose-200 transform transition-transform duration-200 hover:scale-125" /> by
          <a
            href="https://www.linkedin.com/in/chanabasappa-sinnur-826414246/"
            className="text-rose-200 underline ps-2 hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chanabasappa Sinnur
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;