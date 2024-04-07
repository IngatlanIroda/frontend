import axios from "../api/axios";
import Table from "react-bootstrap/Table"; 
import useAuthContext from "../contexts/AuthContext";
import { 
   
  useContextIngatlanAdmin, 
  } from "../contexts/AuthContextIngatlanAdmin"; 
  import "./module_ingatlan_form.css";

  import React, { useEffect, useState } from "react";

export default function IngatlanTabla(props){
    const { user, getUser } = useAuthContext();
    const { ingatlan, setIngatlan, ujIngatlan, deleteData } = useContextIngatlanAdmin();
    const [ing_id, setIngId] = useState("");
    const [editId, setEditId] = useState(null); 
    const [ing_tipus, setIngTipus] = useState("");
    const [futes_tipus, setFutesTipus] = useState("");
    const [nagysag, setNagysag] = useState("");
    const [szobaszam, setSzobaszam] = useState("");
    const [erkely, setErkely] = useState("");
    const [terasz, setTerasz] = useState("");
    const [kert, setKert] = useState("");
    const [telepules, setTelepules] = useState("");
    const [cim, setCim] = useState("");
    const [leiras, setLeiras] = useState("");
    const [ugytipus, setugytipus] = useState("1");
    const [hird_feladas_datuma, setHirdFeladasDatuma] = useState("");
    const [hird_lejarata, setHirdLejarata] = useState("");
    const [utolso_modositas_datuma, setUtolsoModositasDatuma] = useState("");
    const [ar, setAr] = useState("");
    const [uing_id, setUIngId] = useState("");
    const [uing_tipus, setUIngTipus] = useState("");
    const [ufutes_tipus, setUFutesTipus] = useState("");
    const [unagysag, setUNagysag] = useState("");
    const [uszobaszam, setUSzobaszam] = useState("");
    const [uerkely, setUErkely] = useState("");
    const [uterasz, setUTerasz] = useState("");
    const [ukert, setUKert] = useState("");
    const [utelepules, setUTelepules] = useState("");
    const [ucim, setUCim] = useState("");
    const [uleiras, setULeiras] = useState("");
    const [uugytipus, setUUgytipus] = useState("1");
    const [uuser, setUUser] =useState("");
    const [uhird_feladas_datuma, setUHirdFeladasDatuma] = useState("");
    const [uhird_lejarata, setUHirdLejarata] = useState("");
    const [uutolso_modositas_datuma, setUUtolsoModositasDatuma] = useState("");
    const [uar, setUAr] = useState("");
   

    const [errors, setErrors] = useState({
      ing_id:"",
      ing_tipus: "",
      futes_tipus: "",
      nagysag: "",
      szobaszam: "",
      erkely: "",
      terasz: "",
      kert: "",
      telepules: "",
      cim: "",
      leiras: "",
      ugytipus: "",
      user: "",
      hird_feladas_datuma: "",
      hird_lejarata: "",
      utolso_modositas_datuma: "",
      ar: ""
    });

    const handleEdit = async (ing_id) => {
      await axios
        .get("/ingatlans/" + ing_id)
        .then((response) => {
          setUIngTipus(response.data.ing_tipus);
          setUFutesTipus(response.data.futes_tipus);
          setUNagysag(response.data.nagysag);
          setUSzobaszam(response.data.szobaszam);
          setUErkely(response.data.erkely);
          setUTerasz(response.data.terasz);
          setUKert(response.data.kert);
          setUTelepules(response.data.telepules);
          setUCim(response.data.cim);
          setULeiras(response.data.leiras);
          setUUgytipus(response.data.ugytipus);
          setUUser(response.data.user);
          setUHirdFeladasDatuma(response.data.hird_feladas_datuma);
          setUHirdLejarata(response.data.hird_lejarata);
          setUUtolsoModositasDatuma(response.data.utolso_modositas_datuma);
          setUAr(response.data.ar);
          //console.log(response.data)
        })
        .catch((error) => console.log(error));
      setEditId(ing_id);
    };

    let token = "";
    const csrf = () =>
      axios.get("/token").then((response) => {
        console.log(response);
        token = response.data;
      });

    const ingatlanModositas = async (ing_id, { ...adat }) => {
      await csrf();
      //console.log(token);
      try {
        console.log(adat);
        const response = await axios.put(`/ingatlans/${ing_id}`, adat, {
          headers: {
            "X-CSRF-TOKEN": token,
          },
        });
        window.location.reload();
        //console.log(response.adat.message)
    
      } catch (error) {
        console.log(error);
        if (error.response.status === 422) {
          setErrors(error.response.data.errors);
        }
      }
    };
    
   
    const handleSave = async (e) => {
      try {
        await ingatlanModositas(editId, {
          ing_tipus: uing_tipus,
          futes_tipus: ufutes_tipus,
          nagysag: unagysag,
          szobaszam: uszobaszam,
          erkely: uerkely,
          terasz: uterasz,
          kert: ukert,
          telepules: utelepules,
          cim: ucim,
          leiras: uleiras,
          ugytipus: uugytipus,
          user: uuser,
          hird_feladas_datuma: uhird_feladas_datuma,
          hird_lejarata: uhird_lejarata,
          utolso_modositas_datuma: uutolso_modositas_datuma,
          ar: uar
        });
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };



   
    return(
        <Table responsive striped hover  size="sm" id="ingatlan_table"> 
            <thead> 
              <tr> 
                <th>ingatlan típusa</th> 
                <th>fűtés típus</th> 
                <th>nagyság</th> 
                <th>szobák száma</th> 
                <th>erkély</th> 
                <th>terasz</th> 
                <th>kert</th> 
                <th>település</th>
                <th>cím</th>
                <th>leírás</th> 
                <th>ügytípus</th>
                <th>user</th>
                <th>hirdetés feladása</th>
                <th>hirdetés lejárata</th> 
                <th>hirdetés módosítása</th>
                <th>ár</th>
                <th>szerkesztés</th> 
                <th>törlés</th> 
                <th>mentés</th> 
              </tr>
            </thead> 
           
            <tbody>
            {ingatlan.map((item, index) => (
              <React.Fragment key={index}>
                {item.ing_id === editId ? (
                  <tr>
                    <td>
                      <input id=""
                        type="number"
                        value={uing_tipus}
                        onChange={(e) => setUIngTipus(e.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input id=""
                        type="number"
                        value={ufutes_tipus}
                        onChange={(e) => setUFutesTipus(e.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input id=""
                        type="number"
                        value={unagysag}
                        onChange={(e) => setUNagysag(e.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input id=""
                        type="number"
                        value={uszobaszam}
                        onChange={(e) => setUSzobaszam(e.target.value)}
                      ></input>
                    </td>
                    <td>
                    <input id=""
                      type="number"
                      value={uerkely}
                      onChange={(e) => setUErkely(e.target.value)}
                    ></input>
                  </td>
                  <td>
                  <input id=""
                    type="number"
                    value={uterasz}
                    onChange={(e) => setUTerasz(e.target.value)}
                  ></input>
                </td>
                <td>
                <input id=""
                  type="number"
                  value={ukert}
                  onChange={(e) => setUKert(e.target.value)}
                ></input>
              </td>
              <td>
              <input id=""
                type="number"
                value={utelepules}
                onChange={(e) => setUTelepules(e.target.value)}
              ></input>
            </td>
            <td>
            <input id=""
              type="text"
              value={ucim}
              onChange={(e) => setUCim(e.target.value)}
            ></input>
          </td>
          <td>
          <input id=""
            type="text"
            value={uleiras}
            onChange={(e) => setULeiras(e.target.value)}
          ></input>
        </td>
        <td>
          <input id=""
            type="number"
            value={uugytipus}
            onChange={(e) => setUUgytipus(e.target.value)}
          ></input>
        </td>
        <td>
        <input id=""
          type="number"
          value={uuser}
          onChange={(e) => setUUser(e.target.value)}
        ></input>
      </td>
        <td>
          <input id=""
            type="date"
            value={uhird_feladas_datuma}
              onChange={(e) => setUHirdFeladasDatuma(e.target.value)}
          ></input>
        </td>
        <td>
          <input id=""
            type="date"
            value={uhird_lejarata}
              onChange={(e) => setUHirdLejarata(e.target.value)}
          ></input>
        </td>
        <td>
            <input id=""
              type="date"
              value={uutolso_modositas_datuma}
                onChange={(e) => setUUtolsoModositasDatuma(e.target.value)}
            ></input>
        </td>
        <td>
           <input id=""
              type="number"
              value={uar}
               onChange={(e) => setUAr(e.target.value)}
            ></input>
        </td>
        <td></td>
        <td></td>
                    <td>
                      <button
                        variant="outline-info"
                        onClick={() => handleSave(item.ing_id)}
                      >
                        <i className="fa-solid fa-arrows-rotate"></i>
                      </button>
                    </td>
                   
                  </tr>
                ) : (   
                  <tr>
                    <td>{item.ing_tipus}</td>
                    <td>{item.futes_tipus}</td>
                    <td>{item.nagysag}</td>
                    <td>{item.szobaszam}</td>
                    <td>{item.erkely}</td>
                    <td>{item.terasz}</td>
                    <td>{item.kert}</td>
                    <td>{item.telepules}</td>
                    <td>{item.cim}</td>
                    <td className="text-truncate"> {item.leiras}</td>
                    <td>{item.ugytipus}</td>
                    <td>{item.user}</td>
                    <td>{item.hird_feladas_datuma}</td>
                    <td>{item.hird_lejarata}</td> 
                    <td>{item.utolso_modositas_datuma}</td>
                    <td>{item.ar}</td>
                    <td>
                      <button
                        variant="outline-info"
                        onClick={() => handleEdit(item.ing_id)}
                      >
                        <i className="fa-solid fa-pencil"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        variant="outline-info"
                        onClick={() => deleteData(item.ing_id)}
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


    );

}