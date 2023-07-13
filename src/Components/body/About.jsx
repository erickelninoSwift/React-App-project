import React, { Component, Fragment } from 'react'
import '../../App.css'
import Container from 'react-bootstrap/esm/Container'

export class About extends Component {
  render() {
    document.title = "About"
    return (
      <div style={{width:"75%",margin:"20px auto"}}>
       <Fragment>
           <Container style={{textAlign: "left"}}>
            <h1>About us </h1>

            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, magna at luctus tincidunt, nibh nisl cursus quam, eu aliquam nibh nunc a magna. Vestibulum eu consectetur leo, non fringilla neque. Nunc vestibulum ligula eget leo eleifend bibendum. Aenean et dapibus dolor. Phasellus eget massa nibh. Integer magna elit, sodales id varius vel, mattis sagittis leo. Praesent eget est nulla. Pellentesque tempor sit amet nunc eu condimentum.</p>

          <p> Vestibulum accumsan orci eu laoreet dapibus. Nam scelerisque tellus accumsan ipsum consectetur hendrerit. Sed commodo tempor ullamcorper. Sed nec mattis lacus. Proin vitae ultricies arcu. Cras bibendum lectus erat, eget elementum felis egestas et. Praesent egestas, nisl in aliquam convallis, dolor urna placerat ligula, et laoreet ante nunc ut mi. Maecenas scelerisque lorem non molestie maximus. Nulla et ipsum libero. Ut nisi neque, volutpat quis risus facilisis, dapibus vulputate nisl. Quisque placerat gravida varius. Vestibulum erat nisi, dignissim eget arcu eu, imperdiet rutrum nibh. Aliquam ut malesuada leo, ac porttitor orci. Donec volutpat sed dui ac tempus.</p>

          <p> Curabitur nec ligula quis nunc conv
            .allis consequat. Duis mattis massa a diam sagittis molestie. Quisque efficitur tincidunt nibh ut rutrum. Aenean malesuada massa quam, id placerat felis lobortis consequat. Vivamus volutpat venenatis arcu id sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pretium elit id blandit sodales. Suspendisse potenti.</p>


           </Container>
       </Fragment>   
      </div>
    )
  }
}

export default About