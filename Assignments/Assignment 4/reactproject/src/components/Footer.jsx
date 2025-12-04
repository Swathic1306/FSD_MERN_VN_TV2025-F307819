import React from "react";

const Footer = () => {
  return (
    <div>
        <div className="card text-center mt-4 sticky">
        <div className="card-header fw-bold">Visit Us</div>

        <div className="card-body">
          <h5 className="card-title">Kings Engineering College</h5>

          <p className="card-text">
            Irungattukottai, Sriperumbudur, Chennai – 602117 <br />
            An Autonomous Institution, Affliated To AU.
          </p>

          <p className="card-text">
            <strong>Phone:</strong> +91 98765 43210 <br />
            <strong>Email:</strong> info@kings.edu.in
          </p>

          <a href="#" className="btn btn-primary">
            Visit Our Campus
          </a>
        </div>

        <div className="card-footer text-body-secondary">
          © 2025 Kings Engineering College. All Rights Reserved.
        </div>
      </div>

      </div>
  );
};

export default Footer;
