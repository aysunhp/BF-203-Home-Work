import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import header from "./header.module.css";
import { Outlet, Link } from "react-router-dom";

function HeaderSection() {
  return (
    <>
      <nav className={header.nav}>
        <div className={header.container}>
          <div className={header.div}>
            <div className="logo">
              <img
                style={{ height: 70 }}
                src="https://images.squarespace-cdn.com/content/v1/5f1155b4bacb5b1f3bf222da/6177a13b-102e-4096-8480-4b1f54d1d653/IL-Quirky%2BHand+Drawn%2BFood%2BLogo%2BIcons.png"
                alt=""
              />
            </div>
            <ul className={header.ul}>
              <li className={header.li}>
                <Link to="/">Home</Link>
              </li>
              <li className={header.li}>
                <Link to="/products">Products</Link>
              </li>
              <li className={header.li}>
                <Link to="/register">Register</Link>
              </li>
              <li className={header.li}>
                <Link to="/admin">Admin Panel</Link>
              </li>
            </ul>
          </div>
          <div className={header.div}>
            <ul className={header.ul}>
              <li className={header.li}>
                {" "}
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li className={header.li}>
                {" "}
                <Link to="/basket">Basket</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default HeaderSection;
