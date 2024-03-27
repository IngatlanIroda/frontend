import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import axios from 'axios'; 
import { ContextIngatlanAdmin } from "../contexts/AuthContextIngatlanAdmin";
import { useNavigate } from "react-router-dom";

export default function IngatlanUrlap(props) {
  const {ujIngatlan} = useContext(ContextIngatlanAdmin);

    const [telepules, setTelepules] = useState(""); 
    const [nagysag, setNagysag] = useState(""); 
    const [tipus, setTipus] = useState(""); 
    const [szobaszam, setSzobaszam] = useState(""); 
    const [leiras, setLeiras] = useState(""); 
    const [cim, setCim] = useState(""); 
    const [erkely, setErkely] = useState(""); 
    const [terasz, setTerasz] = useState(""); 
    const [kert, setKert] = useState(""); 
 



    const beKuld = async (e) => {
      e.preventDefault();
      const adat = {
        telepules_megnevezes: telepules,
        nagysag: nagysag,
        tipus_megnevezes: tipus,
        szobaszam: szobaszam,
        leiras: leiras,
        cim: cim,
        erkely: erkely,
        terasz: terasz,
        kert: kert
      };
      ujIngatlan(adat, "/user");
    };





  return (
    <>
      <h2>Új ingatlan</h2>

      <div>
        <Form onSubmit={beKuld}>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Település</Form.Label>
            <Form.Control
              type="text"
              placeholder="Város"
              value={props.ingatlan.telepules_megnevezes}
              onChange={(e) => setTelepules(e.target.value)}
              
             
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Nagyság</Form.Label>
            <Form.Control
              type="text"
              placeholder="1"
              value={props.ingatlan.nagysag}
              onChange={(e) => setNagysag(e.target.value)}
              
            
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
           <Form.Label>Ingatlan típus</Form.Label>
           <Form.Control
              type="text"
              placeholder="családi ház"
              value={props.ingatlan.tipus_megnevezes}
              onChange={(e) => setTipus(e.target.value)}
              
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Szobák száma</Form.Label>
            <Form.Control
              type="text"
              placeholder="1"
              value={props.ingatlan.szobaszam}
              onChange={(e) => setSzobaszam(e.target.value)}
            
              
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
          <Form.Label>Leírás</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tágas, napfényes.."
            value={props.ingatlan.leiras}
            onChange={(e) => setLeiras(e.target.value)}
          
            
          />
        </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Cím</Form.Label>
            <Form.Control
              type="text"
              placeholder="1117 Budapest, Irinyi József utca 4-20."
              value={props.ingatlan.cim}
              onChange={(e) => setCim(e.target.value)}
            
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
          <Form.Label>Erkély</Form.Label>
          <Form.Control
            type="text"
            placeholder="0: nincs, 1: van"
            value={props.ingatlan.erkely}
            onChange={(e) => setErkely(e.target.value)}
          
            
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
        <Form.Label>Terasz</Form.Label>
        <Form.Control
          type="text"
          placeholder="0: nincs, 1: van"
          value={props.ingatlan.terasz}
          onChange={(e) => setTerasz(e.target.value)}
        
          
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
      <Form.Label>Kert</Form.Label>
      <Form.Control
        type="text"
        placeholder="0: nincs, 1: van"
        value={props.ingatlan.kert}
        onChange={(e) => setKert(e.target.value)}
      
        
      />
    </Form.Group>
          
          <button as="input" type="submit" value="Submit">
            Mentés
          </button>
         
        </Form>
      </div>
      <br/>
    </>
  );
}
