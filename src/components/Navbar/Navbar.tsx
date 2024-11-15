import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { Nav } from "./Navbar.styled";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Nav openMenu={openMenu}>
      <div className="mobile-navbar-btn">
        <CgMenu
          className="mobile-nav-icon menu-icon"
          onClick={() => setOpenMenu(true)}
        />
        <CgCloseR
          className="mobile-nav-icon close-icon"
          onClick={() => setOpenMenu(false)}
        />
      </div>

      <ul className="navbar-list">
        <li>
          <NavLink
            className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="/"
          >
            Buses
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="/about"
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="/contact"
          >
            Contactanos
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
