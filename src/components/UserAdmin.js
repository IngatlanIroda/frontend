import React, { useEffect, useState } from "react";
import Navbars from "./Navbars";
import useAuthContext from "../contexts/AuthContext";
import {
  ContextUserProvider,
  ContextUserList,
  useContextUserList,
} from "../contexts/AuthContextUserList";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import UserTablaSor from "./UserTablaSor";
const UserAdmin = () => {
  const { user, getUser } = useAuthContext();
  const { registeredUser, setRegisteredUser } = useContextUserList();
  console.log(registeredUser);
  useEffect(() => {
    console.log(user);
    if (!user) {
      getUser();
    }
  });

  return (
    <>
      <ContextUserProvider>
        <Navbars />
        <div>
          <p id="bejelentkezett">bejelentkezett: {user?.name}</p>
        </div>
        <Container id="userList_container">
          <div>
            <p>Felhasználók karbantartása</p>
          </div>
          <Table responsive striped hover>
            <thead>
              <tr>
                <th>név</th>
                <th>születés</th>
                <th>aktív</th>
                <th>jogosultság</th>
                <th>email</th>
                <th>szerkesztés</th>
                <th>törlés</th>
              </tr>
            </thead>
            <tbody>
              {registeredUser.map((item, index) => (
                <>
                  <tr>
             
                    <UserTablaSor key={index} data={item} />
                    
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </Container>
      </ContextUserProvider>
    </>
  );
};

export default UserAdmin;
