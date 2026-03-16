import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  // Calculate total items for the badge
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Helper functions for dynamic styling based on active state
  const desktopLink = ({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link";
  const mobileLink = ({ isActive }) => isActive 
    ? "text-warning text-decoration-none d-flex flex-column align-items-center" 
    : "text-white-50 text-decoration-none d-flex flex-column align-items-center";

  return (
    <>
      {/* --- TOP NAVBAR --- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary shadow-sm">
        {/* Centers the brand on mobile, aligns left on desktop */}
        <div className="container-fluid justify-content-center justify-content-lg-start">
          <Link className="navbar-brand fw-bold" to="/">
            A.O.P. Tech Store
          </Link>
          
          {/* Desktop Menu (Completely hidden on Mobile: 'd-none d-lg-flex') */}
          <div className="d-none d-lg-flex w-100 justify-content-between">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
              <li className="nav-item">
                  <NavLink to="/" className={desktopLink}>Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/products" className={desktopLink}>Products</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/blog" className={desktopLink}>Blog</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/about" className={desktopLink}>About</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/contact" className={desktopLink}>Contact</NavLink>
              </li>
            </ul>

            <ul className="navbar-nav align-items-center">
              <li className="nav-item me-3">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-light d-flex align-items-center"
                  onClick={toggleTheme}
                >
                  <i
                    className={
                      theme === "dark" ? "fas fa-moon me-2" : "fas fa-sun me-2"
                    }
                  ></i>
                  {theme === "dark" ? "Dark" : "Light"} mode
                </button>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className={desktopLink}>
                  <i className="fas fa-shopping-cart me-1"></i>
                  Cart
                  {cartCount > 0 && (
                    <span className="badge bg-danger ms-2">
                        {cartCount}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div 
        className="fixed-bottom bg-secondary d-lg-none shadow-lg" 
        style={{ zIndex: 1030, paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="d-flex justify-content-around py-2">
          
          <NavLink to="/" className={mobileLink}>
            <i className="fas fa-home fs-5 mb-1"></i>
            <span style={{ fontSize: '0.65rem' }}>Home</span>
          </NavLink>
          
          <NavLink to="/products" className={mobileLink}>
            <i className="fas fa-store fs-5 mb-1"></i>
            <span style={{ fontSize: '0.65rem' }}>Shop</span>
          </NavLink>
          
          <NavLink to="/wishlist" className={mobileLink}>
            <i className="fas fa-heart fs-5 mb-1"></i>
            <span style={{ fontSize: '0.65rem' }}>Wishlist</span>
          </NavLink>
          
          <NavLink to="/blog" className={mobileLink}>
            <i className="fas fa-book-open fs-5 mb-1"></i>
            <span style={{ fontSize: '0.65rem' }}>Blog</span>
          </NavLink>
          
          <NavLink to="/about" className={mobileLink}>
            <i className="fas fa-info-circle fs-5 mb-1"></i>
            <span style={{ fontSize: '0.65rem' }}>About</span>
          </NavLink>

          <NavLink to="/contact" className={mobileLink}>
            <i className="fas fa-envelope fs-5 mb-1"></i>
            <span style={{ fontSize: '0.65rem' }}>Contact</span>
          </NavLink>
          
          <NavLink to="/cart" className={mobileLink}>
            <div className="position-relative mb-1">
              <i className="fas fa-shopping-cart fs-5"></i>
              {/* Floating Mobile Badge */}
              {cartCount > 0 && (
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                  style={{ fontSize: '0.5rem', padding: '0.25em 0.4em' }}
                >
                  {cartCount}
                </span>
              )}
            </div>
            <span style={{ fontSize: '0.65rem' }}>Cart</span>
          </NavLink>

        </div>
      </div>
    </>
  );
};

export default Navbar;