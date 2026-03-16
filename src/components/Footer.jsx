
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="bg-secondary text-white text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-1">&copy; 2024 A.O.P. Tech Store. All Rights Reserved.</p>
        <p className="mb-1 small">
          Your one-stop shop for curated gadgets, accessories, and tech essentials.
        </p>
        <div className="mb-2">
          <a href="mailto:support@aoptech.store" className="text-white me-3">
            <i className="fas fa-envelope me-1"></i>support@aoptech.store
          </a>
          <a href="tel:+639001234567" className="text-white">
            <i className="fas fa-phone-alt me-1"></i>+63 900 123 4567
          </a>
        </div>
        <p className="mb-1">
          <a href="https://facebook.com" className="text-white me-3">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" className="text-white me-3">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com" className="text-white">
            <i className="fab fa-x-twitter"></i>
          </a>
        </p>
        <p className="mb-0">
          <Link to="/terms" className="text-white text-decoration-underline">
            Terms & Conditions
          </Link>
          <span className="mx-2">|</span>
          <Link to="/contact" className="text-white text-decoration-underline">
            Contact Us
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;