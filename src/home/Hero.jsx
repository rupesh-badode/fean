import { useState, useEffect } from "react";

import menuItems from "../data/menuItmes";


const styles = {
  container: {
    display: "flex",
    gap: 30,
    padding: 40,
    justifyContent: "center",
    backgroundColor: "#fff",
    flexWrap: "wrap",
  },
  card: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1e252c",
    color: "#fff",
    padding: 25,
    borderRadius: 8,
    width: 450,
    gap: 20,
    flexShrink: 0,

    maxWidth: "100%",
    boxSizing: "border-box",
  },
  imageWrapper: {
    border: "4px solid #ffb934",
    borderRadius: "50%",
    overflow: "hidden",
    width: 120,
    height: 120,
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  title: {
    fontFamily: "'Dancing Script', cursive",
    fontWeight: "normal",
    fontSize: 20,
    margin: 0,
  },
  discount: {
    fontSize: 36,
    margin: "8px 0",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#ffb934",
    border: "none",
    borderRadius: 25,
    color: "#fff",
    padding: "10px 30px",
    fontSize: 18,
    cursor: "pointer",
    fontWeight: "normal",
    display: "flex",
    alignItems: "center",
    transition: "background-color 0.3s ease",
  },
};



const promotions = [
  {
    title: "Tasty Thursdays",
    discount: "20%",
    imgSrc:
      "/home/o1.jpg",
    alt: "Delicious burger with lettuce and tomato",
  },
  {
    title: "Pizza Days",
    discount: "15%",
    imgSrc:
      "/home/o2.jpg",
    alt: "Pizza slice with tomatoes and basil",
  },
];

const PromotionCard = ({ title, discount, imgSrc, alt }) => (
  <div style={styles.card}>
    <div style={styles.imageWrapper}>
      <img src={imgSrc} alt={alt} style={styles.image} />
    </div>
    <div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.discount}>
        {discount} <small style={{ fontStyle: "italic" }}>off</small>
      </p>
      <button
        style={styles.button}
        aria-label={`Order now for ${title} promotion`}
      >
        Order Now <span style={{ marginLeft: 5 }}>🛒</span>
      </button>
    </div>
  </div>
);

export default function Hero() {
  const [filter, setFilter] = useState("All");
  const filteredItems =
  filter === "All" ? menuItems : menuItems.filter((item) => item.category === filter);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Submitted! ✅\n" + JSON.stringify(formData, null, 2));
  };

  useEffect(() => {
    
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);


   const testimonials = [
    {
      id: 1,
      name: "Mike Hamell",
      role: "magna aliqua",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Moana Michell",
      role: "magna aliqua",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };


  return (
    <>
      <section
        style={{
          backgroundImage: "url('/home/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          color: "white",
          padding: "0 15px",
        }}
      >
    <div id="heroCarousel" className="container carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <h1 style={{ fontFamily: "'Dancing Script', cursive" }}>Fast Food Restaurant</h1>
          <p>
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad
            mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore,
            sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
          </p>
          <button className="btn btn-warning rounded-5">Order now</button>
        </div>
        <div className="carousel-item ">
          <h1 style={{ fontFamily: "'Dancing Script', cursive" }}>Fast Food Restaurant</h1>
          <p>
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad
            mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore,
            sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
          </p>
          <button className="btn btn-warning rounded-5">Order now</button>
        </div>
        <div className="carousel-item ">
          <h1 style={{ fontFamily: "'Dancing Script', cursive" }}>Fast Food Restaurant</h1>
          <p>
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad
            mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore,
            sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
          </p>
          <button className="btn btn-warning rounded-5">Order now</button>
        </div>
      </div>

      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
    </div>

    </section>

    <main>
      <div  style={styles.container}>
        {promotions.map(({ title, discount, imgSrc, alt }) => (
          <PromotionCard
            key={title}
            title={title}
            discount={discount}
            imgSrc={imgSrc}
            alt={alt}
          />
        ))}
      </div>
        {/* Menu Section */}

      <div className="container text-center py-5">
        <h2 className="mb-4">Our Menu</h2>
          <div className="mb-4">
            {["All", "Burger", "Pizza", "Pasta", "Fries"].map((cat) => (
              <button
                key={cat}
                className={`btn mx-2 ${filter === cat ? "btn-dark" : "btn-outline-dark"}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Menu Items Grid */}
          <div className="row g-4">
            {filteredItems.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="card h-100 border-0 shadow-sm menu-card">
                    <img src={item.img} className="card-img-top p-3" alt={item.name} />
                    <div className="card-body bg-dark text-white rounded-bottom">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text small">
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit magnam voluptatem repellendus sed eaque.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">${item.price}</span>
                        <button className="btn btn-warning btn-sm rounded-circle">+</button>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          {/* View More Button */}
          <div className="mt-5">
            <button className="btn btn-warning px-4 py-2">View More</button>
          </div>
        </div>

        <div className="about-section py-5 bg-dark text-white">
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
        </div>

        <div className="container my-5">
      <div className="row g-4 align-items-center">

        <div className="col-md-6">
          <h3 style={{ fontFamily: "'Dancing Script', cursive" }}>Book A Table</h3>
          <form onSubmit={handleSubmit} className="mt-3">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              className="form-control mb-3"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              className="form-control mb-3"
              name="persons"
              value={formData.persons}
              onChange={handleChange}
              required
            >
              <option value="">How many persons?</option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
              <option value="5">5+ Persons</option>
            </select>
            <input
              type="date"
              className="form-control mb-3"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-warning px-4 py-2 rounded-5">
              BOOK NOW
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.85850953998!2d-74.00601568459457!3d40.712775779330116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>


    <div className="container my-5 text-center">
      <h2
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        What Says Our Customers
      </h2>

      <div className="row justify-content-center">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={`col-md-5 mb-4 ${
              index === current ? "d-block" : "d-none"
            }`}
          >
            <div className="card bg-dark text-white p-3 rounded-3">
              <p>{item.text}</p>
              <h5 className="fw-bold">{item.name}</h5>
              <p>{item.role}</p>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid gold",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-warning rounded-circle mx-2"
          onClick={prevSlide}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          className="btn btn-warning rounded-circle mx-2"
          onClick={nextSlide}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>


    </main>
    </>
  );
}
