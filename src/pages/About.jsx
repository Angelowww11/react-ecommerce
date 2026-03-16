const About = () => {
  return (
    <div className="container mt-5 fade-in">
      <div className="row justify-content-center">
        <div className="col-lg-8 slide-up text-center">
          <h2 className="mb-4">About A.O.P. Tech Store</h2>
          <p className="lead mb-4">
            A.O.P. Tech Store is a student-built e-commerce concept focused on
            modern gadgets, peripherals, and everyday tech essentials.
          </p>
          <div className="card shadow-sm p-4 mb-4 hover-zoom text-start">
            <p>
              Our mission is to make technology feel approachable and inspiring.
              We curate products that help you study smarter, create more, and
              play better&mdash;from mechanical keyboards and headphones to
              laptop stands and RGB accessories.
            </p>
            <p>
              This project was created as a React.js e-commerce laboratory
              project. The frontend is built with React functional components,
              hooks, React Router, Bootstrap, and FontAwesome. All product data
              is loaded from a public API and enhanced on the client side.
            </p>
            <p>
              While A.O.P. Tech Store is not a real business, it represents how
              a clean, responsive, and user-friendly shopping experience can be
              implemented using modern frontend tools.
            </p>
          </div>
          <p className="text-muted">
            Stack: React, Vite, React Router, Bootstrap, FontAwesome, custom
            hooks, and reusable components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
