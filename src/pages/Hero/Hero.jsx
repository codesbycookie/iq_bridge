import React from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero_section">
      <div className="row g-0">
        <div className="col-6 d-flex flex-column justify-content-center">
          {" "}
          <div className="hero_content">
            <h1>
              Empowering <br />
              Excellence
            </h1>
            <h4>
              Personalized Online CBSE Tuition for <br />
              Grades 3-9 in the GSC
            </h4>
          <div className="hero_buttons d-flex">
            <button className="book_button">Book a Demo</button>
            <button className="explore_us d-flex justify-content-center align-items-center" id="button">Explore Us &nbsp;&nbsp;<RiArrowRightDoubleLine/></button>
          </div>
          </div>

        </div>
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <div className="image_section">
            <div className="extra_images d-flex justify-content-between">
              <img src="/imgs/image 10.png" alt="" />
            <img src="/imgs/image 9.png" className='' alt="" />

            </div>
            <img src="/imgs/hero_main_pic2.png" className="main_image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
