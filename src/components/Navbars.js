import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./module_navbar.css";
import useAuthContext from "../contexts/AuthContext";

export default function Navbars() {
  const { user, logout } = useAuthContext();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="dark" className={`${style.nav}`}>
      <Container>
        <Navbar.Brand href="/">Ingatlaniroda.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/ingatlan">Ingatlanok</Nav.Link>
            <Nav.Link href="/kapcsolat">Kapcsolat</Nav.Link>
            {user && ( // Csak bejelentkezett felhasználóként jeleníti meg
              <Nav.Link href="/hirdetes">Hirdetésfeladás</Nav.Link>
            )}
            {user && user.jogosultsag === "admin" && ( // Csak adminisztrátorként jeleníti meg
              <NavDropdown
                id="nav-dropdown-dark"
                title="Karbantartás"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/useradmin">
                  Felhasználók karbantartása
                </NavDropdown.Item>
                <NavDropdown.Item href="/ingatlanadmin">
                  Ingatlanok karbantartása
                </NavDropdown.Item>
                <NavDropdown.Item href="#action">Valami</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/admin">Karbantartások</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Nav>
            {user ? (
              <>
                <Navbar.Text>Bejelentkezve mint: {user.name}</Navbar.Text>
                <Button className="logoutButton" variant="primary" onClick={logout}>
                  Kijelentkezés
                </Button>
              </>
            ) : (
              <>
                <Nav.Link href="/bejelentkezes">Bejelentkezés</Nav.Link>
                <Nav.Link href="/regisztracio">Regisztráció</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
