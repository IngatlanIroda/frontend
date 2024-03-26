import { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";

export default function IngatlanUrlap(props) {

    const [obj, setObj] = useState({telepules_megnevezes: "", nagysag: "", tipus_megnevezes: "", szobaszam: "", leiras: "", cim:"", erkely:"", terasz:"", kert:""})

    function kuld(e){
        e.preventDefault()
        
    }

    function adatValt(e){
        const masolat = {...obj}
        masolat[e.target.id]=e.target.value
        setObj(masolat)
        console.log(obj)
    }

  return (
    <>
      <h2>Új ingatlan</h2>

      <div>
        <Form onSubmit={kuld}>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Település</Form.Label>
            <Form.Control
              type="text"
              placeholder="Város"
              onChange={(e) => adatValt(e.target.value)}
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Nagyság</Form.Label>
            <Form.Control
              type="text"
              placeholder="1"
              onChange={adatValt}
            
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
           <Form.Label>Ingatlan típus</Form.Label>
           <Form.Control
              type="text"
              placeholder="családi ház"
              onChange={adatValt}
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Szobák száma</Form.Label>
            <Form.Control
              type="text"
              placeholder="1"
              onChange={adatValt}
              
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
          <Form.Label>Leírás</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tágas, napfényes.."
            onChange={adatValt}
            
          />
        </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Cím</Form.Label>
            <Form.Control
              type="text"
              placeholder="1117 Budapest, Irinyi József utca 4-20."
              onChange={adatValt}
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
          <Form.Label>Erkély</Form.Label>
          <Form.Control
            type="text"
            placeholder="0: nincs, 1: van"
            onChange={adatValt}
            
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
        <Form.Label>Terasz</Form.Label>
        <Form.Control
          type="text"
          placeholder="0: nincs, 1: van"
          onChange={adatValt}
          
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
      <Form.Label>Kert</Form.Label>
      <Form.Control
        type="text"
        placeholder="0: nincs, 1: van"
        onChange={adatValt}
        
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
