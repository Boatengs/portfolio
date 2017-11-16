import React from "react";
import "./Skills.css";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  dots: true,
  arrows: false
};

let Skills = (props) => (
  <div>
    <div className="container-fluid">
      <div>
        <h1 className="sub">What Can I do ?</h1><hr/>
      </div>
      <div className="row justify-content-lg-center">
        <div className="col-md-6 myskills">
          <h2>SKILLS</h2><hr/>
          <Slider {...settings}>

            <a className="my-slide">

              <i className="devicon-nodejs-plain colored"></i>
            </a>
            <a className="my-slide">
              <i className="devicon-react-original colored"></i>
            </a>
            <a className="my-slide">
              <i className="devicon-mocha-plain colored"></i><br/></a>
            <a className="my-slide">
              <i className="devicon-javascript-plain colored"></i>
            </a>
            <a className="my-slide">
              <i className="devicon-html5-plain colored"></i>
            </a>
            <a className="my-slide">
              <i className="devicon-css3-plain colored"></i>
            </a>
            <a className="my-slide">
              <i className="devicon-bootstrap-plain colored"></i>
            </a>

          </Slider>
        </div>
        <div className="col-md-6 myskills ">
          <h2>NON-TECH SKILLS</h2><hr/>
          <ul>
            <li>
              <i className="fa fa-asterisk "></i>Good Blogging skills
            </li>
            <li>
              <i className="fa fa-asterisk"></i>
              Proficient in Sign Language</li>
            <li>
              <i className="fa fa-asterisk"></i>
              Good Communication Skills</li>
            <li>
              <i className="fa fa-asterisk"></i>
              Self-motivated</li>
          </ul>
        </div>

      </div>

    </div>
  </div>
)
export default Skills;
