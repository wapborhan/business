import React from "react";
import Work1 from "../../../assets/images/work/work-1.jpg";
import Work2 from "../../../assets/images/work/work-2.jpg";
import Work3 from "../../../assets/images/work/work-3.jpg";
import Work4 from "../../../assets/images/work/work-4.jpg";
import WorkOver from "../../../assets/images/work/work-over.png";

export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 work-head">
            <h2>Our Work</h2>
            <p>We are added our featured works below</p>
          </div>
        </div>
        <div className="row work-main">
          <div className="col-lg-3 col-md-3 col-sm-6 m-auto work-iteam">
            <div className="work-iteam-img">
              <img src={Work1} alt="" />
            </div>
            <div className="work-overley text-center">
              <div className="overly-content">
                <img src={WorkOver} alt="" />
                <h2>Project Name</h2>
                <h3>Landing Page...</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 m-auto work-iteam">
            <div className="work-iteam-img">
              <img src={Work2} alt="" />
            </div>
            <div className="work-overley text-center">
              <div className="overly-content">
                <img src={WorkOver} alt="" />
                <h2>Project Name</h2>
                <h3>Landing Page...</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 m-auto work-iteam">
            <div className="work-iteam-img">
              <img src={Work3} alt="" />
            </div>
            <div className="work-overley text-center">
              <div className="overly-content">
                <img src={WorkOver} alt="" />
                <h2>Project Name</h2>
                <h3>Landing Page...</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 m-auto work-iteam">
            <div className="work-iteam-img">
              <img src={Work4} alt="" />
            </div>
            <div className="work-overley text-center">
              <div className="overly-content">
                <img src={WorkOver} alt="" />
                <h2>Project Name</h2>
                <h3>Landing Page...</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 m-auto work-iteam">
            <div className="work-iteam-img">
              <img src={Work4} alt="" />
            </div>
            <div className="work-overley text-center">
              <div className="overly-content">
                <img src={WorkOver} alt="" />
                <h2>Project Name</h2>
                <h3>Landing Page...</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 m-auto work-iteam">
            <div className="work-iteam-img">
              <img src={Work3} alt="" />
            </div>
            <div className="work-overley text-center">
              <div className="overly-content">
                <img src={WorkOver} alt="" />
                <h2>Project Name</h2>
                <h3>Landing Page...</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 m-auto work-iteam">
            <div className="work-iteam-img">
              <img src={Work2} alt="" />
            </div>
            <div className="work-overley text-center">
              <div className="overly-content">
                <img src={WorkOver} alt="" />
                <h2>Project Name</h2>
                <h3>Landing Page...</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 m-auto work-iteam">
            <div className="work-iteam-img">
              <img src={Work1} alt="" />
            </div>
            <div className="work-overley text-center">
              <div className="overly-content">
                <img src={WorkOver} alt="" />
                <h2>Project Name</h2>
                <h3>Landing Page...</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
