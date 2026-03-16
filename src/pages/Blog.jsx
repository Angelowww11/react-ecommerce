const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&h=600&q=80";

const posts = [
  {
    id: "setup",
    title: "Build a Clean Desk Setup (Under a Student Budget)",
    excerpt:
      "Small upgrades like a laptop stand, mousepad, and cable management can make your workspace feel premium—without spending a lot.",
    category: "Setup & Workspace",
    image:
      "https://i.pinimg.com/1200x/ee/27/da/ee27da3857e1acff4aa6f4e7946f38bc.jpg",
  },
  {
    id: "keyboard",
    title: "Mechanical Keyboards: Switches Explained (Red vs Brown vs Blue)",
    excerpt:
      "Choosing the right switch changes everything—typing sound, feel, and fatigue. Here’s how to pick what fits your style.",
    category: "Gadgets & Gear",
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&h=600&q=80",
  },
  {
    id: "headphones",
    title: "Headphones for Focus: What to Look For in Daily Use",
    excerpt:
      "Comfort, isolation, mic quality, and battery life matter more than fancy specs. These are the features we recommend first.",
    category: "Guides & Reviews",
    image:
      "https://i.pinimg.com/1200x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
  },
];

const categories = ["Setup & Workspace", "Gadgets & Gear", "Guides & Reviews"];

const Blog = () => {
  return (
    <div className="container mt-5 fade-in">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-3 slide-up">
          <div className="sticky-sidebar">
            <h4 className="mb-2">BLOG CATEGORIES</h4>
            <div className="list-group shadow-sm mb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                  {cat}
                </button>
              ))}
            </div>
            <h4 className="mb-2">RECENT POSTS</h4>
            <div className="list-group shadow-sm">
              {posts.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="col-md-9 mb-4">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 slide-up">
            <div>
              <h2 className="mb-1">Tech Shop Blog</h2>
              <p className="text-muted mb-0">
                Tips, guides, and gear picks from A.O.P. Tech Store.
              </p>
            </div>
          </div>

          <div className="row">
            {posts.map((post, idx) => (
              <div
                className="col-12 mb-4 slide-up"
                key={post.id}
                style={{ animationDelay: `${0.15 + idx * 0.1}s` }}
              >
                <div className="card h-100 shadow-sm hover-zoom">
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                    style={{ height: "300px", objectFit: "cover" }}
                    onError={(e) => {
                      if (e.currentTarget.src !== FALLBACK_IMAGE) {
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }
                    }}
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-secondary">{post.category}</span>
                      <span className="text-muted small">A.O.P. Tech Store</span>
                    </div>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-muted">{post.excerpt}</p>
                    <button className="btn btn-secondary" type="button">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;