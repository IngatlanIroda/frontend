import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import haz1 from "../foto/haz1.jpg";
import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from "react-bootstrap/ListGroup";
import "./Elem.css";

function Elem( {adatok, closeElem }){



    return(
        <>
        <Container id="elemContainer">

        <div  className="elemBackground">
        <div  className="elemContainer">

        <div className="titleCloseBtn">
        <button onClick={()=>closeElem(false) & window.location.reload()}> X </button>
        </div>
        
        <div  className="title">
        <h3>Sikeres beküldés</h3>
        </div>


        <div className="body" >

        <Row id="c">
        
          
            <Card style={{ width: "30rem", margin: "1rem" }}>
              <Card.Img variant="top" src={haz1} alt="property" />

              <Card.Body>
                <Card.Title>
                  {adatok.telepules}
                </Card.Title>
                    <Card.Text>
                      {adatok.ing_tipus}{" "}
                    </Card.Text>
                    <Card.Text> </Card.Text>
              </Card.Body>

              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  fűtés: {adatok.futes_tipus}
                </ListGroup.Item>
                <ListGroup.Item>
                  alapterület: {adatok.nagysag} m2
                </ListGroup.Item>
                <ListGroup.Item>
                  szobák száma: {adatok.szobaszam}
                </ListGroup.Item>
                    <ListGroup.Item>erkély:{adatok.erkely}</ListGroup.Item>
                    <ListGroup.Item>terasz:{adatok.terasz}</ListGroup.Item>
                    <ListGroup.Item>kert:{adatok.kert}</ListGroup.Item>
                <ListGroup.Item>{adatok.leiras}</ListGroup.Item>
              </ListGroup>
              <Card.Body>cím: {adatok.cim}</Card.Body>
            </Card>
        </Row>

        </div>

        </div>
        </div>
        </Container>

        </>


    );




}

export default Elem;