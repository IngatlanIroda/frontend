import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import style from "./module_navbar.css";
import useAuthContext from "../contexts/AuthContext";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function Navbars() {
  const { user, logout } = useAuthContext();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      data-bs-theme="dark"
      className={`${style.nav}`}
    >
      <Container>
        <Navbar.Brand href="/">Ingatlaniroda.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       
          <Nav className="me-auto">
            <Nav.Link href="/ingatlan"> Ingatlanok</Nav.Link>
            <Nav.Link href="/hirdetes">Hirdetésfeladás</Nav.Link>

            {(user && user.jogosultsag === "admin") ? 
              <>
                <Nav>
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
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/admin">
                      Karbantartások
                    </NavDropdown.Item>
                  </NavDropdown>
                  </Nav>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end" >
                  <Button
                    className="logoutButton"
                    variant="primary"
                    onClick={logout}
                  >
                    Kijelentkezés
                  </Button>
                </Navbar.Collapse>
              </>
              : 
              <>
            
                <Nav.Link href="/bejelentkezes">Bejelentkezés</Nav.Link>
                <Nav.Link href="/regisztracio">Regisztráció</Nav.Link>
                <Navbar.Collapse className="justify-content-end">
                  <Button
                    className="logoutButton"
                    variant="primary"
                    onClick={logout}
                  >
                    Kijelentkezés
                  </Button>
                </Navbar.Collapse>
             </>
            }
          </Nav>
    
      </Container>
    </Navbar>
  );
}
