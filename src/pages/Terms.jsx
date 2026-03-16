// src/pages/Terms.jsx
const Terms = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h2 className="mb-4">Terms & Conditions</h2>
          
          <div className="card shadow-sm p-4">
            <h4>1. Introduction</h4>
            <p>Welcome to A.O.P. Restaurant. By accessing our website and ordering food, you agree to the following terms and conditions.</p>
            
            <hr />
            
            <h4>2. Ordering & Payment</h4>
            <p>All orders are subject to availability. Prices are listed in USD and are inclusive of applicable taxes. We reserve the right to refuse service to anyone.</p>
            
            <hr />
            
            <h4>3. Refund Policy</h4>
            <p>If you are not satisfied with your meal, please contact us immediately. Refunds or replacements are provided at the manager's discretion for quality issues reported within 1 hour of delivery.</p>
            
            <hr />
            
            <h4>4. Privacy Policy</h4>
            <p>We respect your privacy. Your personal information (name, address, email) is used solely for processing orders and will never be sold to third parties.</p>
            
            <hr />
            
            <h4>5. Contact Us</h4>
            <p>If you have any questions about these terms, please contact us at <strong>support@aop-restaurant.com</strong>.</p>
          </div>
          
          <div className="text-center mt-4 mb-5">
            <p className="text-muted">Last updated: October 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;