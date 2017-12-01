import React from "react";
import "./Header.css";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  dots: false,
  arrows: false
};

let Header = (props) => (
  <div className="container-fluid header">
    <div className="row">
      <div className="col-md-6">
        <Slider {...settings}>
          <div>
            <div className="header-text">
              <h1 className="display-4 text-center first">I am Boateng Sampson, A Full Stuck Web Developer</h1>
            </div>
          </div>
          <div>
            <div className="header-text-1">
              <h5 className="display-3 text-center ">The real impact of Life depends on will,the determination to keep on fighting<br/>
                No matter the cost.</h5>
            </div>
          </div>
        </Slider>
      </div>
      <div className="col-md-6">
        <div className="my-image"></div>
      </div>
    </div>
  </div>
)

export default Header;
