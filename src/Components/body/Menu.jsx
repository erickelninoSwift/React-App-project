import React, { Component } from 'react'
import DISHES from '../../data/dishes.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuItems from './MenuItems.jsx';


export class Menu extends Component {

    constructor()
    {
        super()

        this.state = {

            AllDishes : DISHES
        }
    }


  render() {

    const menu = this.state.AllDishesmap(Item=>{
       
        return(
            <MenuItems dish ={Item} />
        );
    });

    menu();

    return (
        <Container>
        <Row>
          <Col>{menu}</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    )
  }
}

export default Menu