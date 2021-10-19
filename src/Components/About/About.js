import React from "react";
import "../../Styles/About.css";
const About = () => {
  return (
    <>
      <section className="py-5" style={{ backgroundColor: "rgb(35, 42, 53)" }}>
        <div className="container">
          <div className="row justify-content-center align-items-center py-5">
            <div className="col-lg-6 text-start">
              <h1 className="fw-bold text-white" style={{ fontSize: "50px" }}>
                Your <span className="text-danger">Training</span>
              </h1>
              <p className="text-muted text-start">professional Coaches</p>
              <h5 className="text-white mb-3">
                My name is <span className="text-danger">albert</span>, I will
                Introduce you to our Fitness club with a free personal training
              </h5>
            </div>
            <div className="col-lg-6">
              <img
                src="https://quomodosoft.com/html/perfect-gym/images/about-image.png"
                alt=""
                className = 'img-fluid mb-3'
              />
            </div>
          </div>
          <div className="row" py-5>
            <div className="col-lg-6 col-md-8 col-sm-12">
              <img
                src="https://images.unsplash.com/photo-1532384816664-01b8b7238c8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bXVzY2xlJTIwYm9keSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
                className='img-fluid mb-3'

              />
            </div>
            <div className="col-lg-6 text-white text-start">
              <h2 className="text-uppercase fw-bold" style={{ color: "white" }}>
                why people choose <span className="text-danger">us</span>
              </h2>
              <ol className="mt-5 about-list">
                <li className="text-capitalize">best facilities in budget</li>
                <li className="text-capitalize">
                  Professional and Expert Trainer can show your the right way
                </li>
                <li className="text-capitalize">
                  Health and Fitness Tips Personal Health Solution
                </li>
                <li className="text-capitalize">
                  Membership Card Health and Fitness Tips Personal Health
                  Solution
                </li>
                <li className="text-capitalize">
                  Membership Card Health and Fitness Tips Personal Health
                  Solution Diet Plan Included 6 Days a Week Zumba Classes
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
