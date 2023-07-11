import React from "react";
import Card from 'react-bootstrap/Card';
import DishComment from "./DishComment";
// import ListGroup from 'react-bootstrap/ListGroup';


const Dishdetails = (props) =>{


    return(
      
        <Card style={{ width: '35rem', margin:'5px'}}>
        <Card.Img variant="top" src={props.allDetails.image}/>
        <Card.Body>
          <Card.Title><b>{props.allDetails.name}</b></Card.Title>
          <Card.Text>
            <p>{props.allDetails.description}</p>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <p><b>Category: {props.allDetails.category}  </b></p>
          <p><b>Label: {props.allDetails.label}</b></p>
          <p><b>Price: R{props.allDetails.price}</b></p>
          <hr></hr>
          <DishComment comment ={props.allDetails.comments} />
        </Card.Body>
      </Card>
    );

}


export default Dishdetails