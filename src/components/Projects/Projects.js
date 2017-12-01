import React from "react";
import "./Projects.css";
import Slider from "react-slick"

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

let Projects = (props) => (<div>
  <div className="container-fluid">
    <h4 className="myhead">MY PROJECTS</h4><hr/>
    <div className="row justify-content-center">

      <div className="col-md-8">
        <Slider {...settings}>

          <div className="slide-custom">
            <h1 className="">My React-Blog Project</h1>
            <div className="row">
              <div className="col-md-6">
                <p>This Project basically is about a creating a blog using props This project entails the usage of props; how familiar i am with it.with this project i knew that props are key parse values which or that are pollinated or transfered from parent(app) to the child(header etc etc). I also realized that with React; there's no need to write in index html codes because it does that automatically,thus saves time.. In combination with .map I took an array of objects and displayed on JSX</p>
              </div>
              <div className="col-md-6">
                <div className="image-custom" style={{
                    backgroundImage: "url('./images/blog.png')"
                  }}></div>
              </div>

            </div>
          </div>

          <div className="slide-custom">
            <h1 className="">My Ugly Things Project</h1>
            <div className="row">
              <div className="col-md-6">
                <p>This project basically describes how React and Redux combines to make a feature on the web occurs or phenomenates. this project also show the usage of th CRUD application of redux, thus Create,Read,Update and Delete,but in this project, I did not use Update, since all that i was required in the application was create,read and delete. Since react is always needed in such projects, there's the need to always pass values from parent to the child and the redux which basically mean to bring back actions. I did use Bootstrap to style up some aspects of the project.</p>
              </div>
              <div className="col-md-6">
                <div className="image-custom" style={{
                    backgroundImage: "url('./images/uglything.png')"
                  }}></div>
              </div>

            </div>
          </div>

        </Slider>
      </div>
    </div>

  </div>

</div>)
export default Projects;
