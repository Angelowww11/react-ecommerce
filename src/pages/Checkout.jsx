import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    payment: 'cod'
  });

  const [submitted, setSubmitted] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.12; // 12% VAT
  const total = subtotal + tax;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address || !form.phone) {
      alert("Please complete all fields");
      return;
    }

    setFinalTotal(total);
    clearCart(); 
    setSubmitted(true); 
  };

  if (submitted) {
    return (
      <div className="container mt-5 text-center fade-in slide-up">
        <h2 className="text-success mb-3"><i className="fas fa-check-circle"></i> Order Confirmed!</h2>
        <p className="fs-5">Thank you, <strong>{form.name}</strong>. Your order has been placed.</p>
        <p className="fs-5">Total Amount: <strong>${finalTotal.toFixed(2)}</strong></p>
        <a href="/" className="btn btn-primary mt-3">Continue Shopping</a>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center fade-in slide-up">
        <h2>Your cart is empty</h2>
        <a href="/products" className="btn btn-primary mt-3">Go to Products</a>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5 fade-in">
      <h2 className="mb-4 slide-up">Checkout</h2>
      <div className="row">
        
        {/* Checkout Form */}
        <div className="col-md-6 mb-4 slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="mb-3">Customer Information</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea name="address" className="form-control" rows="3" onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="text" name="phone" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label className="form-label">Payment Method</label>
                  <select name="payment" className="form-select" onChange={handleChange}>
                    <option value="cod">Cash on Delivery</option>
                    <option value="gcash">GCash</option>
                    <option value="card">Credit Card</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success w-100 btn-lg">Place Order</button>
              </form>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-6 slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="card shadow-sm bg-light">
            <div className="card-body">
              <h4 className="mb-4">Order Summary</h4>
              
              {cart.map(item => (
                <div key={item.id} className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                  <span>{item.name} <small className="text-muted">x {item.qty}</small></span>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
              
              <div className="mt-3">
                <div className="d-flex justify-content-between text-muted">
                  <p className="mb-1">Subtotal:</p>
                  <p className="mb-1">${subtotal.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between text-muted">
                  <p className="mb-1">Tax (12%):</p>
                  <p className="mb-1">${tax.toFixed(2)}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <h5 className="mb-0">Total:</h5>
                  <h5 className="mb-0 text-success">${total.toFixed(2)}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;