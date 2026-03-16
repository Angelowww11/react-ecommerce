const Blog = () => {
  return (
    <div className="container mt-5 fade-in">
      <div className="row">
        
        {/* Sidebar */}
        <div className="col-md-3 mb-3 slide-up">
          <div className="sticky-sidebar">
            <h4 className="mb-2">BLOG CATEGORIES</h4>
            <div className="list-group shadow-sm mb-4">
              <a href="#" className="list-group-item list-group-item-action">Food Stories</a>
              <a href="#" className="list-group-item list-group-item-action">Recipes</a>
              <a href="#" className="list-group-item list-group-item-action">Chef Tips</a>
            </div>
            <h4 className="mb-2">RECENT POSTS</h4>
            <div className="list-group shadow-sm">
              <a href="#" className="list-group-item list-group-item-action">Classic Burger Story</a>
              <a href="#" className="list-group-item list-group-item-action">Spicy Wings Story</a>
              <a href="#" className="list-group-item list-group-item-action">Seafood Soup Story</a>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="col-md-9 mb-4">
          <h2 className="mb-4 slide-up" style={{ animationDelay: '0.1s' }}>BLOGS</h2>
          <div className="row">
            
            {/* Post 1 */}
            <div className="col-md-12 mb-4 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="card h-100 shadow-sm hover-zoom">
                <img src="[https://media.istockphoto.com/id/1346064470/photo/enjoying-my-favorite-cheeseburger-right-now.jpg?s=612x612&w=0&k=20&c=HhYq6zYUWSoVxtYot6QtFQl-hEf1Bl0IQ_-0w_aWl9c=](https://media.istockphoto.com/id/1346064470/photo/enjoying-my-favorite-cheeseburger-right-now.jpg?s=612x612&w=0&k=20&c=HhYq6zYUWSoVxtYot6QtFQl-hEf1Bl0IQ_-0w_aWl9c=)" className="card-img-top" alt="Burger Story" style={{ height: '300px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">The Secret Behind Our Classic Burger</h5>
                  <p className="card-text text-muted">Discover the history of our most popular dish and the special ingredients that make it unique.</p>
                  <button className="btn btn-secondary">Read More</button>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="col-md-12 mb-4 slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="card h-100 shadow-sm hover-zoom">
                <img src="[https://media.istockphoto.com/id/187696383/photo/child-having-buffalo-wings.jpg?s=612x612&w=0&k=20&c=m5IxYJdfZ-R-0mLt3kk5dbX_0uv46ytea5vVgw2c_yg=](https://media.istockphoto.com/id/187696383/photo/child-having-buffalo-wings.jpg?s=612x612&w=0&k=20&c=m5IxYJdfZ-R-0mLt3kk5dbX_0uv46ytea5vVgw2c_yg=)" className="card-img-top" alt="Wings Story" style={{ height: '300px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Why Our Wings Are So Spicy</h5>
                  <p className="card-text text-muted">A deep dive into the peppers and spices we use to create our signature heat.</p>
                  <button className="btn btn-secondary">Read More</button>
                </div>
              </div>
            </div>

             {/* Post 3 */}
             <div className="col-md-12 mb-4 slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="card h-100 shadow-sm hover-zoom">
                <img src="[https://cdn.prod.website-files.com/5fe870209b4f367ca43b8b48/6822bdc8c7b5d1f5818d2926_607da5bb47737e1f1e84aab8_Seafood20is20good20for20respiratory20problems.jpeg](https://cdn.prod.website-files.com/5fe870209b4f367ca43b8b48/6822bdc8c7b5d1f5818d2926_607da5bb47737e1f1e84aab8_Seafood20is20good20for20respiratory20problems.jpeg)" className="card-img-top" alt="Soup Story" style={{ height: '300px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Fresh Seafood: From Ocean to Bowl</h5>
                  <p className="card-text text-muted">How we source the freshest catch for our famous seafood soups.</p>
                  <button className="btn btn-secondary">Read More</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;