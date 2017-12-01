import React from "react";
import "./Skills.css";
// import Slider from "react-slick";
// //
// const settings = {
//   infinite: true,
//   speed: 700,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   pauseOnHover: true,
//   dots: true,
//   arrows: false
// };

let Skills = (props) => (
  <div>
    <div className="container-fluid">
      <div>
        <h2 className="sub">What Can I do ?</h2><hr/>
      </div>
      <div className="row ">
        <div className="col-md-12 myskills">
          <h2 className="skil">SKILLS</h2><hr/>
          {/* <Slider {...settings}> */}

            <a className="">

              <i className="devicon-nodejs-plain colored"></i>
            </a>
            <a className="">
              <i className="devicon-react-original colored"></i>
            </a>
            <a className="">
              <i className="devicon-mocha-plain colored"></i></a>
            <a className="">
              <i className="devicon-javascript-plain colored"></i>
            </a>
            <a className="">
              <i className="devicon-html5-plain colored"><br/></i>
            </a>
            <a className="">
              <i className="devicon-css3-plain"></i>
            </a>
            <a className="">
              <i className="devicon-bootstrap-plain colored"></i>
            </a>
            <a className="">
              <i className="devicon-express-original colored"></i>
            </a>
            <a className="">
              <i className="devicon-jquery-plain colored"></i>
            </a>
            <a className="">
              <i className="devicon-mongodb-plain colored"></i>
            </a>

          </div>
        </div>

          {/* </Slider> */}
          <h2 className="">NON-TECH SKILLS</h2><hr/>

        <div className="row">

            <div className="col-md-4">
              <i className="fa fa-asterisk "></i>Good Blogging skills
            </div>
            <div className="col-md-4">
              <i className="fa fa-asterisk"></i>
              Proficient in Sign Language</div>
            <div className="col-md-4 ">
              <i className="fa fa-asterisk"></i>
              Good Communication Skills
            </div>
          </div>
         </div>

      </div>


)
export default Skills;
