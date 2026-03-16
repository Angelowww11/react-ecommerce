import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="container mt-5 fade-in">
      <h2 className="mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-muted">You have no items in your wishlist yet.</p>
      ) : (
        <div className="row">
          {wishlist.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4 slide-up"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

