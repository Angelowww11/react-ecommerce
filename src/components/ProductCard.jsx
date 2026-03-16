import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="card h-100 shadow-sm hover-zoom position-relative">
      <button
        type="button"
        className="btn btn-light btn-sm position-absolute top-0 end-0 m-2 rounded-circle wishlist-btn"
        onClick={() => toggleWishlist(product)}
        aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        <i
          className={inWishlist ? "fas fa-heart text-danger" : "far fa-heart text-secondary"}
        ></i>
      </button>
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        {product.description && (
          <p className="card-text text-muted small">
            {product.description.length > 80
              ? product.description.slice(0, 80) + "..."
              : product.description}
          </p>
        )}
        <p className="card-text fw-bold fs-5">${product.price.toFixed(2)}</p>
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