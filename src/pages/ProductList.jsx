import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // change the URL
      .then((res) => res.json())
      .then((data) => {
        // Map API data to product model
        const formatted = data.map(item => ({
          id: item.id,
          name: item.title,
          oldPrice: item.price * 1.25,
          price: item.price,
          discount: 20,
          rating: Math.round(item.rating.rate),
          image: item.image
        }));
        
        setProducts(formatted);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Fetch Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 className="text-center mt-5 fade-in">Loading products...</h3>;
  }

  return (
    <div className="container mt-5 fade-in">
      <div className="row">
        <div className="col-lg-2 col-md-3 mb-4 slide-up">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9">
          <h2 className="mb-3 slide-up" style={{ animationDelay: '0.1s' }}>All Products</h2>
          <div className="row">
            {products.map((product, index) => (
              <div 
                className="col-lg-3 col-md-4 col-sm-6 mb-4 slide-up" 
                key={product.id}
                style={{ animationDelay: `${0.1 + (index * 0.05)}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;