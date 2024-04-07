import React, { useEffect } from 'react'
import Navbars from "../components/Navbars";
import useAuthContext from '../contexts/AuthContext';
import Nav from "react-bootstrap/Nav";
import { Container } from 'react-bootstrap';

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
    <Nav.Link href="/useradmin">Felhasználók karbantartása</Nav.Link>
    </div>
    <div className='divAdmin'>
    <Nav.Link href="/ingatlanadmin">Ingatlanok karbantartása</Nav.Link> 
    </div>
    
    </Container>
    
    </>
)}
export default Admin