import React, { useEffect } from 'react'
import Navbars from "../components/Navbars";
import useAuthContext from '../contexts/AuthContext';
import Nav from "react-bootstrap/Nav";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

//az adminisztrációhoz tartozó linkek közös felülete
const Admin = () => {
  const { user, getUser } = useAuthContext();
  
  useEffect(() => {
      console.log(user)
      if (!user) {
          getUser();
      }
  });
  
  return (
    <>
    
    <Navbars/>
    
    <Container id='conAdmin'>

    <div className='divAdmin'>
    <Nav.Link as={Link} to="/useradmin">Felhasználók karbantartása</Nav.Link>
    </div>
    <div className='divAdmin'>
    <Nav.Link as={Link} to="/ingatlanadmin">Ingatlanok karbantartása</Nav.Link> 
    </div>
    
    </Container>
    
    </>
)}
export default Admin