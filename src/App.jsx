// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Wishlist from "./pages/Wishlist";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"; // <-- IMPORT THIS

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> {/* <-- ADD THIS ROUTE */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;