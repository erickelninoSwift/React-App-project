import React from "react";
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

const MenuItems = (props) =>{

    console.log()

    return(

       
        <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={props.dish.image} />
        <Card.Body>
          <Card.Title style={{cursor: "pointer"}} onClick={props.mydishhSelected}><b>{props.dish.name}</b></Card.Title>
          <Card.Text>
            {props.dish.description}
          </Card.Text>
          <p><b>Price: React{props.dish.price}</b></p>
          <p><b>Label : {props.dish.label} </b></p>
        </Card.Body>
      </Card>
       
    );
}

export default MenuItems;