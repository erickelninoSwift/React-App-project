import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
// import ListGroup from 'react-bootstrap/ListGroup';

const MenuItems = (props) =>{

    console.log()

    return(
      <Fragment>
        <Container>
         <Col>
         <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={props.dish.image} />
        <Card.Body>
          <Card.Title style={{cursor: "pointer"}}onClick={props.mydishhSelected} ><b>{props.dish.name}</b></Card.Title>
          <Card.Text>
            {props.dish.description}
          </Card.Text>
          <p><b>Price: React{props.dish.price}</b></p>
          <p><b>Label : {props.dish.label} </b></p>
        </Card.Body>
      </Card> 
         </Col>
        </Container>
      </Fragment>
    );
}

export default MenuItems;