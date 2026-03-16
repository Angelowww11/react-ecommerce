
import { Link } from 'react-router-dom'; 
const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-auto">
      <div className="container">
        <div className="row py-4 text-start">
          <div className="col-md-5 mb-3">
            <div className="fw-bold mb-2">PixelForge Gear</div>
            <p className="text-white-50 mb-0">
              Built for gamers who care about feel, performance, and clean desk
              aesthetics. Frontend-only demo store.
            </p>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className="fw-bold mb-2">Store</div>
            <div className="d-flex flex-column gap-1">
              <Link to="/products" className="footer-link">Products</Link>
              <Link to="/wishlist" className="footer-link">Wishlist</Link>
              <Link to="/about" className="footer-link">About</Link>
            </div>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <div className="fw-bold mb-2">Contact</div>
            <div className="text-white-50 small">
              <div><i className="fas fa-envelope me-2" />support@pixelforge.example</div>
              <div><i className="fas fa-phone me-2" />+63 900 123 4567</div>
              <div className="mt-2 d-flex gap-2">
                <a className="footer-icon" href="#" aria-label="Facebook"><i className="fab fa-facebook" /></a>
                <a className="footer-icon" href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                <a className="footer-icon" href="#" aria-label="X"><i className="fab fa-x-twitter" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top border-light border-opacity-25">
          <div className="text-white-50 small">
            &copy; {new Date().getFullYear()} PixelForge Gear. All rights reserved.
          </div>
          <div className="small">
            <Link to="/terms" className="footer-link">Terms</Link>
            <span className="text-white-50 mx-2">|</span>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;