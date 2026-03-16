import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Map API data to product model exactly as the PDF instructs
        const formatted = data.slice(0, 4).map(item => ({
          id: item.id,
          name: item.title,
          oldPrice: item.price * 1.25,
          price: item.price,
          discount: 20,
          rating: Math.round(item.rating.rate),
          image: item.image
        }));
        
        setProducts(formatted);
      })
      .catch((error) => console.error("Error fetching home products:", error));
  }, []);

  return (
    <div className="container mt-5 fade-in">
      {/* SAFE BANNER: Using a direct web link so it doesn't cause a 'banner not defined' error */}
      <img 
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=300&fit=crop" 
        className="img-fluid w-100 mb-4 rounded slide-up" 
        alt="Store Banner" 
      />
      
      <div className="d-flex justify-content-between align-items-center mb-3 slide-up" style={{ animationDelay: '0.1s' }}>
        <h2>Featured Products</h2>
        {/* SAFE LINK: Using a standard anchor tag to prevent react-router errors */}
        <a href="/products" className="btn btn-outline-primary">
          View More Products
        </a>
      </div>

      <div className="row">
        {products.map((product, index) => (
          <div 
            className="col-lg-3 col-md-4 col-sm-6 mb-4 slide-up" 
            key={product.id}
            style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;