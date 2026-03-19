const About = () => {
  return (
    <div className="container mt-5 fade-in">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center slide-up">
          <h2 className="mb-4">About PixelForge Gear</h2>
          <p className="lead mb-4">
            PixelForge Gear is a modern gaming accessories concept store — focused on
            clean aesthetics, comfortable ergonomics, and great value.
          </p>
          <div className="card shadow-sm p-4 mb-4 hover-zoom">
            <p>
              Our mission is simple: help you build a setup you love coming back to.
              From keyboards and headsets to everyday desk essentials, we curate gear
              that looks sharp and performs well.
            </p>
            <p>
              This project is a frontend-only React app that demonstrates product
              search, filtering, sorting, wishlist favorites, and a light/dark theme.
            </p>
          </div>
          <div className="card shadow-sm p-4 mb-4 hover-zoom">
            <h4>About the Developer</h4>
            <p><strong>Name:</strong> Angelo Kacey N. Pineda</p>
            <p><strong>School:</strong> FEU Tech</p>
            <p>
              As a passionate student developer, I created this e-commerce platform to showcase modern web development techniques and provide a seamless shopping experience for gaming enthusiasts.
            </p>
          </div>
          <p className="text-muted">
            Built using React, Vite, Bootstrap, and FontAwesome.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
