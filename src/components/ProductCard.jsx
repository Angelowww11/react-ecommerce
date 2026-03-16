import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  // Get addToCart from global context
  const { addToCart } = useContext(CartContext);
  const wishlist = useContext(WishlistContext);
  const favorite = wishlist?.isFavorite?.(product?.id);

  return (
    <div className="card h-100 shadow-sm hover-zoom product-card">
      <div className="position-relative">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: "200px", objectFit: "cover" }}
          loading="lazy"
        />
        <button
          type="button"
          className={
            "btn btn-sm position-absolute top-0 end-0 m-2 wishlist-btn " +
            (favorite ? "btn-danger" : "btn-light")
          }
          onClick={() => wishlist?.toggleFavorite?.(product)}
          aria-label={favorite ? "Remove from wishlist" : "Add to wishlist"}
          title={favorite ? "Saved" : "Save"}
        >
          <i className={favorite ? "fas fa-heart" : "far fa-heart"} />
        </button>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        {product.category && (
          <div className="mb-2">
            <span className="badge text-bg-secondary">{product.category}</span>
          </div>
        )}
        {typeof product.rating === "number" && (
          <div className="text-muted small mb-2">
            <i className="fas fa-star text-warning me-1" />
            {product.rating} / 5
          </div>
        )}
        <p className="card-text fw-bold fs-5 mb-3">${product.price}</p>
        <button 
          className="btn btn-secondary mt-auto"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 