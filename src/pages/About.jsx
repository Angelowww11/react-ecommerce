const About = () => {
  return (
    <div className="container mt-5 fade-in">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center slide-up">
          <h2 className="mb-4">About A.O.P. Restaurant</h2>
          <p className="lead mb-4">
            Welcome to A.O.P., where passion meets flavor. We serve the freshest ingredients 
            crafted into unforgettable meals.
          </p>
          <div className="card shadow-sm p-4 mb-4 hover-zoom">
            <p>
              Established in 2024, our goal is to provide high-quality dining experiences 
              at affordable prices. Whether you are craving our signature burgers, spicy wings, 
              or fresh seafood soups, we have something for everyone.
            </p>
            <p>
              We believe in sustainable sourcing and supporting local farmers. Every dish 
              prepared in our kitchen tells a story of tradition and innovation.
            </p>
          </div>
          <p className="text-muted">
            This website is built using React, Vite, Bootstrap, and FontAwesome.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
