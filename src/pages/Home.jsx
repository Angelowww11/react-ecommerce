import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import { apiUrl } from "../utils/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(apiUrl("/api/products"))
      .then((res) => res.json())
      .then((data) => {
        // Map API data to product model exactly as the PDF instructs
        const formatted = data.slice(0, 4).map(item => ({
          id: item.id,
          name: item.title ?? item.name,
          oldPrice: item.price * 1.25,
          price: item.price,
          discount: 20,
          rating: Math.round(item.rating?.rate ?? item.rating ?? 0),
          image: item.image,
          description: item.description,
          category: item.category,
        }));
        
        setProducts(formatted);
      })
      .catch((error) => console.error("Error fetching home products:", error));
  }, []);

  return (
    <div className="container mt-5 fade-in">
      <section className="row align-items-center mb-5 slide-up">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-5 fw-bold mb-3">A.O.P. Tech Store</h1>
          <p className="lead mb-4">
            Discover hand-picked gadgets, peripherals, and accessories designed
            to level up your study, gaming, and creative workflow.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <a href="/products" className="btn btn-primary btn-lg">
              Shop Now
            </a>
            <a href="/about" className="btn btn-outline-secondary btn-lg">
              Learn More
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=400&fit=crop"
            className="img-fluid rounded shadow-sm"
            alt="Tech workspace banner"
          />
        </div>
      </section>

      <section>
        <div
          className="d-flex justify-content-between align-items-center mb-3 slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h2>Featured Products</h2>
          <a href="/products" className="btn btn-outline-primary">
            View All Products
          </a>
        </div>

        <div className="row">
          {products.map((product, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4 slide-up"
              key={product.id}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;