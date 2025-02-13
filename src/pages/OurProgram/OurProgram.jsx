import React from "react";
import "./OurProgram.css";
import Tab from "../AboutUs/components/Tab/Tab";
import Card from "./components/Card/Card";
import BroadCard from "./components/BroadCard/BroadCard";
import Testimonial from "./components/Testimonial/Testimonial";

export default function OurProgram() {
  const subject_data = [
    {
      title: "English",
      img: "/imgs/sub2.png",
      link: "#contact_us_content",
    },
    {
      title: "Hindi",
      img: "/imgs/sub1.png",
      link: "#contact_us_content",
    },
    {
      title: "Mathematics",
      img: "/imgs/sub6.png",
      link: "#contact_us_content",
    },
    {
      title: "Science",
      img: "/imgs/sub5.png",
      link: "#contact_us_content",
    },
    {
      title: "Social Science",
      img: "/imgs/sub4.png",
      link: "#contact_us_content",
    },
    {
      title: "Computer Science",
      img: "/imgs/sub3.png",
      link: "#contact_us_content",
    },
  ];

  const teaching_data = [
    {
      title: "Interactive Sessions",
      img: "/imgs/teaching1.png",
      content:
        "Interactive live classes using multimedia tools that promote active participation",
      is_right_pic: false,
    },
    {
      title: "Quizzes",
      img: "/imgs/teaching2.png",
      content:
        "Quizzes to encourage independent thought and self-directed learning",
      is_right_pic: true,
    },
    {
      title: "Regular Assesments",
      img: "/imgs/teaching5.png",
      content:
        "Regular assessments to monitor progress and identify areas for improvement",
      is_right_pic: false,
    },
    {
      title: "Personalized Attention",
      img: "/imgs/teaching4.png",
      content:
        "Personalized attention to meet the unique needs of each student",
      is_right_pic: true,
    },
  ];

  return (
    <div className="ourprogram mt-4" id="our_program">
      <h5 className="ourprogram_title mb-5">
        <i>Our Program </i>
      </h5>

      <div className="ourprogram_tab row g-0">
        <div className="col-md-7">
          {" "}
          <img
            className="ourprogram_img"
            src="/src/assets/our program 1.jpg"
            alt="image"
          />
        </div>
        <div className="col-md-5 p-2 d-flex justify-content-center align-items-center flex-column">
          {" "}
          <h4 className="ourprogram_content">
            We offer one-on-one tutoring sessions tailored to each student's
            unique learning style and pace, ensuring effective understanding and
            retention of concepts.
          </h4>
          <a className="ourprogram_button btn hover-border-primary" href="#contact_us">Book a Demo</a>
          <hr />
        </div>
      </div>
      <Tab title="Grade Specific Online Tuition" is_title={true} />

      <div className="row g-0 mb-4">
        <div className="col-md-6 p-2 mb-3 d-flex flex-column justify-content-center align-items-center">
          <h3 className="grade_title">Grade 3 - 5</h3>
          <img
            src="/src/assets/gradec2.png"
            className="grade_img shadow-lg"
            alt="image"
          />
        </div>
        <div className="col-md-6 p-2 d-flex flex-column justify-content-center align-items-center">
          <h3 className="grade_title">Grade 6 - 9</h3>
          <img
            src="/src/assets/gradec1.png"
            className="grade_img shadow-lg"
            alt="image"
          />
        </div>
      </div>
      <Tab title="Subjects We Cover" is_title={true} />

      <div className="all_sub p-5 row d-flex g-0">
        {subject_data.map((sub, idx) => {
          return (
            <div
              key={idx}
              className="col-md-4 d-flex justify-content-center align-items-center"
            >
              <Card title={sub.title} img={sub.img} link={sub.link} />
            </div>
          );
        })}
      </div>
      <Tab title="Teaching Methodology" is_title={true} />
      <div className="teaching_container w-100 d-flex flex-column justify-content-center align-items-center">
        {teaching_data.map((d, idx) => {
          return (
            <BroadCard
              key={idx}
              title={d.title}
              content={d.content}
              img={d.img}
              is_right_pic={d.is_right_pic}
            />
          );
        })}
      </div>
      <Tab title="Testimonials" is_title={true} />
      <div className="testimonial_wrapper">
      <div className="testimonial_container row g-0 d-flex justify-content-center align-items-center">
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
        <div className="col-md-4 g-2">
          <Testimonial />
        </div>
      </div>
      </div>
    </div>
  );
}
