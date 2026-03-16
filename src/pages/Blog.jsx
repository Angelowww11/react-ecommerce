import { useMemo, useState } from "react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const posts = useMemo(
    () => [
      {
        id: "switches-101",
        category: "Guides",
        title: "Mechanical Switches 101: Linear vs Tactile vs Clicky",
        excerpt:
          "A quick guide to help you pick the right feel for gaming, typing, and everything in-between.",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1400&h=700&fit=crop",
      },
      {
        id: "desk-setup",
        category: "Setup",
        title: "Clean Desk Setup Checklist (Budget-Friendly)",
        excerpt:
          "Small upgrades that make your desk look premium: cable routing, lighting, and layout tips.",
        image:
          "https://images.unsplash.com/photo-1527443224154-c4d3a78c1d75?w=1400&h=700&fit=crop",
      },
      {
        id: "headset-comfort",
        category: "Reviews",
        title: "Headset Comfort Matters: What to Look For",
        excerpt:
          "Clamp force, padding, weight, and mic quality — the things you’ll feel after hour 3.",
        image:
          "https://i.pinimg.com/1200x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
      },
    ],
    []
  );

  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.category)));
    return ["All", ...unique];
  }, [posts]);

  const visiblePosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  const recentPosts = useMemo(() => posts.slice(0, 3), [posts]);

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
                  className={
                    "list-group-item list-group-item-action" +
                    (activeCategory === cat
                      ? " active bg-secondary border-secondary"
                      : "")
                  }
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <h4 className="mb-2">RECENT POSTS</h4>
            <div className="list-group shadow-sm">
              {recentPosts.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => setActiveCategory(p.category)}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="col-md-9 mb-4">
          <div
            className="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-4 slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div>
              <h2 className="mb-1">Blog</h2>
              <div className="text-muted">
                Tips, reviews, and setup guides for your gaming space.
              </div>
            </div>
            <div className="text-muted small">
              Category: <span className="fw-semibold">{activeCategory}</span>
            </div>
          </div>

          <div className="row">
            {visiblePosts.map((post, index) => (
              <div
                className="col-12 mb-4 slide-up"
                key={post.id}
                style={{ animationDelay: `${0.15 + index * 0.08}s` }}
              >
                <div className="card h-100 shadow-sm hover-zoom overflow-hidden">
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                    style={{ height: "300px", objectFit: "cover" }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1400&h=700&fit=crop";
                    }}
                  />
                  <div className="card-body">
                    <div className="mb-2">
                      <span className="badge text-bg-secondary">
                        {post.category}
                      </span>
                    </div>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-muted">{post.excerpt}</p>
                    <button type="button" className="btn btn-secondary">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {visiblePosts.length === 0 && (
              <div className="col-12">
                <div className="card p-4 shadow-sm">
                  <div className="fw-semibold mb-1">No posts found</div>
                  <div className="text-muted">Try a different category.</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;