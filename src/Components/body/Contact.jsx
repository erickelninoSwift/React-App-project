 import React, { Component, Fragment } from 'react'
 import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../App.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'


        export class Contact extends Component {


          constructor()
          {
            super()

            this.state = {
 
                 firstname:"",
                 lastname: "",
                 address : "",
                 email: "",
                 mobile: "",
                 message:"",
                 agree: false
            }
          }

          handleAllinput = event =>{

            event.preventDefault()

            const name = event.target.name;
            const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

              this.setState({
                [name]: value
              });

          }

          handleSubmit = event =>{
            event.preventDefault();
            console.log(this.state)
          }

          

          render() {

            document.title = "Contact"

            const style = {
              textAlign: "left",
              width: "50%"
            }
           
            return (
              
            
              <div>
                  <Fragment>
                   <Container>

                    <h1 style={{textAlign: "left",marginBottom:"20px"}}>Send us a feedback !</h1>

                     <Form style={style} onSubmit={this.handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" name='firstname' placeholder="Enter Name" value={this.state.firstname} onChange={this.handleAllinput} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" name='lastname' placeholder="Enter Lastname" value={this.state.lastname} onChange={this.handleAllinput} />
        </Form.Group>
      </Row>

     

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control type='text' name='address' placeholder="18 Celliers Street" value={this.state.address} onChange={this.handleAllinput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' name='email' placeholder="XXXX@yahoo.com" value={this.state.email} onChange={this.handleAllinput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Mobile </Form.Label>
        <Form.Control type='number' name='mobile' placeholder="+27 81 211 9429" value={this.state.mobile} onChange={this.handleAllinput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" name='message' value={this.state.message} onChange={this.handleAllinput}  type='textarea' rows={6} placeholder='Please leave a message here !' />
      </Form.Group>
  
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" name='agree' checked={this.state.agree} onChange={this.handleAllinput} label="Accept the terms & Conditions" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agree
      </Button>
    </Form>

    </Container>
                  </Fragment>
              </div>)
          }
        }

        export default Contact