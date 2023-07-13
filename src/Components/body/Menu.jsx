import React, { Component } from 'react'
import DISHES from '../../data/dishes.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import MenuItems from './MenuItems.jsx';
import Dishdetails from './Dishdetails.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useState } from 'react';


export class Menu extends Component {

    constructor()
    {
        super()

        this.state = {

            AllDishes : DISHES,
            selectedDish : null,
            show: false
        }
    }


   

    dishSelected = (dish) =>{

        this.setState({

            selectedDish: dish,
            show : !this.state.show
        })

    


        
    }


    handleClose = () =>{
        return this.setState({show: false});
    }
    handleShow = () =>{
        return this.setState({show: true});

    }

  render() {


    document.title = "Menu"

    let dishDetails = <div> 
        <b>Dish details</b>
    </div>


console.log(dishDetails);



    if(this.state.selectedDish !== null)
    {
        dishDetails = <Dishdetails  allDetails = {this.state.selectedDish}/>
       
        console.log(dishDetails)
    }

   

    const menu = this.state.AllDishes.map(Item =>{
       
        return(
            <MenuItems dish ={Item} key={Item.id} mydishhSelected = {() =>this.dishSelected(Item)} modal={this.handleShow}/>
        );
    });




    return (
        <Container style={{margin: "10px auto", padding:"5px"}}>
          <Row lg={3} md={6} sm={6}  xs={6}>
          {menu}
          </Row>

      <Modal show={this.state.show} onHide={this.handleClose}>
    
        <Modal.Body>
            {dishDetails}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    )
  }
}

export default Menu