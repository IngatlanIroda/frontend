import React from "react";
import Card from 'react-bootstrap/Card';
import haz1 from "../foto/haz1.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from 'react-bootstrap/CloseButton';
import "./Elem.css";

function Elem( {adatok, closeElem }){



    return(
        <>
        

        <div  className="elemBackground">
        <div  className="elemContainer">

        <div className="titleCloseBtn">
        <div id=""><CloseButton className="closeBtn" onClick={()=>closeElem(false) & window.location.reload()}/></div>
        </div>
        
        <div  className="title">
        <h3>Sikeres beküldés</h3>
        <h6>Köszönjük!</h6>
        </div>


        <div className="body" >

            <Card   style={{ width: "30rem", margin: "1rem" }} className="hirdCard">
              <Card.Img variant="top" src={haz1} alt="property" id="hirdImg"  />

              <Card.Body className="">
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
        

        </div>

        </div>
        </div>
        

        </>


    );




}

export default Elem;