import React from "react";
import "./about.css";
import Logo from "../pages/images/MY LOGO.png";

export default function About() {
  return (
    <div className="about">
      <div className="row">
        <div className="col-12 mb-2 py-4">
          <h1 className="display-5 fw-bolder text-center text-light">
            About Us
          </h1>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <p className="lead text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            interdum sem sed justo interdum, vitae dapibus odio sagittis. In vel
            tellus dapibus, posuere turpis nec, vulputate nibh. Pellentesque
            accumsan placerat faucibus. Quisque sit amet elit non tellus
            sollicitudin luctus.
          </p>
        </div>
        <div className="col-md-6">
          <img src={Logo} className="mx-auto d-block w-50 h-75 " alt="..." />
        </div>
      </div>
    </div>
  );
}
