import logo from "/logo.webp";
import { Container, MainHeader } from "./Header.styled";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export const Header = () => {
  return (
    <MainHeader>
      <Container>
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <Navbar />
      </Container>
    </MainHeader>
  );
};
