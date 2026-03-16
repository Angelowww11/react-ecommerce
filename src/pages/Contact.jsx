const Contact = () => {
  return (
    <div className="container mt-5 fade-in">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 slide-up">
          <h2 className="mb-4 text-center">Contact Us</h2>
          <div className="card shadow-sm hover-zoom">
            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Angelo Pineda" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="anything@example.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="How can we help you please answer please?"></textarea>
                </div>
                <button type="button" className="btn btn-secondary w-100">
                  <i className="fas fa-paper-plane me-2"></i> Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Info Section */}
          <div className="text-center mt-4 slide-up" style={{ animationDelay: '0.2s' }}>
            <p><i className="fas fa-map-marker-alt me-2"></i> 123 Food Street, Flavor Town</p>
            <p><i className="fas fa-phone me-2"></i> (123) 123-111-356</p>
            <p><i className="fas fa-envelope me-2"></i> contact@aop-restaurant.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
