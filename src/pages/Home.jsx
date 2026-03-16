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
          description: item.description,
          category: item.category,
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
      <section className="hero card shadow-sm border-0 overflow-hidden slide-up">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center">
            <div className="text-uppercase small text-muted mb-2">
              Gaming accessories store
            </div>
            <h1 className="display-6 fw-bold mb-3">
              Upgrade your setup with PixelForge Gear
            </h1>
            <p className="text-muted mb-4">
              Keyboards, headsets, controllers, and desk essentials — curated to look
              sharp and feel great.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a href="/products" className="btn btn-primary">
                Shop all products
              </a>
              <a href="/about" className="btn btn-outline-secondary">
                Our story
              </a>
            </div>
          </div>
          <div className="col-lg-6 hero-image" role="img" aria-label="Gaming setup banner" />
        </div>
      </section>
      
      <div className="d-flex justify-content-between align-items-center mb-3 slide-up" style={{ animationDelay: '0.1s' }}>
        <h2>Featured Picks</h2>
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