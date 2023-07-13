import React, { Component } from 'react'
import DISHES from '../../data/dishes.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import MenuItems from './MenuItems.jsx';
import Dishdetails from './Dishdetails.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import COMMENTS from '../../data/comments.js';

// import { useState } from 'react';


export class Menu extends Component {

    constructor()
    {
        super()

        this.state = {

            AllDishes : DISHES,
            AllComment: COMMENTS,
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
       let myComment = this.state.AllComment.filter(comment =>{

        return comment.dishId === this.state.selectedDish.id

       });
       console.log(myComment)

        dishDetails = <Dishdetails  allDetails = {this.state.selectedDish}
        selectedComment ={myComment}
        />
       
        console.log(dishDetails)
    }

   

    const menu = this.state.AllDishes.map(Item =>{

    //    let allcomment = this.state.AllComment.filter( comment =>{
    //        return comment.dishId === Item.id;
    //    });
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