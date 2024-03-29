import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import {
  useContextIngatlanAdmin
} from "../contexts/AuthContextIngatlanAdmin";



export default function IngatlanUrlap(props) {
  
    const{ujIngatlan} = useContextIngatlanAdmin();

    const [ing_tipus, setTipus] = useState(""); 
    const [futes_tipus, setFutesTipus] = useState(""); 
    const [nagysag, setNagysag] = useState(""); 
    const [szobaszam, setSzobaszam] = useState(""); 
    const [erkely, setErkely] = useState(""); 
    const [terasz, setTerasz] = useState(""); 
    const [kert, setKert] = useState(""); 
    const [telepules, setTelepules] = useState(""); 
    const [cim, setCim] = useState(""); 
    const [leiras, setLeiras] = useState(""); 
    const [ugytipus, setUgyTipus] = useState("");
    const [user, setUser] = useState("");
    const [hird_feladas_datuma, setHirdFeladasDatuma] = useState("");
    const [hird_lejarata, setHirdLejarata] = useState("");
    const [utolso_modositas_datuma, setUtolsoModositasDatuma] = useState(""); 
    const [ar, setAr] = useState(""); 
    
    
   

 
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
        leiras: leiras,
        ugytipus: ugytipus,
        user: user,
        hird_feladas_datuma: hird_feladas_datuma,
        hird_lejarata: hird_lejarata,
        utolso_modositas_datuma: utolso_modositas_datuma,
        ar: ar
      };
      ujIngatlan(adat);
     
    };


  return (
    <>
      <h5>Új ingatlan</h5>


      <div>
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-6" controlId="">
            <Form.Label>Ingatlan típusa</Form.Label>
            <Form.Control
              type="number"
              placeholder="1: családi ház, 2: téglalakás, 6: panel lakás"
              onChange={(e) => setTipus(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-6" controlId="">
            <Form.Label>Fűtés típusa</Form.Label>
            <Form.Control
              type="number"
              placeholder="4: távfűtés, 5: gáz, 6: padlófűtés"
              onChange={(e) => setFutesTipus(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-6" controlId="">
           <Form.Label>Nagyság</Form.Label>
           <Form.Control
              type="number"
              placeholder="60"
              onChange={(e) => setNagysag(e.target.value)} 
            
            />
          </Form.Group>
          <Form.Group className="mb-6" controlId="">
            <Form.Label>Szobák száma</Form.Label>
            <Form.Control
              type="number"
              placeholder="1"
              onChange={(e) => setSzobaszam(e.target.value)} 
            />
        </Form.Group>
        <Form.Group className="mb-6" controlId="">
        <Form.Label>Erkély</Form.Label>
        <Form.Control
            type="text"
            placeholder="0: nincs, 1: van"
            onChange={(e) => setErkely(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-6" controlId="">
        <Form.Label>Terasz</Form.Label>
        <Form.Control
              type="text"
              placeholder="0: nincs, 1: van"
              onChange={(e) => setTerasz(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-6" controlId="">
        <Form.Label>Kert</Form.Label>
        <Form.Control
            type="text"
            placeholder="0: nincs, 1: van"
            onChange={(e) => setKert(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-6" controlId="">
        <Form.Label>Település</Form.Label>
        <Form.Control
          type="number"
          placeholder="1: Komló, 2: Kaposvár ... stb."
          onChange={(e) => setTelepules(e.target.value)} 

        />
      </Form.Group>
      <Form.Group className="mb-6" controlId="">
        <Form.Label>Cím</Form.Label>
        <Form.Control
          type="text"
          placeholder="1117 Budapest, Irinyi József utca 4-20."
          onChange={(e) => setCim(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-6" controlId="">
      <Form.Label>Leírás</Form.Label>
      <Form.Control
        type="text"
        placeholder="Tágas, napfényes.."
        onChange={(e) => setLeiras(e.target.value)} 
      />
      </Form.Group>
      <Form.Group className="mb-6" controlId="">
      <Form.Label>Ügytípus</Form.Label>
      <Form.Control
        type="text"
        placeholder="1"
        onChange={(e) => setUgyTipus(e.target.value)} 
      />
      </Form.Group>
      <Form.Group className="mb-6" controlId="">
      <Form.Label>User</Form.Label>
      <Form.Control
        type="number"
        placeholder="1, 2... stb."
        onChange={(e) => setUser(e.target.value)} 
      />
      </Form.Group>
      <Form.Group className="mb-6" controlId="">
      <Form.Label>Hirdetés feladása</Form.Label>
      <Form.Control
        type="date"
        placeholder=""
        onChange={(e) => setHirdFeladasDatuma(e.target.value)} 
      />
      </Form.Group>
      <Form.Group className="mb-6" controlId="">
      <Form.Label>Hirdetés lejárata</Form.Label>
      <Form.Control
        type="date"
        placeholder=""
        onChange={(e) => setHirdLejarata(e.target.value)} 
      />
      </Form.Group>
      <Form.Group className="mb-6" controlId="">
      <Form.Label>Hirdetésmódosítás utolsó dátuma</Form.Label>
      <Form.Control
        type="date"
        placeholder=""
        onChange={(e) => setUtolsoModositasDatuma(e.target.value)} 
      />
      </Form.Group>
      <Form.Group className="mb-6" controlId="">

      <Form.Label>Ár</Form.Label>
      <Form.Control
        type="number"
        placeholder=""
        onChange={(e) => setAr(e.target.value)} 
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
