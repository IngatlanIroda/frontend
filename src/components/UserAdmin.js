import React, { useEffect, useState } from "react";
import Navbars from "./Navbars";
import useAuthContext from "../contexts/AuthContext";
import { AuthContext } from "../contexts/AuthContext";
import {
  ContextUserProvider,
  ContextUserList,
  useContextUserList,
} from "../contexts/AuthContextUserList";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const UserAdmin = () => {
  const { user, getUser } = useAuthContext();
  const {
    registeredUser,
    setRegisteredUser,
    ujfelhasznalo,
    felhasznaloTorles,
    felhasznaloModositas,
  } = useContextUserList();

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

  const navigate = useNavigate();

  const handleEdit = async (user_id) => {
    await axios
      .get("api/users/" + user_id)
      .then((response) => {
        setUName(response.data.name);
        setUSzulIdo(response.data.szul_ido);
        setUJogosultsag(response.data.jogosultsag);
        setUAktiv(response.data.aktiv);
        setUEmail(response.data.email);
        setUPassword(response.data.password);
      })
      .catch((error) => console.log(error));
    setEditId(user_id);
  };

  const handleSave = async (e) => {
    try {
      await felhasznaloModositas(editId, {
        name: uname,
        szul_ido: uszul_ido,
        jogosultsag: ujogosultsag,
        aktiv: uaktiv,
        email: uemail,
        password: upassword,
        password_confirmation: upassword_confirmation,
      });
      navigate("/useradmin");
    } catch (error) {
      console.log(error);
    }
    navigate("/useradmin");
  };

  const handleDelete = async (e) => {
    try {
      await felhasznaloTorles(e, "api/users");
      navigate("/useradmin");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
      await ujfelhasznalo(adat, "api/users");
      navigate("/useradmin");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //console.log(user);
    if (!user) {
      getUser();
    }
  });

  return (
    <>
      <ContextUserProvider>
        <Navbars />

        <Container className="d-flex ">
          <Container id="newUser_container">
            <div>
              <p id="ujfelhasznalo">Új felhasználó rögzítése</p>
            </div>
            <div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="ujfelhasznName">
                  <Form.Control
                    type="text"
                    placeholder="név"
                    minLength="3"
                    maxLength="100"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                  <Form.Control
                    type="date"
                    placeholder="születés"
                    onChange={(e) => setSzulIdo(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" id="ujfelhasznJog">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setJogosultsag(e.target.value)}
                  >
                    <option>jogosultság</option>
                    <option value="user">regisztrált felhasználó</option>
                    <option value="admin">adminisztrátor</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ujfelhasznAktiv">
                  <Form.Control
                    type="hidden"
                    placeholder="true"
                    onChange={(e) => setAktiv(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="email cím"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="jelszó"
                    minLength="8"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicPasswordConfirmation"
                >
                  <Form.Control
                    type="password"
                    placeholder="jelszó megerősítése"
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
          </Container>

          <Container className="mb-3" id="userList_container">
            <p id="karbantartas">Felhasználók karbantartása</p>
            <Table class="table-responsive" striped hover>
              <thead>
                <tr>
                  <th>név</th>
                  <th>születés</th>
                  <th>jogosultság</th>
                  <th>aktív</th>
                  <th>email</th>
                  <th>szerkesztés</th>
                  <th>törlés</th>
                  <th>mentés</th>
                </tr>
              </thead>
              <tbody>
                {registeredUser.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.user_id === editId ? (
                      <tr>
                        <td>
                          <input
                            id="unameInput"
                            type="text"
                            value={uname}
                            onChange={(e) => setUName(e.target.value)}
                          ></input>
                        </td>
                        <td>
                          <input
                            id="udateInput"
                            type="date"
                            value={uszul_ido}
                            onChange={(e) => setUSzulIdo(e.target.value)}
                          ></input>
                        </td>
                        <td>
                          <input
                            id="ujogosultsagInput"
                            type="text"
                            value={ujogosultsag}
                            onChange={(e) => setUJogosultsag(e.target.value)}
                          ></input>
                        </td>
                        <td>
                          <input
                            id="uaktivInput"
                            type="text"
                            value={uaktiv}
                            onChange={(e) => setUAktiv(e.target.value)}
                          ></input>
                        </td>
                        <td>
                          <input
                            id="uemailInput"
                            type="mail"
                            value={uemail}
                            onChange={(e) => setUEmail(e.target.value)}
                          ></input>
                        </td>
                        <td>
                          <input type="hidden" value={item.password}></input>
                        </td>
                        <td>
                          <input
                            type="hidden"
                            value={item.password_confirmation}
                          ></input>
                        </td>
                        <td>
                          <button
                            variant="outline-info"
                            onClick={() => handleSave(item.user_id)}
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
                        <td></td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </Container>
        </Container>
      </ContextUserProvider>
    </>
  );
};

export default UserAdmin;
