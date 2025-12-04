import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
       <center>
        <h2 className="mt-4 mb-3">College History</h2>
       </center>
      
      <p>
        Kings Engineering College was established in 2001 with a mission to
        provide high-quality technical education and produce globally competent
        engineers. Over the years, the institution has grown into a center of
        excellence, offering state-of-the-art laboratories, modern
        infrastructure, and a strong focus on research and innovation.
      </p>
      <p>
        With dedicated faculty and a vibrant academic environment, the college
        has consistently ranked among the top institutions in the region. Today,
        it stands as a symbol of commitment, discipline, and academic
        excellence.
      </p>
      <center>
         <h2 className="mt-4 mb-3">Mission & Vision</h2>
      </center>
     

      <div className="card p-3 mb-3">
        <h4>Our Vision</h4>
        <p>
          To be a globally recognized institution known for excellence in
          engineering education, research, and innovation, empowering students
          to become responsible leaders and innovators.
        </p>
      </div>

      <div className="card p-3 mb-3">
        <h4>Our Mission</h4>
        <ul>
          <li>
            To offer high-quality technical education with a focus on
            innovation.
          </li>
          <li>To promote research, creativity, and lifelong learning.</li>
          <li>
            To instill ethical values and leadership qualities in students.
          </li>
          <li>
            To provide industry-oriented training for real-world challenges.
          </li>
        </ul>
      </div>

      <center>
        <h2 className="mt-4 mb-3">Achievements</h2>
      </center>
      
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>Ranked Top 10 – 2024</h5>
            <p>Recognized for innovation and research excellence.</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>90% Placement – 2022</h5>
            <p>Highest placement record in college history.</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>NBA Accredited – 2020</h5>
            <p>Programs accredited for high academic standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
