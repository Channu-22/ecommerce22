import { FaHeart } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-rose-400 py-2 px-12 text-center">
      <p>&copy; {new Date().getFullYear()} | Ecommerce</p>
      <p>
        Made with <FaHeart className="inline-block" /> by 
        <a
          href="https://www.linkedin.com/in/chanabasappa-sinnur-826414246/"
          className="text-blue-700 underline ps-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chanabasappa Sinnur
        </a>
      </p>
    </footer>
  );
}

export default Footer;