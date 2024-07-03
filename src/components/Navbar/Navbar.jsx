import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="d-flex align-items-baseline">
        <Link href="/?page=1&per_page=10">
          <h2
            className="text-uppercase fw-bolder navbar-with-border"
            style={{ color: "#4CAF50" }}
          >
            Inspire
            <span className="navbar-border headerText-alt"></span>
          </h2>
        </Link>
        <h5
          className="m-0 ms-2 fw-medium navbar-with-border"
          style={{ color: "#4CAF50" }}
        >
          Think Create Share
        </h5>
      </div>
      <div>
        <h3>
          <Link href="https://github.com/Recepurkun" target="_blank">
            About
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
