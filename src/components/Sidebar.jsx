const Sidebar = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  onClearFilters,
}) => {
  return (
    <div className="sticky-sidebar">
      <h4 className="mb-3">Filter Products</h4>

      <div className="list-group shadow-sm mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={
              "list-group-item list-group-item-action" +
              (selectedCategory === cat ? " active bg-secondary border-secondary" : "")
            }
            onClick={() => onCategoryChange(cat)}
          >
            {cat === "all" ? "All Categories" : cat}
          </button>
        ))}
      </div>

      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h6 className="card-title mb-3">Price Range</h6>
          <div className="d-flex flex-column gap-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="priceRange"
                id="price-all"
                value="all"
                checked={priceRange === "all"}
                onChange={(e) => onPriceRangeChange(e.target.value)}
              />
              <label className="form-check-label" htmlFor="price-all">
                Any price
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="priceRange"
                id="price-0-25"
                value="0-25"
                checked={priceRange === "0-25"}
                onChange={(e) => onPriceRangeChange(e.target.value)}
              />
              <label className="form-check-label" htmlFor="price-0-25">
                Below $25
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="priceRange"
                id="price-25-50"
                value="25-50"
                checked={priceRange === "25-50"}
                onChange={(e) => onPriceRangeChange(e.target.value)}
              />
              <label className="form-check-label" htmlFor="price-25-50">
                $25 - $50
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="priceRange"
                id="price-50-100"
                value="50-100"
                checked={priceRange === "50-100"}
                onChange={(e) => onPriceRangeChange(e.target.value)}
              />
              <label className="form-check-label" htmlFor="price-50-100">
                $50 - $100
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="priceRange"
                id="price-100-plus"
                value="100+"
                checked={priceRange === "100+"}
                onChange={(e) => onPriceRangeChange(e.target.value)}
              />
              <label className="form-check-label" htmlFor="price-100-plus">
                $100 and above
              </label>
            </div>
          </div>

          <button
            className="btn btn-outline-secondary btn-sm w-100 mt-3"
            onClick={onClearFilters}
          >
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;