import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useAuthContext from "../contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./module_navbar.css";

export default function Navbars() {
  const { user, logout } = useAuthContext();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" data-bs-theme="dark" className={`${style.nav}`}>
      <Container>
        <Navbar.Brand as={Link} to="/">Ingatlaniroda.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ingatlan">Ingatlanok</Nav.Link>
            {user && ( // Bejelentkezett felhasználó esetén
              <>
                <Nav.Link as={Link} to="/hirdetes">Hirdetésfeladás</Nav.Link>
                {user.jogosultsag === "admin" && ( // Csak adminisztrátoroknak
                  <NavDropdown
                    id="nav-dropdown-dark"
                    title="Karbantartás"
                    menuVariant="dark"
                  >
                    <NavDropdown.Item as={Link} to="/useradmin">
                      Felhasználók karbantartása
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/ingatlanadmin">
                      Ingatlanok karbantartása
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="#action">Hírlevél küldése</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/admin">Karbantartások</NavDropdown.Item>
                  </NavDropdown>
                )}
              </>
            )}
          </Nav>
          <Nav>
          
            {user ? ( // Bejelentkezett felhasználó esetén
              <>
                <Navbar.Text>Bejelentkezve mint: {user.name}</Navbar.Text>
                <Button className="logoutButton" variant="primary" onClick={logout}>
                  Kijelentkezés
                </Button>
              </>
            ) : ( // Bejelentkezés nélküli felhasználó esetén
              <>
                <Nav.Link as={Link} to="/bejelentkezes">Bejelentkezés</Nav.Link>
                <Nav.Link as={Link} to="/regisztracio">Regisztráció</Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/kapcsolat">Kapcsolat</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
