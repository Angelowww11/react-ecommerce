import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // search / filter / sort state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          name: item.title,
          oldPrice: item.price * 1.25,
          price: item.price,
          discount: 20,
          rating: Math.round(item.rating.rate),
          image: item.image,
          category: item.category,
          description: item.description,
        }));

        setProducts(formatted);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Fetch Error:", error);
        setLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ["all", ...unique];
  }, [products]);

  const filteredAndSorted = useMemo(() => {
    let result = [...products];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (priceRange !== "all") {
      result = result.filter((p) => {
        if (priceRange === "0-25") return p.price < 25;
        if (priceRange === "25-50") return p.price >= 25 && p.price < 50;
        if (priceRange === "50-100") return p.price >= 50 && p.price < 100;
        if (priceRange === "100+") return p.price >= 100;
        return true;
      });
    }

    if (sortOption !== "default") {
      result.sort((a, b) => {
        if (sortOption === "price-asc") return a.price - b.price;
        if (sortOption === "price-desc") return b.price - a.price;
        if (sortOption === "name-asc")
          return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
        if (sortOption === "rating-desc") return b.rating - a.rating;
        return 0;
      });
    }

    return result;
  }, [products, searchTerm, selectedCategory, priceRange, sortOption]);

  if (loading) {
    return (
      <div className="container mt-5 fade-in">
        <div className="row">
          <div className="col-lg-2 col-md-3 mb-4 slide-up">
            <div className="sticky-sidebar">
              <div className="placeholder-glow">
                <span className="placeholder col-8 mb-2"></span>
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="placeholder col-12 mb-1"></span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="placeholder col-6"></span>
              <span className="placeholder col-3"></span>
            </div>
            <div className="row">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mb-4"
                  key={index}
                >
                  <div className="card h-100 shadow-sm">
                    <div className="card-img-top bg-light placeholder" style={{ height: "200px" }}></div>
                    <div className="card-body">
                      <p className="card-text placeholder-glow">
                        <span className="placeholder col-8 mb-2"></span>
                        <span className="placeholder col-6 mb-2"></span>
                        <span className="placeholder col-4"></span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 fade-in">
      <div className="row">
        <div className="col-lg-3 col-md-4 mb-4 slide-up">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            onClearFilters={() => {
              setSelectedCategory("all");
              setPriceRange("all");
            }}
          />
        </div>
        <div className="col-lg-9 col-md-8">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-3 slide-up">
            <h2 className="mb-2 mb-md-0">All Products</h2>
            <div className="d-flex flex-column flex-sm-row gap-2">
              <input
                type="search"
                className="form-control"
                placeholder="Search by Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="form-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Sort by</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Product Name (A-Z)</option>
                <option value="rating-desc">Rating / Popularity</option>
              </select>
            </div>
          </div>

          <div className="row">
            {filteredAndSorted.length === 0 && (
              <p className="text-muted">No products match your filters.</p>
            )}

            {filteredAndSorted.map((product, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4 slide-up"
                key={product.id}
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
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