import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { WishlistContext } from "../context/WishlistContext";

export default function Wishlist() {
  const wishlist = useContext(WishlistContext);

  return (
    <div className="container mt-5 fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <div>
          <h2 className="mb-1">Wishlist</h2>
          <div className="text-muted">
            {wishlist.items.length} item{wishlist.items.length === 1 ? "" : "s"}
          </div>
        </div>

        <div className="d-flex gap-2">
          <Link to="/products" className="btn btn-outline-primary">
            Browse products
          </Link>
          {wishlist.items.length > 0 && (
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={wishlist.clearWishlist}
            >
              Clear wishlist
            </button>
          )}
        </div>
      </div>

      {wishlist.items.length === 0 ? (
        <div className="card p-4 shadow-sm">
          <h5 className="mb-2">Nothing saved yet</h5>
          <p className="text-muted mb-0">
            Tap the heart on a product to add it here.
          </p>
        </div>
      ) : (
        <div className="row">
          {wishlist.items.map((product, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4 slide-up"
              key={product.id}
              style={{ animationDelay: `${0.05 + index * 0.03}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

