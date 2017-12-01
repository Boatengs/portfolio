import React from "react";

//import components
//import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Objective from "./components/Objective";
import Interest from "./components/Interest";
import Projects from "./components/Projects";

// let links = [
//   {
//     name: "Home",
//     url: "/"
//   }, {
//     name: "Contact",
//     url: "/contact"
//   }, {
//     name: "Blog",
//     url: "/blog"
//   }
// ];

let App = (props) => (

  <div className="my-content">

    {/* <NavBar brand="BOATENG SAMPSON" links={links}/> */}
    <Header/>
    <Objective/>
    <Interest/>
    <Skills/>
    <Projects/>
    <Footer/>


  </div>
)

export default App;
