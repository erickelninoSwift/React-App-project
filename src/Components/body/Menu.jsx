import React, { Component } from 'react'
import DISHES from '../../data/dishes.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuItems from './MenuItems.jsx';
import Dishdetails from './Dishdetails.jsx';


export class Menu extends Component {

    constructor()
    {
        super()

        this.state = {

            AllDishes : DISHES,
            selectedDish : null
        }
    }


    dishSelected = (dish) =>{

        this.setState({

            selectedDish: dish
        })

        console.log(dish);

    }


  render() {

    let dishDetails = <div> 
        <b>Dish details</b>
    </div>

    if(this.state.selectedDish !== null)
    {
        dishDetails = <Dishdetails  allDetails = {this.state.selectedDish} />
    }


    const menu = this.state.AllDishes.map(Item =>{
       
        return(
            <MenuItems dish ={Item} key={Item.id} mydishhSelected = {() =>this.dishSelected(Item)} />
        );
    });

    return (
        <Container>
        <Row>
          <Col>{menu}</Col>
          <Col>{dishDetails}</Col>
        </Row>
      </Container>
    )
  }
}

export default Menu