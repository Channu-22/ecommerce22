import { FaHeart, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-rose-400 text-black py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-2 hover:scale-105 transition-transform">
            🛍️Ecommerce
          </h3>
          <p className="text-sm">
            Quality products, seamless shopping. Since 2025.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/about" className="hover:underline text-black">About</Link></li>
            <li><Link to="/" className="hover:underline text-black">Shop</Link></li>
            <li><Link to="/contact" className="hover:underline text-black">Contact</Link></li>
            <li><a href="/faq" className="hover:underline text-black">FAQ</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-white">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-rose-200">
              <FaInstagram size={22} />
            </a>
            <a href="https://linkedin.com/in/chanabasappa-sinnur-826414246" target="_blank" rel="noreferrer" className="hover:text-rose-200">
              <FaLinkedin size={22} />
            </a>
            <a href="https://github.com/Channu-22/" target="_blank" rel="noreferrer" className="hover:text-rose-200">
              <FaGithub size={22} />
            </a>
          </div>
          <p className="mt-4 text-sm">
            📞{" "}
            <a href="tel:9322605251" className="text-black hover:underline">
              9322605251
            </a>
          </p>
          <p className="text-sm">
            📧{" "}
            <a href="mailto:channusinnur22072002@gmail.com" className="text-black hover:underline">
              channusinnur22072002@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Credits */}
      <div className="mt-8 border-t border-rose-300 pt-4 text-center text-sm text-black">
        <p>
          Made with{" "}
          <FaHeart className="inline-block text-rose-600 hover:scale-110 transition-transform" /> by{" "}
          <a
            href="https://www.linkedin.com/in/chanabasappa-sinnur-826414246/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-black"
          >
            Chanabasappa Sinnur
          </a>
        </p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
