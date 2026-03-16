
import { Link } from 'react-router-dom'; 
const Footer = () => {
  return (
    <footer className="bg-secondary text-white text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-1">&copy; 2024 A.O.P. All Rights Reserved.</p>
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