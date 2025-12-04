import React from "react";
import "./Home.css";
import DepartmentCard from "./DepartmentCard";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.collegetransitions.com/wp-content/uploads/2024/12/college-student-life.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20240914/pngtree-diverse-group-of-students-studying-in-a-library-with-open-books-image_16203293.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://presidencyuniversity.in/assets/images/computer-labs-img_3.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br /> <br />
      <div>
        <center>
          <h1 style={{color:"#4e4819ff"}}>Kings Engineering College</h1>
          <br /><br />
          <p style={{color:" #413839"}}>
          Welcome to Kings Engineering College, Chennai! <br/>
          We are committed to providing quality education in Engineering and Technology, fostering innovation, research, and holistic development.
        </p>
        <p style={{color:" #413839"}}>
          Our college offers modern laboratories, experienced faculty, and vibrant campus life. Join us to build your future with knowledge and excellence.
        </p>
        <button> <Link to="/about">About College</Link></button>
        </center>
        <br /> <br />
        <DepartmentCard/>
        <Contact/>
        
      </div>
    </div>
  );
};

export default Home;
