import React from "react";
import "./Footer.css";

let Footer = (props) => (
  <div>

    <footer className="my-footer">
      <div className="container-fluid ">
        <div className="row">
          <div className=" pt-4 col-md-4 my-copy">
            <i className="fa fa-copyright">2017 Boateng Sampson</i>
          </div>
          <div className="col-md-8">
            <a href="https://www.facebook.com/courage.boatwright">
              <i className="fa fa-facebook fa-2x icons"></i>
            </a>
            <a href="https://www.linkedin.com/in/sampson-boateng-42a325151/">
              <i className="fa fa-linkedin fa-2x icons"></i>
            </a>
            <a href="https://github.com/Boatengs">
              <i className="fa fa-github fa-2x icons" href=""></i>
            </a>
          </div>

        </div>
      </div>
    </footer>

  </div>
)

export default Footer;
