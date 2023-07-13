import React from "react";
import Menu from "./Menu";
// import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Routes, Route } from 'react-router-dom';


const Body = () =>{


    return(
      <div>
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/About" element={ <About/>}/>
            <Route path="/Contact" element={ <Contact/>}/>
        </Routes>
      </div> 
    );

}


export default Body