
export default function About() {
  return (
    <section className="about-section py-5 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/about-img.png"
              alt="About"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </div>

          {/* Right Text */}
          <div className="col-md-6">
            <h2
              className="mb-3"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              We Are Feane
            </h2>
            <p className="mb-4" style={{ lineHeight: "1.8" }}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn’t anything embarrassing hidden in the
              middle of text.
            </p>
            <button className="btn btn-warning px-4 py-2 rounded-5">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
