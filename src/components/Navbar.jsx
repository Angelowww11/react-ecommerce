import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { WishlistContext } from "../context/WishlistContext.jsx";

const Navbar = () => {
  // Access global cart state
  const { cart } = useContext(CartContext);
  const theme = useContext(ThemeContext);
  const wishlist = useContext(WishlistContext);
  
  // Calculate total items for the badge
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = wishlist?.items?.length ?? 0;

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
          <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
            <span className="brand-mark">PF</span>
            <span>PixelForge Gear</span>
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
                  <NavLink to="/wishlist" className={desktopLink}>Wishlist</NavLink>
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

            <ul className="navbar-nav">
              <li className="nav-item d-flex align-items-center me-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-light"
                  onClick={theme?.toggleTheme}
                  aria-label="Toggle theme"
                  title="Toggle theme"
                >
                  <i className={theme?.theme === "dark" ? "fas fa-moon" : "fas fa-sun"} />
                </button>
              </li>
              <li className="nav-item">
                <NavLink to="/wishlist" className={desktopLink}>
                  <i className="fas fa-heart me-1"></i>
                  Wishlist
                  {wishlistCount > 0 && (
                    <span className="badge bg-danger ms-2">{wishlistCount}</span>
                  )}
                </NavLink>
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

      {/* --- MOBILE BOTTOM NAVIGATION --- */}
      {/* Fixed to bottom, only visible on small screens ('d-lg-none') */}
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
            <span style={{ fontSize: '0.65rem' }}>Products</span>
          </NavLink>
          
          <NavLink to="/blog" className={mobileLink}>
            <i className="fas fa-book-open fs-5 mb-1"></i>
            <span style={{ fontSize: '0.65rem' }}>Blog</span>
          </NavLink>
          
          <NavLink to="/about" className={mobileLink}>
            <i className="fas fa-info-circle fs-5 mb-1"></i>
            <span style={{ fontSize: '0.65rem' }}>About</span>
          </NavLink>

          <button
            type="button"
            className="bg-transparent border-0 p-0"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileBagDrawer"
            aria-controls="mobileBagDrawer"
          >
            <div className="text-white-50 text-decoration-none d-flex flex-column align-items-center">
              <div className="position-relative mb-1">
                <i className="fas fa-bag-shopping fs-5"></i>
                {(cartCount > 0 || wishlistCount > 0) && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.5rem", padding: "0.25em 0.4em" }}
                  >
                    {cartCount + wishlistCount}
                  </span>
                )}
              </div>
              <span style={{ fontSize: "0.65rem" }}>Bag</span>
            </div>
          </button>

        </div>
      </div>

      {/* --- MOBILE: Combined Wishlist + Cart drawer --- */}
      <div
        className="offcanvas offcanvas-bottom d-lg-none"
        tabIndex="-1"
        id="mobileBagDrawer"
        aria-labelledby="mobileBagDrawerLabel"
        style={{ height: "70vh" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileBagDrawerLabel">
            Bag
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body pt-0">
          <ul className="nav nav-pills mb-3" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="bag-wishlist-tab"
                data-bs-toggle="pill"
                data-bs-target="#bag-wishlist"
                type="button"
                role="tab"
              >
                Wishlist{" "}
                <span className="badge bg-secondary ms-1">{wishlistCount}</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="bag-cart-tab"
                data-bs-toggle="pill"
                data-bs-target="#bag-cart"
                type="button"
                role="tab"
              >
                Cart <span className="badge bg-secondary ms-1">{cartCount}</span>
              </button>
            </li>
          </ul>

          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="bag-wishlist"
              role="tabpanel"
              aria-labelledby="bag-wishlist-tab"
            >
              <div className="card p-3 shadow-sm">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-semibold">Saved items</div>
                    <div className="text-muted small">
                      {wishlistCount} item{wishlistCount === 1 ? "" : "s"}
                    </div>
                  </div>
                  <Link
                    to="/wishlist"
                    className="btn btn-outline-primary btn-sm"
                    data-bs-dismiss="offcanvas"
                  >
                    View wishlist
                  </Link>
                </div>
                {wishlistCount === 0 && (
                  <div className="text-muted small mt-3">
                    Tap the heart on products to save them.
                  </div>
                )}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="bag-cart"
              role="tabpanel"
              aria-labelledby="bag-cart-tab"
            >
              <div className="card p-3 shadow-sm">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-semibold">Cart</div>
                    <div className="text-muted small">
                      {cartCount} item{cartCount === 1 ? "" : "s"}
                    </div>
                  </div>
                  <Link
                    to="/cart"
                    className="btn btn-outline-primary btn-sm"
                    data-bs-dismiss="offcanvas"
                  >
                    View cart
                  </Link>
                </div>
                {cartCount === 0 && (
                  <div className="text-muted small mt-3">
                    Your cart is empty. Add something from Products.
                  </div>
                )}
                {cartCount > 0 && (
                  <div className="mt-3">
                    <Link
                      to="/checkout"
                      className="btn btn-success w-100"
                      data-bs-dismiss="offcanvas"
                    >
                      Checkout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;