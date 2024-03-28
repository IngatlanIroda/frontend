import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import {
  useContextIngatlanAdmin
} from "../contexts/AuthContextIngatlanAdmin";



export default function IngatlanUrlap(props) {
  
    const{ujIngatlan} = useContextIngatlanAdmin();

    const [ing_tipus, setTipus] = useState(""); 
    const [futes_tipus, setFutesTipus] = useState(""); 
    const [telepules, setTelepules] = useState(""); 
    const [nagysag, setNagysag] = useState(""); 
    const [szobaszam, setSzobaszam] = useState(""); 
    const [leiras, setLeiras] = useState(""); 
    const [cim, setCim] = useState(""); 
    const [erkely, setErkely] = useState(""); 
    const [terasz, setTerasz] = useState(""); 
    const [kert, setKert] = useState(""); 
 
    const handleSubmit = async (e) => {
      e.preventDefault();
      const adat = {
        ing_tipus: ing_tipus,
        futes_tipus: futes_tipus,
        nagysag: nagysag,
        szobaszam: szobaszam,
        erkely: erkely,
        terasz: terasz,
        kert: kert,
        telepules: telepules,
        cim: cim,
        leiras: leiras
      };
      ujIngatlan(adat);
     
    };


  return (
    <>
      <h2>Új ingatlan</h2>

      <div>
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Település</Form.Label>
            <Form.Control
              type="text"
              placeholder="Város"
              onChange={(e) => setTelepules(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Nagyság</Form.Label>
            <Form.Control
              type="text"
              placeholder="1"
              onChange={(e) => setNagysag(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
           <Form.Label>Ingatlan típus</Form.Label>
           <Form.Control
              type="text"
              placeholder="családi ház"
              onChange={(e) => setTipus(e.target.value)} 
            
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Szobák száma</Form.Label>
            <Form.Control
              type="text"
              placeholder="1"
              onChange={(e) => setSzobaszam(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
          <Form.Label>Leírás</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tágas, napfényes.."
            onChange={(e) => setLeiras(e.target.value)} 
 
          />
        </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Cím</Form.Label>
            <Form.Control
              type="text"
              placeholder="1117 Budapest, Irinyi József utca 4-20."
              onChange={(e) => setCim(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
          <Form.Label>Erkély</Form.Label>
          <Form.Control
            type="text"
            placeholder="0: nincs, 1: van"
            onChange={(e) => setErkely(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
        <Form.Label>Terasz</Form.Label>
        <Form.Control
          type="text"
          placeholder="0: nincs, 1: van"
          onChange={(e) => setTerasz(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
      <Form.Label>Kert</Form.Label>
      <Form.Control
        type="text"
        placeholder="0: nincs, 1: van"
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
