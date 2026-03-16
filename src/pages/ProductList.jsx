import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // change the URL
      .then((res) => res.json())
      .then((data) => {
        // Map API data to product model
        const formatted = data.map((item) => ({
          id: item.id,
          name: item.title,
          description: item.description,
          category: item.category,
          oldPrice: item.price * 1.25,
          price: item.price,
          discount: 20,
          rating: Math.round(item.rating?.rate ?? 0),
          image: item.image,
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
    const cats = Array.from(
      new Set(products.map((p) => p.category).filter(Boolean))
    ).sort((a, b) => a.localeCompare(b));
    return ["all", ...cats];
  }, [products]);

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();

    const inPriceRange = (price) => {
      if (priceRange === "all") return true;
      if (priceRange === "0-25") return price < 25;
      if (priceRange === "25-50") return price >= 25 && price <= 50;
      if (priceRange === "50-100") return price > 50 && price <= 100;
      if (priceRange === "100+") return price > 100;
      return true;
    };

    let list = products.filter((p) => {
      const matchesSearch = q
        ? (p.name ?? "").toLowerCase().includes(q) ||
          (p.category ?? "").toLowerCase().includes(q)
        : true;
      const matchesCategory =
        selectedCategory === "all" ? true : p.category === selectedCategory;
      const matchesPrice = inPriceRange(Number(p.price ?? 0));
      return matchesSearch && matchesCategory && matchesPrice;
    });

    const sorters = {
      relevance: () => 0,
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      "name-asc": (a, b) => (a.name ?? "").localeCompare(b.name ?? ""),
      rating: (a, b) => (b.rating ?? 0) - (a.rating ?? 0),
    };
    const sorter = sorters[sortBy] ?? sorters.relevance;
    if (sortBy !== "relevance") list = [...list].sort(sorter);

    return list;
  }, [products, search, selectedCategory, priceRange, sortBy]);

  const clearAll = () => {
    setSearch("");
    setSelectedCategory("all");
    setPriceRange("all");
    setSortBy("relevance");
  };

  if (loading) {
    return <h3 className="text-center mt-5 fade-in">Loading products...</h3>;
  }

  return (
    <div className="container mt-5 fade-in">
      <div className="row">
        <div className="col-lg-2 col-md-3 mb-4 slide-up">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            onClearFilters={clearAll}
          />
        </div>
        <div className="col-lg-10 col-md-9">
          <div
            className="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-3 slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div>
              <h2 className="mb-1">All Products</h2>
              <div className="text-muted">
                Showing {filteredProducts.length} of {products.length}
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2 align-items-end">
              <div style={{ minWidth: 260 }}>
                <label className="form-label mb-1 small text-muted">
                  Search products
                </label>
                <input
                  className="form-control"
                  placeholder="Search by name or keyword..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div style={{ minWidth: 220 }}>
                <label className="form-label mb-1 small text-muted">Sort</label>
                <select
                  className="form-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="name-asc">Product Name (A–Z)</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={clearAll}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="row">
            {filteredProducts.map((product, index) => (
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