// src/components/MenuPage.jsx
import{ useState } from "react";
import menuItems from "../data/menuItmes"; // Assume this file exports an array of menu items
import './menu.css'
export default function Menu() {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All" ? menuItems : menuItems.filter((item) => item.category === filter);

  return (
    <div className="container text-center py-5">
      <h2 className="mb-4">Our Menu</h2>

      {/* Filter Buttons */}
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
  );
}
