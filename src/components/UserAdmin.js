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
import Form from "react-bootstrap/Form";
import axios from "../api/axios";

const UserAdmin = () => {
  const { user, ujfelhasznalo, getUser } = useAuthContext();
  const { registeredUser, setRegisteredUser } = useContextUserList();

  const [data, setData] = useState([]);
  const [user_id, setUserId] = useState("");
  const [name, setName] = useState("");
  const [szul_ido, setSzulIdo] = useState("");
  const [jogosultsag, setJogosultsag] = useState("");
  const [aktiv, setAktiv] = useState("1");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [uname, setUName] = useState("");
  const [uszul_ido, setUSzulIdo] = useState("");
  const [ujogosultsag, setUJogosultsag] = useState("");
  const [uaktiv, setUAktiv] = useState("1");
  const [uemail, setUEmail] = useState("");
  const [upassword, setUPassword] = useState("");
  const [upassword_confirmation, setUPasswordConfirmation] = useState("");
  const [editId, setEditId] = useState(null);
  const handleEdit = (user_id) => {
    axios.get('/api/user'+user_id)
    .then(response=>{
      uname(response.data.name);
      uszul_ido(response.data.szul_ido);
      ujogosultsag(response.data.jogosultsag);
      uaktiv(response.data.aktiv);
      uemail(response.data.email);

    })
    .catch(error=>console.log(error))
    setEditId(user_id);
  };
  const handleMent = (user_id) => {
    axios
      .put("/api/user" + editId, {
        name:uname, szul_ido:uszul_ido,jogosultsag:ujogosultsag,aktiv:uaktiv, email:uemail
       
      })
      .then((response) => {
        console.log(response);
        uname(response.data.name);
        uszul_ido(response.data.szul_ido);
        ujogosultsag(response.data.jogosultsag);
        uaktiv(response.data.aktiv);
        uemail(response.data.email);
      });
  };

  const handleDelete = (user_id) => {
    axios.delete('/api/user'+user_id)
    .then(response=>{
    console.log('törölt') 
    })
    .catch(error=>console.log(error))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adat = {
      user_id: user_id,
      name: name,
      szul_ido: szul_ido,
      jogosultsag: jogosultsag,
      aktiv: aktiv,
      email: email,

      password: password,
      password_confirmation: password_confirmation,
    };
    ujfelhasznalo(adat, "/user");
  };
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
            <p>Új felhasználó</p>
          </div>
          <div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="ujfelhasznName">
                <Form.Label>Név</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="név"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Születési idő</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="születés"
                  onChange={(e) => setSzulIdo(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ujfelhasznJog">
                <Form.Label>Jogosultság</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="user"
                  onChange={(e) => setJogosultsag(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ujfelhasznAktiv">
                <Form.Control
                  type="hidden"
                  placeholder="true"
                  onChange={(e) => setAktiv(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="valami@valami.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Jelszó</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="jelszó"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPasswordConfirmation"
              >
                <Form.Label>Jelszó újra:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="jelszó"
                  value={password_confirmation}
                  onChange={(e) => {
                    setPasswordConfirmation(e.target.value);
                  }}
                />
              </Form.Group>
              <button as="input" type="submit" value="Submit">
                Mentés
              </button>
            </Form>
          </div>
          <p>Felhasználók karbantartása</p>
          <Table responsive striped hover>
            <thead>
              <tr>
                <th>név</th>
                <th>születés</th>
                <th>jogosultság</th>
                <th>aktív</th>
                <th>email</th>
                <th>szerkesztés</th>
                <th>törlés</th>
              </tr>
            </thead>
            <tbody>
              {registeredUser.map((item, index) => (
                <React.Fragment key={index}>
                  {item.user_id === editId ? (
                    <tr>
                      <td>
                        <input
                          type="text"
                          value={uname}
                          onChange={(e) => setUName(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="date"
                          value={uszul_ido}
                          onChange={(e) => setUSzulIdo(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={ujogosultsag}
                          onChange={(e) => setUJogosultsag(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={uaktiv}
                          onChange={(e) => setUAktiv(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={uemail}
                          onChange={(e) => setUEmail(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        <button
                          variant="outline-info"
                          onClick={() => handleMent(user_id)}
                        >
                          <i className="fa-solid fa-arrows-rotate"></i>
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.szul_ido}</td>
                      <td>{item.jogosultsag}</td>
                      <td>{item.aktiv}</td>
                      <td>{item.email}</td>
                      <td>
                        <button
                          variant="outline-info"
                          onClick={() => handleEdit(item.user_id)}
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          variant="outline-info"
                          onClick={() => handleDelete(item.user_id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </Container>
      </ContextUserProvider>
    </>
  );
};

export default UserAdmin;
