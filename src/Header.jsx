import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <Link className="navbar-brand" to="/" style={{fontFamily: "'Dancing Script', cursive",fontSize:"30px"}} >
          Feane
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left Menu Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/book-table" className="nav-link">
                Book Table
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center text-white">
            <span className="bi bi-person mx-2"></span>
            <span className="bi bi-cart mx-2"></span>
            <span className="bi bi-search mx-2"></span>
            <button className="btn btn-warning ms-3 rounded-pill">
              Order Online
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
