import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Kartya({data}){
  const {telepules,ing_tipus, futes_tipus, nagysag}= data;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.istockphoto.com/hu/fot%C3%B3/%C3%A9p%C3%ADt%C3%A9si-daru-a-lak%C3%B3h%C3%A1zak-k%C3%B6z%C3%B6tt-egy-naps%C3%BCt%C3%A9ses-ny%C3%A1ri-napon-gm1398954037-452943782" />
      <Card.Body>
        <Card.Title>{telepules}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{ing_tipus}</ListGroup.Item>
        <ListGroup.Item>{futes_tipus}</ListGroup.Item>
        <ListGroup.Item>{nagysag}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

