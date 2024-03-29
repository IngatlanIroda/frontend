import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import style from "./module_navbar.css";
import useAuthContext from "../contexts/AuthContext";
import Button from 'react-bootstrap/Button';

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
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/ingatlan"> Ingatlanok</Nav.Link>
            <Nav.Link href="/hirdetes">Hirdetés</Nav.Link>
           
            {user ? 
              <>
                <Button variant="primary" onClick={logout}>Kijelentkezés</Button>             
                <Nav.Link href="/useradmin">Felhasználók karbantartása</Nav.Link>
                <Nav.Link href="/ingatlanadmin">Ingatlanok karbantartása</Nav.Link> 
              </>
            :
              <>
                <Nav.Link href="/bejelentkezes">Bejelentkezés</Nav.Link>
                <Nav.Link href="/regisztracio">Regisztráció</Nav.Link>
              </>
            }
          
          </Nav>
          <Nav>
            <Nav.Link href="/admin">Karbantartás</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}
