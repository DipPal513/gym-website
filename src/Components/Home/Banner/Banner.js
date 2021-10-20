import React from "react";
import { Carousel } from "react-bootstrap";
import "../../../Styles/Banner.css";
const Banner = () => {
  return (
    <>
      <Carousel style={{ marginTop: "50px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://media.istockphoto.com/photos/rear-view-of-athletic-man-exercising-pullups-in-a-gym-picture-id1128859123?b=1&k=20&m=1128859123&s=170667a&w=0&h=Nw00nCpxOp_i_ZIRFub28aSg45STA1wzYI5ryikCEAE="
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="banner-title text-uppercase fw-bold">
              time to
              <span> get </span>
              <span className="text-danger">fit</span>
            </h1>
            <p>
              Getshape is very smart and technical sound gym, which maintain
              professional trainer as well as modern equipments.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/holding-weight-and-sitting-picture-id1277242852?b=1&k=20&m=1277242852&s=170667a&w=0&h=JRJsVDFKO_i9omBAMNySqCfwvRTB-yeVrjJY2jd7JZw=
            "
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 className="banner-title text-uppercase fw-bold">
              follow
              <span> your </span>
              <span className="text-danger">passion</span>
            </h1>
            <p>
              Gym is very important to maintain our health luptas sit fugit, sed
              quia cuuntur magni dolores eos qui rat ione volupta 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://media.istockphoto.com/photos/cross-training-picture-id615593996?b=1&k=20&m=615593996&s=170667a&w=0&h=SURXwkfrUG9I_Bb6stSTAFzmKLg0ttfa-aMDl0ahef0="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="banner-title text-uppercase fw-bold">
              time to
              <span> get </span>
              <span className="text-danger">fit</span>
            </h1>
            <p>
              Award winner dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
