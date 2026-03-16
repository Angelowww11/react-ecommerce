import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  // Get addToCart from global context
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 shadow-sm hover-zoom">
      <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <p className="card-text fw-bold fs-5">${product.price}</p>
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