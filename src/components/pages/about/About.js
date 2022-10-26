import React from "react";
import About1 from "../../../assets/images/about-ic-1.png";
import About2 from "../../../assets/images/about-ic-2.png";
import About3 from "../../../assets/images/about-ic-3.png";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 main-about">
            <h2>About US</h2>
            <h5>we are added our major services</h5>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-4 col-md-6">
            <div className="about-iteam">
              <div className="icon">
                <img src={About1} alt="" />
              </div>
              <div className="content">
                <h2>Facebook Marketing</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt unde harum numquam magnam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="about-iteam">
              <div className="icon">
                <img src={About2} alt="" />
              </div>
              <div className="content">
                <h2>Facebook Marketing</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt unde harum numquam magnam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 m-auto">
            <div className="about-iteam">
              <div className="icon">
                <img src={About3} alt="" />
              </div>
              <div className="content">
                <h2>Facebook Marketing</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt unde harum numquam magnam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
