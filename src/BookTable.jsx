import { useState } from "react";

export default function BookTable() {
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

  return (
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
  );
}
